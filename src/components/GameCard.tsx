import { Button } from '../common/Button'
import Text from '../common/Text'
import { Game, NewGame } from '../types/game'

type GameCardProps = {
    game: Game
}

const GameCard = ({ game }: GameCardProps) => {
    return <div style={{ width: '70%', padding: 10, backgroundColor: '#6740BA', marginBottom: 15, borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div style={{flexDirection: 'column'}}>
            {game.Teams.map(team => {
                return <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Text text={team.name} font='Modak, cursive' size='m'/><Text text={team.score + '/' + game.pointsToWin.toString()} font='Modak, cursive' size='m'/>
                    </div>
            })}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Button>Start game</Button>
        </div>
    </div>
}

export default GameCard