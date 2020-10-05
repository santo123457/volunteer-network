import { IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Table } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Admin = () => {
    const[tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allUsers')
        .then(res=> res.json())
        .then(data =>setTasks(data))
    },[]);

    const deleteItem=(event,id) => {
        fetch(`http://localhost:5000/deleteUser/${id}`,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(result=>{
            if(result){
                event.target.parentNode.Style.display='none'
            }
        })
    }
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
  <Link to="/">
      <img src={logo} alt="logo" style={{ width:"200px"}}/>
      </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-5" >
      <h5> Volunteer register List</h5>
    </Nav>

  </Navbar.Collapse>
</Navbar>
<div className="row">
    <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded" style={{ height:"100vh"}}>
        <Link to="/admin-panel/registerList">
          <h6 className="text-dark"> <IconButton><PeopleOutlineIcon/>
           </IconButton>
            Volunteer Register List </h6>
        </Link>
        <Link to="/admin-panel/addEvent">
            <h6 className="text-dark ml-5">+ add event</h6>
            </Link>
    </div>
    <div className="col-md-9 shadow-lg p-3 mb-5 bg-white rounded" style={{ height:"100vh"}}>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email ID</th>
      <th>Registration Date</th>
      <th>Volunteer List</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        tasks.map(task =><tr>
            <td>{task.FullName}</td>
            <td>{task.email}</td>
            <td>{task.Date}</td>
            <td>{task.taskName}</td>
            <td><IconButton onClick={()=>deleteItem( Event ,task._id)}> <DeleteOutlineIcon  className="text-danger"/></IconButton></td>
        </tr>)
    }
   
  </tbody>
</Table>
        
    </div>
</div>
        </div>
    );
};

export default Admin;