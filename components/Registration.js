//import logo from "./logo.svg";
import React from "react";
//import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 style={{ height: 30 }}>Student Registration Page</h2>

      <form>
        <div className="Fname">
          <label for="FName"> First Name: </label>

          <input
            type="text"
            placeholder="Enter First Name"
            id="fname"
            required
          />
        </div>
        <div className="Lname">
          <label for="LName"> Last Name: </label>

          <input
            type="text"
            placeholder="Enter Last Name"
            id="lname"
            required
          />
        </div>
        <div className="DOB">
          <label for="start">Date of Birth:</label>

          <input type="date" id="start" />
        </div>
        <form>
          <span className="gender">
            <label for="gender"> Gender: </label>

            <select name="gender" id="gender">
              <option value="Male" selected>
                {" "}
                Male
              </option>

              <option value="Female"> Female</option>

              <option value="Others"> Others </option>
            </select>
          </span>
        </form>
        <div className="mobile">
          <label for="mobile"> Contact Number: </label>

          <input
            type="text"
            placeholder="Contact Number"
            id="mobile"
            required
          />
        </div>
        <div>
          <label for="email"> Email Address: </label>

          <input type="text" placeholder="Email Addresss" id="email" required />
        </div>
        <div className="pwd">
          <label for="password"> Password: </label>

          <input type="password" placeholder="Password" id="pwd" required />
        </div>
        <div>
          <button type="submit" className="nw btn">
            Upload Document
          </button>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Save Registration Details
        </button>
        <button type="submit" className="btn btn-primary btn-block">
          Cancel
        </button>

        <br />
        <br />
      </form>
    </div>
  );
}

export default App;
