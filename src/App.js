import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import { useState } from "react";

import "./styles/app.css";
import NavBar from "./components/NavBar";

const App = () => {
  const getContactsFromLocalStorage = JSON.parse(
    localStorage.getItem("contacts")
  );
  const [contactList, setContactList] = useState(
    getContactsFromLocalStorage ?? []
  );

  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contactList];
    setContactList(allContacts);
    //change object to string and save in local storage
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const saveData = () => {
    localStorage.setItem("name", "xyz");
  };
  const getData = () => {
    const getData = localStorage.getItem("name");
    alert(getData);
  };

  const clearData = () => {
    localStorage.clear();
    setContactList([]);
  };

  const isLoggedIn = false;

  return (
    <>
      <NavBar />
      <div className="contact-adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div
        className="contact-list"
        style={{ color: !isLoggedIn ? "green" : "red" }}
      >
        <h3>Contact List:</h3>
        {contactList.map((e, index) => {
          return <Contact key={index} contacts={e} />;
        })}
      </div>

      <button onClick={saveData}> Save Data</button>
      <button onClick={getData}> Get Data </button>
      <button onClick={clearData}> Clear Data </button>
    </>
  );
};

export default App;
