import React from "react";
import "./Checkbox.css";

function Checkbox({ isCheckbox, setCheckbox }) {

  const clickCheckbox = () => {
    setCheckbox(isCheckbox ? false : true)
  }
  return (
    <div className={isCheckbox ? "checkbox checkbox_active" : "checkbox checkbox_disabled"} onClick={clickCheckbox}>
      <input type="checkbox" className="checkbox__input" />
    </div>
  )
};

export default Checkbox;