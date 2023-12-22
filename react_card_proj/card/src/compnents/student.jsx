import React from "react";

function Student(props) {
  const isLoggedIn = true;
  return (
    
    <div className="student">
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Location: {props.location}</p>
      
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <p>Please log in to access the content.</p>
      )}

    </div>
  );
}

export default Student;