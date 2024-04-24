import React, { useState } from "react";
import LangContext from "../context/lang";
import { useContext } from "react";

function Register() {
  const { lang } = useContext(LangContext);
  const [tmp, setTmp] = useState("");
  const [gameForm, setGameForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [gameFormErrors, setGameFormErrors] = useState({
    name: null,
    email: null,
    username: null,
    password: null,
    confirmpass: null,
  });
  const handleFieldChange = (event) => {
    console.log(event.target.value);
    const field_name = event.target.name;
    const field_value = event.target.value;

    if (field_name === "name") {
      setGameForm({
        ...gameForm,
        name: field_value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        name: field_value.length === 0 ? "This field is required" : null,
      });
    }

    if (field_name === "email") {
      setGameForm({
        ...gameForm,
        email: field_value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        email:
          field_value.length === 0
            ? "This field is required"
            : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                field_value
              )
            ? null
            : "email not valid",
      });
    }

    if (field_name === "username") {
      setGameForm({
        ...gameForm,
        username: field_value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        username:
          field_value.length === 0
            ? "This field is required"
            : /^[a-zA-Z0-9]+$/.test(field_value)
            ? null
            : "username not valid",
      });
    }
    if (field_name === "password") {
      setTmp(field_value);

      setGameForm({
        ...gameForm,
        password: field_value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        password:
          field_value.length === 0
            ? "This field is required"
            : /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
                field_value
              )
            ? null
            : "password not valid",
      });
    }
    if (field_name === "confirmpass") {
      setGameForm({
        ...gameForm,
        confirmpass: field_value,
      });

      setGameFormErrors({
        ...gameFormErrors,
        confirmpass:
          field_value.length === 0
            ? "This field is required"
            : field_value === tmp
            ? null
            : "passwords doesnt match up",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gameForm);
  };
  return (
    <div dir={lang} className="register container mt-4 p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            onChange={handleFieldChange}
            value={gameForm.name}
            name="name"
          />
          {gameFormErrors.name && (
            <div id="nameInput" class="form-text text-danger">
              {gameFormErrors.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleFieldChange}
            value={gameForm.email}
            name="email"
          />
          {gameFormErrors.email && (
            <div id="emailInput" class="form-text text-danger">
              {gameFormErrors.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputUser" className="form-label">
            UserName
          </label>
          <input
            type="user"
            className="form-control"
            id="exampleInputUser"
            aria-describedby="userHelp"
            onChange={handleFieldChange}
            value={gameForm.username}
            name="username"
          />
          {gameFormErrors.username && (
            <div id="usernameInput" class="form-text text-danger">
              {gameFormErrors.username}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleFieldChange}
            value={gameForm.password}
            name="password"
          />
          {gameFormErrors.password && (
            <div id="passwordInput" class="form-text text-danger">
              {gameFormErrors.password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmpass" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmpass"
            onChange={handleFieldChange}
            value={gameForm.confirmpass}
            name="confirmpass"
          />
          {gameFormErrors.confirmpass && (
            <div id="confirmpassInput" class="form-text text-danger">
              {gameFormErrors.confirmpass}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
