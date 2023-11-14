import { useState } from "react";

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleFocus = (ev) => {
    ev.target.placeholder = "";
  };
  const handleBlur = (ev, originalPlaceholder) => {
    ev.target.placeholder = originalPlaceholder;
  };

  return (
    <>
      <form className="form" onSubmit={async (ev) => {
        ev.preventDefault();
        const user = {
          mail,
          password,
        }
        if (mail != "" && password != "") {
          console.log(user);
        }
      }}>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "Email")}
            className="inputs"
            type="text"
            name="mail"
            placeholder="Email"
            value={mail}
            onChange={(ev) => setMail(ev.target.value)}
          />
        </div>
        <div className="input__container">
          <input
            autoComplete="off"
            onFocus={handleFocus}
            onBlur={(ev) => handleBlur(ev, "Password")}
            className="inputs"
            type="password"
            name="mail"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Ingresar
        </button>
      </form>
    </>
  );
}

export default LoginPage;
