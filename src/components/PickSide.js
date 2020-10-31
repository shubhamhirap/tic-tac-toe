import React, { useState } from "react";
import O_Image from "../assets/images/O_Image.png";
import X_Image from "../assets/images/X_Image.png";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const PickSide = (props) => {
  let choice = props.location.state;

  const [sideValue, setSideValue] = useState("x");
  const handleChange = (event) => {
    setSideValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(sideValue);
  };

  return (
    <div className="customStyle">
      <h5>Pick your side</h5>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="side"
          name="side"
          value={sideValue}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <FormControlLabel
            value="x"
            control={<Radio color="primary" />}
            label={<img src={X_Image} alt="X Icon" />}
            labelPlacement="top"
          />
          <FormControlLabel
            value="o"
            control={<Radio color="secondary" />}
            label={<img src={O_Image} alt="O Icon" />}
            labelPlacement="top"
          />
        </RadioGroup>
        <Link to={{pathname: "/tic-tac-toe", state: {choice, sideValue}}}>
          <Button
            className="mt-5"
            variant="contained"
            style={{ borderRadius: 25 }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Link>
      </FormControl>
    </div>
  );
};

export default PickSide;
