import "./App.css";
import { useState } from "react";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (formData.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }
    let today = new Date();

    if (formData.dob > today.toISOString()) {
      alert("Invalid date of birth. Date of birth can not be in the future.");
    } else {
      setSubmittedData(formData);
      setIsFormOpen(false);
      console.log(submittedData);
    }
    setFormData("");
  };

  return (
    <div className={`modal ${!isFormOpen ? "active" : "passive"}`}>
      <h1>User Details Modal</h1>
      <button
        style={{
          color: "white",
          fontSize: "20px",
          backgroundColor: "blue",
          width: "150px",
          height: "50px",
          borderRadius: "8px",
        }}
        onClick={() => setIsFormOpen(true)}
      >
        Open Form
      </button>

      {isFormOpen && (
        <div className="modal-content">
          <h2 magin-top="20px">Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <br />
              <input
                required
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email Address:
              <br />
              <input
                required
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <br />
              <input
                required
                id="phone"
                type="phoneNumber"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Date of Birth:
              <br />
              <input
                required
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </label>
            <br />
            <button
              className="submit-button"
              style={{
                color: "white",
                fontSize: "15px",
                backgroundColor: "blue",
                width: "125px",
                height: "40px",
                borderRadius: "5px",
                margin: "10px",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
