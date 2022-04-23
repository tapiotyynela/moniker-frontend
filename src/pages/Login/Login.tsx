import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Button} from '../../common/Button'
import { Heading } from '../../common/Heading'
import { InputWithLabel } from '../../common/Input'
import {UnAuthContainer} from '../../common/UnauthenticatedContainer'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleEmailChange = (email: string) => {
        setEmail(email)
    }

    const handlePasswordChange = (password: string) => {
        setPassword(password)
    }

    return (
        <UnAuthContainer>
            <Heading>Moniker</Heading>
            <InputWithLabel onChange={(e: any) => handleEmailChange(e.target.value)} label="email"/>
            <InputWithLabel onChange={(e: any) => handlePasswordChange(e.target.value)} label="password" type="password" />
            <Button onClick={() => console.log("EMAIL: ", email, "PASSWORD: ", password)}>login</Button>
            <Button onClick={() => navigate('/register')}>register</Button>
        </UnAuthContainer>
    )
}

export default Login