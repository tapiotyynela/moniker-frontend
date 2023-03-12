import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/Button";
import { Container } from "../../common/FormContainer";
import { Input } from "../../common/Input";
import { Title } from "../../common/Title";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { logIn, user } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  const handleSubmit = async () => {
    const res: any = logIn({ email: email, password: password });
    if (res.status === 200) {
      navigate("/home");
    } else {
      // TODO: show some notification
    }
  };

  return (
    <Container>
      <Title color="#E2BABA">Moniker</Title>
      <Input
        onChange={(e: any) => handleEmailChange(e.target.value)}
        placeholder="Email"
      />
      <Input
        onChange={(e: any) => handlePasswordChange(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <Button variant="normal" onClick={() => handleSubmit()}>
        login
      </Button>
      <Button variant="normal" onClick={() => navigate("/register")}>
        register
      </Button>
    </Container>
  );
};

export default Login;
