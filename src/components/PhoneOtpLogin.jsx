import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpLogin = () => {
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // phone validation
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        setShowOtpInput(true);
        // send request to server with the phone number and get OTP
    };

        const onSubmit = (otp) => {
            console.log(otp)
        }
    return (
        <div>
            {!showOtpInput ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder="Enter Phone Number"
                    />
                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                <div>
                    <p>Enter OTP sent to {phoneNumber}</p>
                    <OtpInput length={4} onSubmit={onSubmit} />
                </div>
            )}
        </div>
    );
};

export default PhoneOtpLogin;
