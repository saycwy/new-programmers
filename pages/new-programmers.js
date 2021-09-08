const NewProgrammmers = () => {
  const display_some_text = "My name is Say Chen Wai";

  const showAlert = () => {
    alert("My first message as a function");
  };

  const showAlert2 = (message) => {
    alert("My second message is: " + message);
  };

  const newWayFunc2 = (param1, param2) => ((param1 * param2) - param1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>This is a new page.</div>
      <div>{display_some_text}</div>
      <div>
        <button onClick={showAlert}>First Button</button>
      </div>
      <div>
        <button onClick={() => showAlert2("Pass some text inside")}>
          Second Button
        </button>
      </div>
      <div>
        We wrote a new function with ES6 today and the result is: {newWayFunc2(1000, 15)}
      </div>
    </div>
  );
};

export default NewProgrammmers;
