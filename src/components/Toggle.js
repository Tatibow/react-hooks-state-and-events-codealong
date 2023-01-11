import React, { useState } from "react";

function Toggle() {

  const [toggleButton, setToggleButton] = useState(false)

  function handleToggle() {
   setToggleButton(!toggleButton)
  }

  const color = toggleButton ? "red" : "white"
  return <button style={{background: color }} onClick={handleToggle}>{toggleButton ? "ON" : "OFF"}</button>;
}

export default Toggle;
