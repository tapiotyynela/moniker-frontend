import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import Text from '../../common/Text'
import TeamScore from "./components/TeamScore"

const Game: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as any
    const [game, setGame] = useState(state.game)

    useEffect(() => {
        // setGame(state.game)
    },[])

    return (
        <AuthContainer style={{paddingTop: 100}}>
                <Text text={`Starting team:`} size='l' font='Marvel, sans-serif'/>
                <div style={{marginTop: 100}}>
                    {
                        game.teams.map((t: any) => <TeamScore/>)
                    }
                </div>
                <div style={{marginTop: 40}}>
                    <Button onClick={() => navigate('/round')}>start round</Button>
                </div>
        </AuthContainer>
    )
}

export default Game