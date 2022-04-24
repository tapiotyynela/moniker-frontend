import React from "react"
import { useNavigate } from "react-router"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import Navigation from "../../components/Navigation"

const Home = () => {
    const navigate = useNavigate()
    return (
        <AuthContainer>
            <Heading>MONIKER</Heading>
            <Button onClick={() => navigate('/newGame')}>new game</Button>
            <Navigation/>
        </AuthContainer>
    )
}

export default Home