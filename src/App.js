import Contact from "./components/Contact";

const App = () => {
  const contacts = [
    { name: "John", number: "980i605", location: "Nepal" },
    { name: "John1", number: "ddddd", location: "Nedddddpal" },
    { name: "John2", number: "sddsd", location: "Nepadddddl" },
  ];
  return (
    <>
      <div className="container">
        <h3>Contact List:</h3>
        <Contact contacts={contacts[0]} />

        <Contact contacts={contacts[1]} />

        <Contact contacts={contacts[2]} />
      </div>
    </>
  );
};

export default App;
