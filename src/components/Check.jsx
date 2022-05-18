import React from "react";

const Check = ({ isChecked, click }) => {
  const backgroundCheck = isChecked
    ? "url(https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652760265/ToDo/bg-mobile-light_yl5vuu.jpg)"
    : "";
  const borderCheck = isChecked ? "none" : "2px solid blue";
  return (
    <div
      className="check"
      onClick={click}
      style={{
        background: backgroundCheck,
        border: borderCheck,
      }}
    >
        <img src={isChecked ? "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652809304/ToDo/icon-check_jxenpj.svg": ""} alt="" />
    </div>
  );
};

export default Check;
