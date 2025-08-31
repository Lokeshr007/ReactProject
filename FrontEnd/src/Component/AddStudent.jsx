import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';

function AddStudent() {
  const [form, setForm] = useState({ name: '', rollno: '', dept: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to backend to add student
    await fetch('http://localhost:8080/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    // Navigate to student list after adding
    navigate('/students');
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="rollno"
          placeholder="Roll No"
          value={form.rollno}
          onChange={handleChange}
          required
        />
        <input
          name="dept"
          placeholder="Dept"
          value={form.dept}
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
