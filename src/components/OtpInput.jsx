import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    
  };
  const handleClick = () => {};
  const handleKeyDown = () => {};

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={() => handleKeyDown(index, e)}
            className="otpInput"
            ref={(input) => (inputRef.current[index] = input)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
