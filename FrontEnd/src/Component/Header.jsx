import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Student Management</h1>
      <nav>
        <a href="/students">View Students</a>
        <a href="/add">Add Student</a>
        <a href="/update">Update Student</a>
      </nav>
    </header>
  );
}

export default Header;
