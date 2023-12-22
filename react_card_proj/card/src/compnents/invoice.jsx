import React, { useState } from 'react';
const Invoice = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    designation: '',
    salary: '',
  });

  const [ta, setTA] = useState(0);
  const [da, setDA] = useState(0);
  const [pf, setPF] = useState(0);
  const [grossSalary, setGrossSalary] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
  };

  const calculateSalary = () => {
    const baseSalary = parseFloat(employeeDetails.salary);

    // Assuming TA is 10%, DA is 5%, and PF is 8% of the base salary, you can adjust these values accordingly
    const calculatedTA = 0.1 * baseSalary;
    const calculatedDA = 0.05 * baseSalary;
    const calculatedPF = 0.08 * baseSalary;

    const calculatedGrossSalary = baseSalary + calculatedTA + calculatedDA;
    const calculatedNetSalary = calculatedGrossSalary - calculatedPF;

    setTA(calculatedTA);
    setDA(calculatedDA);
    setPF(calculatedPF);
    setGrossSalary(calculatedGrossSalary);
    setNetSalary(calculatedNetSalary);
  };

  return (
    <div className="App">
      <h1>Employee Information</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} value={employeeDetails.name} />

        <label>Designation:</label>
        <input type="text" name="designation" onChange={handleInputChange} value={employeeDetails.designation} />

        <label>Base Salary:</label>
        <input type="number" name="salary" onChange={handleInputChange} value={employeeDetails.salary} />

        <button type="button" onClick={calculateSalary}>
          Calculate Salary
        </button>
      </form>

      <div className="result">
        <h2>Calculated Details</h2>
        <p>Travel Allowance (TA): {ta}</p>
        <p>Dearness Allowance (DA): {da}</p>
        <p>Provident Fund (PF): {pf}</p>
        <p>Gross Salary: {grossSalary}</p>
        <p>Net Salary: {netSalary}</p>
      </div>
    </div>
  );
};

export default Invoice;
