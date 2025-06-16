const Dummy = (props) => {
  const onClickhandler = () => {
    props.onDummyClick();
  };
  return (
    <>
      <button onClick={onClickhandler}>Grand Child</button>
    </>
  );
};

export default Dummy;
