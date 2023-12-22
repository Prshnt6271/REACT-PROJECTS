import React from 'react';
import './prp.css';

// Student component that receives props and displays information
function Student(props) {
  return (
    <div className="student-info">
      <h2>Student Information</h2>
      <p><strong>Roll No:</strong> {props.rollNo}</p>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Institute:</strong> {props.institute}</p>
      <p><strong>Address:</strong> {props.address}</p>
    </div>
  );
}

function Propp() {
  // Sample data for a student
  const studentData = {
    rollNo: '123',
    name: 'John Doe',
    course: 'Computer Science',
    institute: 'University of React',
    address: '123 Main Street, Cityville'
    
  };
  return (
    <div className="App">
      {/* Rendering the Student component and passing data as props */}
      <Student
        rollNo={studentData.rollNo}
        name={studentData.name}
        course={studentData.course}
        institute={studentData.institute}
        address={studentData.address}
      />
    </div>
  );
}

export default Propp;
