import React from 'react';
import { useForm } from "react-hook-form";
const AddTasks = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => 
    {
          
          fetch("http://localhost:5000/addTasks",{
            method :"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data);
          })
        };
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px", margin:"auto" ,display: "block"}}>
               
           <input
          type="text"
          name="Name"
          className="form-control mb-2"
          placeholder="Full Name" 
          ref={register}
        />
        <input type="text" name="image" placeholder="Image Link" id="" ref={register} className="form-control mb-2"
        />
        <button type="submit">Submit Task</button>
               </form> 
        </div>
    );
};

export default AddTasks;