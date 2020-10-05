import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png'
import './Register.css'
const UserInfo = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser , setLoggedInUser]=useContext(UserContext);
    
    const onSubmit = data => 
{
      
      fetch("http://localhost:5000/addUser",{
        method :"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
      })
    };
    

  // let history = useHistory();

  // function handleClick() {
  //   history.push("/users");
  // }
    return (
        <div className="container">
          
            <Link to="/"><img src={logo} alt="" style={{width:"150px",margin:"auto" ,display: "block"}}/></Link>

<div className=" card shadow-lg p-3 mb-5 bg-white rounded" style={{width:"500px",margin:"auto" ,display: "block"}}>
    
<h3 style={{textAlign:"center",marginTop:"30px"}}>Register as a Volunteer</h3>

<form onSubmit={handleSubmit(onSubmit)} style={{width:"400px", margin:"auto" ,display: "block"}}>
        
      
        <input
          type="text"
          name="FullName"
          className="form-control mb-2"
          placeholder="Full Name"
          value={loggedInUser.name}
          required
          ref={register}
        />
        <input type="email" name="email" value={loggedInUser.email} className="form-control mb-2" placeholder="Email" id="" ref={register}/>

        <input type="text" name="taskName" placeholder="Task Name" className="form-control mb-2" ref={register}/>

        <input type="date" className="form-control mb-3" placeholder="Select Date"name="Date" ref={register} required/>

        <input type="text" name="Description" className="form-control mb-2" placeholder="Description" required ref={register}/>

        <input type="text" name="Organize books at the library" className="form-control mb-2" placeholder="Organize books at the library" required ref={register}/>
        

        
        <button type="submit" className="btn btn-info btn-lg btn-block mt-5 mb-3">
  Send </button>

  <Link to="/users" className="d-flex justify-content-center text-muted">Check Your Task</Link>
</form>

</div>
        </div>
    );
};

export default UserInfo;
