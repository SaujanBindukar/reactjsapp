import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";

import "./styles/app.css";

const App = () => {
  const contacts = [
    { name: "John", number: "980i605", location: "Nepal" },
    { name: "John1", number: "ddddd", location: "Nedddddpal" },
    { name: "John2", number: "sddsd", location: "Nepadddddl" },
  ];

  const isLoggedIn = false;

  return (
    <>
      <div className="contact-adder">
        <ContactAdder />
      </div>

      <div
        className="contact-list"
        style={{ color: !isLoggedIn ? "green" : "red" }}
      >
        <h3>Contact List:</h3>
        <Contact contacts={contacts[0]} />

        <Contact contacts={contacts[1]} />

        <Contact contacts={contacts[2]} />
      </div>
    </>
  );
};

export default App;
