import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setContact] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name: name,
      number: mobile,
      location: location,
    };
    //add vaidation
    if (!name || !mobile || !location) {
      alert("Please fill all fields");
      return;
    }
    //call the function passed from parent component

    props.onContactAdded(contactData);
    setName("");
    setContact("");
    setLocation("");
  };

  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Added:</h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setContact(e.target.value)}
          ></input>

          <input
            type="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <button className="add-button" style={{ marginTop: "10px" }}>
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
