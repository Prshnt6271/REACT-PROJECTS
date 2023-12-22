// src/App.js
import React from 'react';
import './emp.css'; // Import Tailwind CSS styles

const Emp = () => {
  const employees = [
    { id: 1, name: 'John Doe', salary: 50000, address: '123 Main St', mail: 'john@example.com', mobile: '1234567890' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },
    { id: 2, name: 'Jane Doe', salary: 60000, address: '456 Oak St', mail: 'jane@example.com', mobile: '9876543210' },

    // Add more employee data as needed
  ];

  function handleClick(){
    alert("really you clicked me");
  
  }
  

  return (
    <div className="p-8">
      <div className="bg-green-500 text-red p-4 flex items-center justify-center font-bold">
        This is a div with Tailwind CSS styling.
      </div>
      
      <h1 className="text-2xl font-bold mb-4 bg-slate-50 gri">Employee Management System</h1>
      <h2 className="text-2xl mb-4 bg-slate-500 flex items-center justify-center font-bold">
        Employee List
      </h2>
      
      <div className="flex bg-white border border-gray-300 p-4">
        <div className="flex-1 font-bold">Emp ID</div>
        <div className="flex-1 font-bold">Emp Name</div>
        <div className="flex-1 font-bold">Emp Salary</div>
        <div className="flex-1 font-bold">Emp Address</div>
        <div className="flex-1 font-bold">Emp Mail</div>
        <div className="flex-1 font-bold">Mobile Number</div>/
      </div>

      {employees.map((employee) => (
        <div key={employee.id} className="flex bg-white border border-gray-300 p-4 mt-2">
          <div className="flex-1">{employee.id}</div>
          <div className="flex-1">{employee.name}</div>
          <div className="flex-1">{employee.salary}</div>
          <div className="flex-1">{employee.address}</div>
          <div className="flex-1">{employee.mail}</div>
          <div className="flex-1">{employee.mobile}</div>
        </div>
      ))}
      <button onClick={handleClick}>
      Click me
    </button>
    </div>

  );
};

export default Emp;
