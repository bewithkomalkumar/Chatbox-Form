import react from "react";
import { useState, useRef } from "react";
function ClosureForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [inputType, setInputType] = useState("text");
  const [labeText, setlabeText] = useState("Enter Your Name");
  const count = useRef(0);
  const form = useRef(null);
  const input = useRef(null);
  const getData = (event) => {
    event.preventDefault();
    if (input.current.value !== "") {
      count.current++;
    }

    if (count.current === 1) {
      setlabeText((prev) => "Enter Your Age");
      setInputType("number");
    } else {
      setInputType("text");
    }
    form.current.reset();
  };

  const handleChange = (event) => {
    if (name === "" || count.current === 0) {
      setName((prev) => event.target.value);
    } else if (age === "" || count.current === 1) {
      setAge((prev) => setAge(event.target.value));
    }
  };
  return (
    <div>
      <form ref={form}>
        <label>{labeText}</label>
        <br />
        <input type={inputType} onChange={(e) => handleChange(e)} ref={input} />

        <button
          onClick={(e) => {
            getData(e);
          }}
        >
          Submit
        </button>
      </form>

      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>count: {count.current}</p>
    </div>
  );
}

export default ClosureForm;
