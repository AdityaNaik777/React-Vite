import React from "react";
import {Bookmark} from 'lucide-react';
const Card = (props) => {
  console.log(props.company)
  return (
    
    
    <div className="card">
      <div>
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company}
            <span>{props.postedDaysAgo}</span>
          </h3>
          <h2>{props.role}</h2>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
        </div>
        <div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
