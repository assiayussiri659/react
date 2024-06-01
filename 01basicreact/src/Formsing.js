import React, { useState } from 'react';
import "./Formsing.css";

const handleChange=()=>{
  
}
const Formsing = () => {
  const [phonenumbar, setPhoneNumbar] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Numbar:', phonenumbar);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Start with your free account today.</h2>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-group">
        <label className="form-label">Email:</label>
          <input
            className='form-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label className="form-label">Password:</label>
          <input
            className='form-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label className="form-label">Phone Numbar:</label>
          <input
            className='form-input'
            type="text"
            value={phonenumbar}
            onChange={(e) => setPhoneNumbar(e.target.value)}
            required
          />
        </div>
        <div className='box'>
          <input type='checkbox' value={first} onChange={()=>handleChange("first")}/> I agree to the Terms of Service and Privacy Policy.
        </div>
        <button className="form-button" type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Formsing;
