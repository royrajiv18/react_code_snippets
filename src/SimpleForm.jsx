import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [records, setRecords] = useState([]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const emailExists =
        records && records.some((record) => record.email === formData.email);
      if (emailExists) {
        setErrors({ email: "Email already exists" });
        return;
      }

      setRecords([...records, formData]);
      // reset the form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>SimpleForm</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          ></input>
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      {records.length > 0 && (
        <table
          border="1"
          style={{ width: "100%", marginTop: "20px", textAlign: "left" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SimpleForm;
