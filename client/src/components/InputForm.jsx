import { useState } from "react";

import { AiFillCheckCircle } from "react-icons";

function InputForm({ type, name }) {
  const [val, setVal] = useState("");

  const validation = (val, name) => {
    if (name === "mail" && val.includes("@")) {
      return (
        <i>
          <AiFillCheckCircle className="check" />
        </i>
      );
    } else if (name === "password" && passwordVerification(val)) {
      return (
        <i>
          <AiFillCheckCircle className="check" />
        </i>
      );
    }
  };
  const passwordVerification = (val) => {
    const containsMayus = val.length.find((v) => {
      return v.toUpperCase() === v;
    });
    const containsMinus = val.length.find((v) => {
      return v.toUpperCase() === v;
    });
    const minimum = true ? val.length >= 8 : false;

    return containsMayus && containsMinus && minimum;
  };

  const check = validation(val, name);
  return (
    <>
      <input
        type={type}
        name={name}
        value={val}
        onChange={(ev) => setVal(ev.target.value)}
      />
      <span> {check} </span>
    </>
  );
}
export default InputForm;
