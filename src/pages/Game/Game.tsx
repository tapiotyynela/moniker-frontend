import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import Text from '../../common/Text'
import TeamScore from "./components/TeamScore"

const Game: React.FC = () => {
    const navigate = useNavigate()
    // const [game, setGame] = useState(state.game)

    return (
        <AuthContainer style={{paddingTop: 100}}>
                <Text text={`Starting team:`} size='l' font='Marvel, sans-serif'/>
        </AuthContainer>
    )
}

export default Game