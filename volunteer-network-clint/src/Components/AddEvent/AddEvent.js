import { IconButton } from '@material-ui/core';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logos/Group 1329.png'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import "./AddEvent.css";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const classes = useStyles();
    const onSubmit = data => 
{
      
      fetch("http://localhost:5000/addEvent",{
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
<div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded" style={{ height:"90vh"}}>
    <Link to="/admin-panel/registerList">
      <h6 className="text-dark"> <IconButton><PeopleOutlineIcon/>
       </IconButton>
        Volunteer Register List </h6>
    </Link>
    <Link to="/admin-panel/addEvent">
        <h6 className="text-dark ml-5">+ add event</h6>
        </Link>
</div>
<div className="col-md-9 shadow-lg p-3 mb-5 bg-white rounded">
<form onSubmit={handleSubmit(onSubmit)} >
<div className="row">
    <div className="col-md-6">
    <input
          type="text"
          name="eventTitle"
          className="form-control mb-2 w-75"
          placeholder="Enter Event Title"
          required
          ref={register}
        /> 
    </div>
    <div className="col-md-6">
    <input type="date" className="form-control mb-3 w-75" placeholder="Select Date"name="Date" ref={register} required/>   
    </div>
</div>
        <div className="row">
            <div className="col-md-6" >
            <input
          type="text"
          name="Description"
          className="form-control mb-2 w-75"
          placeholder="Enter Description"
          required
          ref={register}
        />
            </div>
            <div className="col-md-6">
            
            <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        type="image"
        name="image"
      >
        Upload
      </Button>
            <div>
      
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      
      
      
    </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
        <div className="text-center mt-5"><Link to="/events" className='text-dark font-weight-bold '> See All Events</Link></div>
</div>
</div>

    </div>
    );
};

export default AddEvent;