import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { getAllPleyersGames } from "../../api/game"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import Text from "../../common/Text"
import { Heading } from "../../common/Heading"
import GameCard from "../../components/GameCard"
import Navigation from "../../components/Navigation"
import { AuthContext, AuthProvider, useAuth } from "../../hooks/useAuth"

const Home = () => {
    const navigate = useNavigate()
    const value = useContext(AuthContext)
    console.log(value)
    const [activeGames, setActiveGames] = useState([])
    useEffect(() => {
        const getGames = async () => {
            const games = await getAllPleyersGames(value?.user?.userId || 0)
            setActiveGames(games)
        }
        getGames()
    }, [])
    const subHeading = activeGames.length > 0 ? 'Active games' : 'No active games'
    return (
            <AuthContainer>
                <>
                <Heading>MONIKER</Heading>
                <Text text={subHeading} size='l' font='Modak, cursive' />
                {activeGames.length > 0 && activeGames.map(game => {
                    return <GameCard game={game}/>
                })}
                <Button onClick={() => navigate('/newGame')}>new game</Button>
                <Navigation/>
                </>
            </AuthContainer>
    )
}

export default Home