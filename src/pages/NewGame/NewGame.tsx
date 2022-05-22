import { useEffect, useState } from "react"
import { getUsersBySearchWord } from "../../api/user"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { InputWithLabel } from "../../common/Input"
import CustomModal from "../../common/Modal"
import SelectInput from "../../common/Select"
import { Option } from "../../types/components"
import { Team } from "../../types/team"
import Text from '../../common/Text'
import { FormatSelectOptions } from '../../utils/NewGameForm/SelectDataFormatter'
import { CheckAvailablePlayers } from "../../utils/NewGameForm/CheckAvailablePlayers"
import { useNavigate } from "react-router-dom"

const NewGame = () => {
    const navigate = useNavigate()
    const [options, setOptions] = useState<Option[]>([])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [teamName, setTeamName] = useState<string>('')
    const [teams, setTeams] = useState<Team[]>([])
    const [availablePlayers, setAvailablePlayers] = useState<Option[]>([])
    const [allPlayers, setAllPlayers] = useState<Option[]>([])

    useEffect(() => {
        getUsers()
    }, [])

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
            game: 0,
            score: 0,
            bestPlayer: ''
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
            <InputWithLabel label="length of round (s)"/>
            <InputWithLabel label="points to win the game" />
            <Button onClick={() => navigate('/game')}>start game</Button>
        </AuthContainer>
    )
}

export default NewGame