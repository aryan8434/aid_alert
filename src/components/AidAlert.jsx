import React, { useState } from "react";
import "./styles.css";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [foodItems, setFoodItems] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [requestSent, setRequestSent] = useState(false);

  const handleSendOTP = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      alert("OTP sent to " + mobile);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleLogin = () => {
    if (otp.length === 6) {
      setIsLoggedIn(true);
      alert("Logged in successfully with OTP: " + otp);
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  const handleSubmitRequest = () => {
    if (foodItems && numberOfPeople) {
      setRequestSent(true);
      alert("Request sent successfully!");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div className="login-card">
          <h1 className="main-title">Aid Alert</h1>
          <h2 className="login-title">
            {otpSent ? "Enter OTP" : "Login with Mobile"}
          </h2>
          <div className="login-form">
            {!otpSent && (
              <>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  className="login-input"
                />
                <button onClick={handleSendOTP} className="login-button">
                  Send OTP
                </button>
              </>
            )}

            {otpSent && (
              <>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className="login-input"
                />
                <button onClick={handleLogin} className="login-button">
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="login-card">
          <h1 className="main-title">Aid Alert</h1>
          <h2 className="login-title">Request Aid</h2>
          {!requestSent ? (
            <div className="login-form">
              <div className="form-group">
                <label className="form-label">Food Items Required:</label>
                <textarea
                  placeholder="List the food items you need..."
                  value={foodItems}
                  onChange={(e) => setFoodItems(e.target.value)}
                  className="login-input"
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Number of People:</label>
                <input
                  type="number"
                  placeholder="Enter number of people"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                  className="login-input"
                  min="1"
                />
              </div>
              <button onClick={handleSubmitRequest} className="login-button">
                Send Request
              </button>
            </div>
          ) : (
            <div className="success-message">
              <p>Your request has been sent successfully!</p>
              <button 
                onClick={() => {
                  setRequestSent(false);
                  setFoodItems("");
                  setNumberOfPeople("");
                }} 
                className="login-button"
              >
                Send Another Request
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
