import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import TaskCart from '../TaskCart/TaskCart';

const Tasks = () => {
    const [loggedInUser , setLoggedInUser]= useContext(UserContext)
    const[tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users?email='+loggedInUser.email)
        .then(res=> res.json())
        .then(data =>setTasks(data))
    },[])
    
    console.log(tasks);
    return (
        <div className="container mt-3">
            <div className="row">
            
            {
                tasks.map((data) => <TaskCart data={data}></TaskCart>)
            }
        </div>
        </div>
    );
};

export default Tasks;