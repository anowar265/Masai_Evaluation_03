import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Redux/Login/action";
import { store } from "../../Redux/store";

export const LoginSignUp = () => {
  const dispatch = useDispatch();
  const todo = useSelector((store) => store);

  const [formdata, setFormData] = useState({
    name: "",
    password: "",
    location: "",
    interests: [],
    image: "",
    subscribedsubscribed: [],
  });

  const handlechange = (e) => {
    const { name } = e.target;
    if (name === "interests") {
      setFormData({
        ...formdata,
        [name]: [...formdata.interests, e.target.value],
      });
    } else if (name === "subscribedsubscribed") {
      setFormData({
        ...formdata,
        [name]: [...formdata.subscribedsubscribed, e.target.value],
      });
    } else {
      setFormData({
        ...formdata,
        [name]: e.target.value,
      });
    }
  };
  return (
    <div className="loginSignUp">
      <form
        className="signUp"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:8080/users", formdata).then(() => {
            alert("User Created successfully");
            setFormData({
              name: "",
              password: "",
              location: "",
              interests: [],
              image: "",
              subscribedsubscribed: [],
            });
          });
        }}
      >
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={handlechange}
          name="name"
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handlechange}
          name="password"
          required
        />
        <br />
        <select
          value={""}
          className="location"
          onChange={handlechange}
          name="location"
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={handlechange}
          name="interests"
          value="technology"
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          onChange={handlechange}
          value="food"
          name="interests"
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          onChange={handlechange}
          value="movies"
          name="interests"
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          onChange={handlechange}
          value="culture"
          name="interests"
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          onChange={handlechange}
          value="art"
          name="interests"
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          onChange={handlechange}
          value="drama"
          name="interests"
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={handlechange}
          name="image"
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .get("http://localhost:8080/users")
            .then(({ data }) => dispatch(userLogin()));
        }}
      >
        <h1>Login</h1>
        <label>name</label>
        <input type="text" className="name" onChange={(event) => {}} required />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
