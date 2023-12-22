// import React, { useState } from 'react';

// const Registration = () => {
//   const [data, setData] = useState({
//     username: '',
//     password: '',
//     cpassword: '',
//     age: '',
//     mobileNo: '',
//   });

//   const [userName, setUserName] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Cpassword, setCpassword] = useState('');
//   const [age1, setAge1] = useState('');
//   const [mobileNo, setMobileNo] = useState('');

//   const { username, password, cpassword, age, mobileNo: mobileNumber } = data;

//   const change = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     if (username === '' || password === '' || cpassword === '' || age === '' || mobileNumber === '') {
//       alert('Please fill in all details');
//     } else if (username === password) {
//       alert('Username and password cannot be the same');
//     } else if (password !== cpassword) {
//       alert('Password and confirm password must be the same');
//     } else if (age === null || age < 18 || age > 25) {
//       alert('Age must be between 18 and 25');
//     } else if (mobileNumber.length !== 10) {
//       alert('Mobile number must be 10 digits');
//     } else {
//       setUserName('User Name: ' + username);
//       setPassword('Password: ' + password);
//       setCpassword('Confirm Password: ' + cpassword);
//       setAge1('Age: ' + age);
//       setMobileNo('Mobile Number: ' + mobileNumber);
//     }
//   };

//   return (
//     <>
//       <div>
//         <center>
//           <form onSubmit={submit}>
//             <h1>User Validation Form</h1>
//             <p />
//             <p />
//             <b>Enter UserName :</b>
//             <input type="text" name="username" value={username} placeholder="Enter User Name" onChange={change} required />
//             <p />
//             <b>Enter password :</b>
//             <input type="password" name="password" value={password} placeholder="Enter Password" onChange={change} required />
//             <p />
//             <b>Enter Confirm Password :</b>
//             <input type="password" name="cpassword" value={cpassword} placeholder="Enter Confirm Password" onChange={change} required />
//             <p />
//             <b>Enter Age :</b>
//             <input type="text" name="age" value={age} placeholder="Enter your age" onChange={change} required />
//             <p />
//             <b>Enter Phone Number :</b>
//             <input type="number" name="mobileNo" value={mobileNumber} placeholder="Enter Mobile Number" onChange={change} required />
//             <p />
//             <p />
//             <input type="submit" value="Register" />
//           </form>
//         </center>
//       </div>
//       <p />
//       <p />
//       <div>
//         <center>
//           <fieldset>
//             <h1>
//               {userName}
//               <br />
//               {Password}
//               <br />
//               {Cpassword}
//               <br />
//               {age1}
//               <br />
//               {mobileNo}
//               <br />
//             </h1>
//           </fieldset>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Registration;

// -----------------------------USING USE REF------------------------------------------------

import React, { useState, useRef } from 'react';

const Registration = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    cpassword: '',
    age: '',
    mobileNo: '',
  });

  const [userName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');
  const [age1, setAge1] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);
  const ageRef = useRef(null);
  const mobileNoRef = useRef(null);

  const { username, password, cpassword, age, mobileNo: mobileNumber } = data;

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (username === '' || password === '' || cpassword === '' || age === '' || mobileNumber === '') {
      alert('Please fill in all details');
      return false;
    } else if (username === password) {
      alert('Username and password cannot be the same');
      return false;
    } else if (password !== cpassword) {
      alert('Password and confirm password must be the same');
      return false;
    } else if (isNaN(age) || age < 18 || age > 25) {
      alert('Age must be a number between 18 and 25');
      return false;
    } else if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      alert('Mobile number must be a 10-digit number');
      return false;
    }
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserName('User Name: ' + username);
      setPassword('Password: ' + password);
      setCpassword('Confirm Password: ' + cpassword);
      setAge1('Age: ' + age);
      setMobileNo('Mobile Number: ' + mobileNumber);

      // Clear input fields using refs
      userNameRef.current.value = '';
      passwordRef.current.value = '';
      cpasswordRef.current.value = '';
      ageRef.current.value = '';
      mobileNoRef.current.value = '';
    }
  };

  return (
    <>
      <div>
        <center>
          <form onSubmit={submit}>
            <h1>User Validation Form</h1>
            <b>Enter UserName :</b>
            <input
              type="text"
              name="username"
              ref={userNameRef}
              placeholder="Enter User Name"
              onChange={change}
              required
            />
            <br />
            <b>Enter password :</b>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Enter Password"
              onChange={change}
              required
            />
            <br />
            <b>Enter Confirm Password :</b>
            <input
              type="password"
              name="cpassword"
              ref={cpasswordRef}
              placeholder="Enter Confirm Password"
              onChange={change}
              required
            />
            <br />
            <b>Enter Age :</b>
            <input
              type="text"
              name="age"
              ref={ageRef}
              placeholder="Enter your age"
              onChange={change}
              required
            />
            <br />
            <b>Enter Phone Number :</b>
            <input
              type="text"
              name="mobileNo"
              ref={mobileNoRef}
              placeholder="Enter Mobile Number"
              onChange={change}
              required
            />
            <br />
            <input type="submit" value="Register" />
          </form>
        </center>
      </div>
      <div>
        <center>
          <fieldset>
            <h1>
              {userName}
              <br />
              {Password}
              <br />
              {Cpassword}
              <br />
              {age1}
              <br />
              {mobileNo}
              <br />
            </h1>
          </fieldset>
        </center>
      </div>
    </>
  );
};

export default Registration;

// ------------example of states and hooks -----------------------------------------------------

// import React, { useState } from 'react';

// function Registration() {
//   const [counter, setCounter] = useState(0);
//   const [names, setNames] = useState(['John', 'Jane', 'Bob', 'Alice']);
//   const [name, setName] = useState(names[0]); // Set initial name

//   const handleClick = () => {

//     if(counter<10){
//       setCounter(counter + 1);
//     }

//     // Cycle through names array
    
//     const nextNameIndex = counter % names.length;
//     setName(names[nextNameIndex]);
//   };

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Counter: {counter}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

// export default Registration;

