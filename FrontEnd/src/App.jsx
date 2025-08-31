import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import StudentView from './Component/StudentView';
import AddStudent from './Component/AddStudent';
import UpdateStudent from './Component/UpdateStudent';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/students" element={<StudentView />} />
        <Route path="/add" element={<AddStudent />} />
         <Route path="/update/:id" element={<UpdateStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
