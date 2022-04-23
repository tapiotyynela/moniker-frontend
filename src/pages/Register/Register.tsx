import React from "react";

const Register = () => {
    return (
        <div>
            <p>REGISTER</p>
            <button onClick={() => localStorage.setItem("isAuthenticated", "true")}>
                LOGIN
            </button>
        </div>
    )
}

export default Register