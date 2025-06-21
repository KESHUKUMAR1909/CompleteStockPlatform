import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state);
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const toggleForm = () => setShowSignup(!showSignup);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };



  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (showSignup) {
        const res = await dispatch(signupUser(formData));
        if (res) {
            navigate('/dashboard')
            
        }
      } else {
        const loginData = {
          email: formData.email,
          password: formData.password,
        };
        const res = await dispatch(loginUser(loginData));
        if (res) {
           navigate('/dashboard')
        }
      }
    } catch (error) {
      console.error('Auth failed:', error);
      alert('Authentication failed. Please check your credentials.');
    }
  };



  return (
    <div className='container'>
      <div className='row text-center mt-5 g-4 p-5'>
        <p className='text-muted' style={{ fontSize: "45px", fontWeight: "bold" }}>
          Open a free demat and trading account online
        </p>
        <p className='text-muted fs-5'>
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      <div className='row mt-5 p-2 justify-content-center align-content-center m-auto'>
        <div className='col-6 p-5'>
          <img src='media/images/account_open.svg' alt='account_open' style={{ width: "100%" }} />
        </div>

        <div className='col-6 p-5'>
          <h1>{showSignup ? "Signup Now" : "Login Now"}</h1>
          <p className='text-muted'>
            {showSignup
              ? "Or track your existing application"
              : "Welcome back! Please login to continue."}
          </p>

          <form
            onSubmit={handleSubmit}
            className='row gap-4 p-4 col-12 border'
            style={{
              borderRadius: "10px",
              borderColor: "#e0e0e0",
              background: "linear-gradient(60deg, #ffffff 60%, #a9c9ff)"
            }}
          >
            {showSignup && (
              <div>
                <label className='col-4 text-primary fs-5' htmlFor="name">Name</label>
                <input
                  className='col-8'
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter Name'
                  style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }}
                />
              </div>
            )}

            <div>
              <label className='col-4 text-primary fs-5' htmlFor="email">Email</label>
              <input
                className='col-8'
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter Email'
                style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }}
              />
            </div>

            <div>
              <label className='col-4 text-primary fs-5' htmlFor="password">Password</label>
              <input
                className='col-8'
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter Password'
                style={{ borderRadius: "10px", border: "1px solid #a9c9ff" }}
              />
            </div>

            <div className='col-12'>
              <button
                className='bg-primary text-white col-6'
                style={{ padding: "15px 20px", border: "none", borderRadius: "10px" }}
                type="submit"
              >
                {showSignup ? "Signup" : "Login"}
              </button>
            </div>

            <div className='col-12 text-center mt-3'>
              {user && <p className='text-success'>Welcome, {user.name}</p>}
              {error && <p className='text-danger'>{error}</p>}
            </div>

            <div className='col-12 text-center mt-3'>
              <button type="button" className='btn btn-link' onClick={toggleForm}>
                {showSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
