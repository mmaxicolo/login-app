import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { registerRequest } from "../api/auth.js";

function RegisterPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleFocus = (ev) => {
    ev.target.placeholder = "";
  };

  const handleBlur = (ev, originalPlaceholder) => {
    ev.target.placeholder = originalPlaceholder;
  };

  return (
    <form
      className="form"
      onSubmit={async (ev) => {
        ev.preventDefault();
        const user = {
          user: name,
          mail: mail,
          password: password,
        };
        const res = await registerRequest(user);
        console.log(res);
      }}
    >
      <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "User")}
            className="inputs"
            placeholder="User"
            type="text"
            name="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          {validationName(name)}
      </div>
      <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "Email")}
            className="inputs"
            placeholder="Email"
            type="text"
            name="mail"
            value={mail}
            onChange={(ev) => setMail(ev.target.value)}
          />
          {validationMail(mail)}
      </div>
      <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "Password")}
            className="inputs"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          {passwordVerification(password)}
      </div>
      <button type="submit" className="btn">
        Registrarse
      </button>
    </form>
  );
}

const validationName = (name) => {
  if (name.length >= 5) {
    return <AiFillCheckCircle />;
  }
};

const validationMail = (mail) => {
  if (mail.includes("@")) {
    return <AiFillCheckCircle className="check" />;
  }
};

const passwordVerification = (val) => {
  const containsMayus = val.split("").some((v) => {
    return v.toUpperCase() === v && v.toLowerCase() !== v;
  });
  const containsMinus = val.split("").some((v) => {
    return v.toLowerCase() === v && v.toUpperCase() !== v;
  });
  const minimum = true ? val.length >= 8 : false;
  if (containsMayus && containsMinus && minimum) {
    return <AiFillCheckCircle className="check" />;
  }
};

export default RegisterPage;
