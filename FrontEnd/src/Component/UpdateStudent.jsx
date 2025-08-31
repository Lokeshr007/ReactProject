import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './UpdateStudent.css'
function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", dept: "" });

  useEffect(() => {
    fetch(`http://localhost:8080/student/${id}`)
      .then(res => res.json())
      .then(data => setForm(data))
      .catch(err => console.error("Error fetching student:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/student/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    navigate("/students"); // navigate back to student list after update
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Enter Name"
          value={form.name || ""}
          onChange={handleChange}
        />
        <input
          name="dept"
          placeholder="Enter Department"
          value={form.dept || ""}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudent;
