import React from "react";
import "./Button.css";

const Button = ({ type }) => {
  const handle = (type) => {
    switch (type) {
      case "primary":
        return alert("warning");
      case "danger":
        return alert("error");

      case "success":
        return alert("success");
    }
  };

  return (
    <button onClick={() => handle(type)} className={`${type} btn`}>
      Add to cart
    </button>
  );
};

export default Button;
