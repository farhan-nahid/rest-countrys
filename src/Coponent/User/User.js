import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './User.css';

const User = (props) => {
    //console.log(props);
    return (
        <div className ="user">
             <div className="information">
             <img src={props.user.picture.large} alt=""/>
            <h5> id : {props.user.id.name}</h5>
            <h3>{props.user.name.title} : {props.user.name.first}  {props.user.name.last}</h3>
            <button onClick={() => props.handleAddUser(props.user)} className="details-btn"> <FontAwesomeIcon icon={faPlus} />   More Details</button>
      </div>
            
       
        </div>
           
    );
};

export default User;