import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import HelpCart from '../HelpCart/HelpCart';

const Home = () => {

  const[tasks,setTasks] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/tasks')
      .then(res=> res.json())
      .then(data =>setTasks(data))
  },[])
  
  
    return (
        <div className="container">
            <br/>
           <h1 style={{textAlign: 'center'}}>I Grow By Helping people In Need</h1> 
           <br/>

  <InputGroup className="mb-3 m-auto" style={{width:"500px"}}>
    <FormControl
    className="pt-4 pb-4"
      placeholder="Search...."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="info" className="pr-4 pl-4">Search</Button>
    </InputGroup.Append>
  </InputGroup>
    <div className="row  mt-5">
      {
        tasks.map((data)=> <HelpCart data={data} key={data._id}></HelpCart>)
      }
    </div>
        </div>
    );
};

export default Home;