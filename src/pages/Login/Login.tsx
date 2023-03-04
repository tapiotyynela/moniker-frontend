import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  // useEffect(() => {
  //     if(user?.user !== null) {
  //         navigate('/home')
  //     }
  // })

  const handleSubmit = async () => {
    const res: any = logIn({ email: email, password: password });
    if (res.status === 200) {
      navigate("/home");
    } else {
      // TODO: show some notification
    }
  };

  return (
    <div>
      <p>Moniker</p>
      <input onChange={(e: any) => handleEmailChange(e.target.value)} />
      <input
        onChange={(e: any) => handlePasswordChange(e.target.value)}
        type="password"
      />
      <button onClick={() => handleSubmit()}>login</button>
      <button onClick={() => navigate("/register")}>register</button>
    </div>
  );
};

export default Login;
