import React from 'react';
import { Link } from 'react-router-dom';


const HelpCart = (props) => {
    
    const{Name,image} =props.data
    return (
        <Link className = "container col-md-2 mr-4 ml-5" to="/register">
        <div >
           
           <div>
           <img src={image} alt="" style={{height:"200px", width:"220px"}}/>
           <p className="bg-info mb-3 rounded-bottom  font-weight-bold text-light pt-4 text-center" style={{height:"80px", width:"220px"}}>{Name}</p>
           </div>
                   </div>
        </Link>
    );
};

export default HelpCart;