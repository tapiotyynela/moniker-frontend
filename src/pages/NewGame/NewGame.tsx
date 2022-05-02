import React, { useEffect, useState } from "react"
import { MultiValue, SingleValue } from "react-select"
import { getUsersBySearchWord } from "../../api/user"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { InputWithLabel } from "../../common/Input"
import CustomModal from "../../common/Modal"
import SelectInput from "../../common/Select"
import { Option } from "../../types/components"
import { Team } from "../../types/team"
import { User } from "../../types/user"
import Text from '../../common/Text'
import { formatSelectOptions } from '../../utils/SelectDataFormatter'

const NewGame = () => {
    const [results, setResults] = useState<Option[]>([])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [teamName, setTeamName] = useState<string>('')
    const [teams, setTeams] = useState<Team[]>([])
    const [availablePlayers, setAvailablePlayers] = useState<Option[]>([])
    const [playersOfTeams, setPlayersOfTeams] = useState<Option[]>([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const results = await getUsersBySearchWord({
            word: ''
        })
        setResults(formatSelectOptions(results.data))
    }

    const addPlayer = (players: Option[]) => {
        setAvailablePlayers([...players])
    }

    const addPlayerToTeam = async (players: Option[],  name: string) => {
        const allTeams = teams.map(team => {
            if (team.name === name) {
                team.players = players.map(p => p.label)
            }
            return team
        })
        setTeams([...allTeams])
        const filteredPlayers = availablePlayers.filter(p => !playersOfTeams.includes(p))
        setAvailablePlayers([...filteredPlayers])
        console.log("TEAMS", teams)
    }

    const renderTeams = () => {
        let teamInputs = [] 
        for(let i = 0; i < teams.length; i++) {
            teamInputs.push(<SelectInput id={teams[i].name} onChange={(e) => addPlayerToTeam(e, teams[i].name)} placeholder="Search players..." isMulti={true} options={availablePlayers} label={`${teams[i].name} players`} />)
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
        console.log("TIIMIT", teams)
        setModalOpen(false)
    }

    const modalContent = (
        <div>
            <Text size="l" text="new team" />
            <InputWithLabel label="team name" style={{width: '70vw'}} onChange={(e: any) => setTeamName(e.target.value)}/>
            <div style={{width: '70vw', display: 'flex', alignSelf: 'center'}}>
                <Button style={{margin: 'auto'}} onClick={() => addTeam()}>
                    add
                </Button>
            </div>
        </div>
    )

    const removeTeam = () => {

    }

    return (
        <AuthContainer>
            <Heading>new game</Heading> 
            <SelectInput options={results} isMulti={true} placeholder="Search players..." label="add players" onChange={addPlayer} />
            {renderTeams()}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '10px'}}>
                <Button>randomize teams</Button>
                <Button onClick={() => setModalOpen(true)}>add team</Button>
            </div>
            <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)} contentLabel="TERVE" children={modalContent}/>
            <InputWithLabel label="length of round (s)"/>
            <InputWithLabel label="points to win the game" />
            <Button>start game</Button>
        </AuthContainer>
    )
}

export default NewGame