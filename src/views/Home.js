import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const a = useState("Awais");
  debugger;
  const handleSubmit = event => {
    alert(`You Typed: ${name}`);
    event.preventDefault();
  };

  return (
    <div className="App">
      <div style={{ marginTop: "25px", marginBottom: "25px" }}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
          <button title="Click Me" onClick={handleSubmit}>
            Click Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
