import { useEffect, useState } from "react"
import { getUsersBySearchWord } from "../../api/user"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { InputWithLabel } from "../../common/Input"
import CustomModal from "../../common/Modal"
import SelectInput from "../../common/Select"
import { Option } from "../../types/components"
import Text from '../../common/Text'
import { FormatSelectOptions } from '../../utils/NewGameForm/SelectDataFormatter'
import { CheckAvailablePlayers } from "../../utils/NewGameForm/CheckAvailablePlayers"
import { useNavigate } from "react-router-dom"
import { createNewGame } from "../../api/game"
import { NewTeam } from "../../types/game"
import { toast } from "react-toastify"

const NewGame = () => {
    const navigate = useNavigate()
    const [options, setOptions] = useState<Option[]>([])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [teamName, setTeamName] = useState<string>('')
    const [roundLength, setLengthOfRounds] = useState<number>(0)
    const [pointsToWin, setPointsToWin] = useState<number>(0)
    const [teams, setTeams] = useState<NewTeam[]>([])
    const [availablePlayers, setAvailablePlayers] = useState<Option[]>([])
    const [allPlayers, setAllPlayers] = useState<Option[]>([])

    useEffect(() => {
        getUsers()
    }, [])

    const createGame = async () => {
        const allTeamPlayers = teams.flatMap(team => team.players.flatMap(p => p))
        if(teams.length < 2 || allTeamPlayers.length < 2) {
            toast.error("Must have at least 2 teams", {
                position: toast.POSITION.TOP_LEFT
              });
        } else if (roundLength < 1 || pointsToWin < 1) {
            toast.error("Check round length and points to win", {
                position: toast.POSITION.TOP_LEFT
              });
        } else {
            const normalizedTeams = teams.map(team => {
                const players = team.players.map((p) => parseInt(p.value))
                return {
                    ...team,
                    players
                }
            })
            const data = {
                teams: normalizedTeams,
                roundLength,
                pointsToWin
            }
            const game = await createNewGame(data)
            navigate('/game', {
                state: {
                    game
                }
            })
        }
    }

    const getUsers = async () => {
        const results = await getUsersBySearchWord({
            word: ''
        })
        setOptions(FormatSelectOptions(results.data))
    }

    const addPlayer = (players: Option[]) => {
        setAllPlayers([...players])
        setAvailablePlayers([...CheckAvailablePlayers(teams, players)])
    }

    const addPlayerToTeam = async (players: Option[], name: string) => {
        const allTeams = teams.map(team => {
            if (team.name === name) {
                team.players = players.map((p) => p)
            }
            return team
        })
        setTeams([...allTeams])
        setAvailablePlayers([...CheckAvailablePlayers([...allTeams], allPlayers)])
    }

    const renderTeams = () => {
        let teamInputs = [] 
        for(let i = 0; i < teams.length; i++) {
            teamInputs.push(<SelectInput id={teams[i].name} onChange={(e: any) => addPlayerToTeam(e, teams[i].name)} placeholder="Select players" isMulti={true} options={availablePlayers} label={`${teams[i].name} players`} />)
        }
        return <div>{teamInputs.map(i => i)}</div>
    }

    const addTeam = () => {
        let tiims = teams
        tiims.push({
            name: teamName,
            players: [],
        })
        setTeams(tiims)
        setModalOpen(false)
    }

    const modalContent = (
        <div>
            <Text size="l" text="new team" font='Modak, cursive'/>
            <InputWithLabel label="team name" style={{width: '70vw'}} onChange={(e: any) => setTeamName(e.target.value)}/>
            <div style={{width: '70vw', display: 'flex', alignSelf: 'center'}}>
                <Button style={{margin: 'auto'}} onClick={() => addTeam()}>
                    add
                </Button>
            </div>
        </div>
    )

    return (
        <AuthContainer>
            <Heading>new game</Heading> 
            <SelectInput options={options} isMulti={true} placeholder="Search players..." label="add players" onChange={addPlayer} />
            {renderTeams()}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '10px'}}>
                <Button>randomize teams</Button>
                <Button onClick={() => setModalOpen(true)}>add team</Button>
            </div>
            <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)} contentLabel="TERVE" children={modalContent}/>
            <InputWithLabel type="number" label="length of round (s)" value={roundLength} onChange={(e: any) => setLengthOfRounds(e.target.value)}/>
            <InputWithLabel type="number" label="points to win the game" value={pointsToWin} onChange={(e: any) => setPointsToWin(e.target.value)}/>
            <Button onClick={() => createGame()}>create game</Button>
        </AuthContainer>
    )
}

export default NewGame