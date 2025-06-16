const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.contacts.id} <br />
        {props.contacts.name} <br />
        {props.contacts.number} <br />
        {props.contacts.location} <br />
        <hr />
      </div>
    </>
  );
};

export default Contact;
