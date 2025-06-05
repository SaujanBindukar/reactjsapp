import { useState } from "react";

const ContactAdder = () => {
  const [name, setName] = useState("John");

  const onClickPressed = () => {
    setName("Dave");
  };
  //if we keep onClickPressed() in the button, it will be called when thepage renders
  return (
    <>
      Contact Added:
      <button onClick={onClickPressed}> Click Me! </button>
      <p> My name is {name}</p>
    </>
  );
};

export default ContactAdder;
