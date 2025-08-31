import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './StudentView.css';

function StudentView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await fetch(`http://localhost:8080/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter(student => student.id !== id));
    }
  };

  return (
    <div className="student-container">
      <h2>Student List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dept}</td>
                <td>
                  <Link to={`/update/${student.id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>
                  <button className="delete-btn" onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentView;
