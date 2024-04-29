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

    const combineOtp = newOtp.join("");
    if (combineOtp.length == length) {
      onSubmit(combineOtp);
    }

    // move to the next input if current field is filled
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);

    if(index > 0 && !otp[index - 1]){
        inputRef.current[otp.indexOf("")].focus()
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key == "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };

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
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
            ref={(input) => (inputRef.current[index] = input)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
