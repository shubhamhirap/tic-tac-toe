import React from "react";
import { Button } from "@material-ui/core";
import "../App.css";
import { Link } from "react-router-dom";
import image from "../assets/images/image.png";

const Welcome = () => {
  return (
    <div className="customStyle">
      <img src={image} alt="circle and X" />
      <h4>Welcome!!!</h4>
      Choose your play mode
      <div className="mt-2 mb-2">
        <Link to={{pathname: '/pickside', state: "withFriend"}}>
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: 25 }}
        >
          With a Friend
        </Button>
        </Link>
      </div>
      <div>
        <Link to={{pathname: "/pickside", state: "withBot"}}>
        <Button variant="contained" style={{ borderRadius: 25 }}>
          With a Bot
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
