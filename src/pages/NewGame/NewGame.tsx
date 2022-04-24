import React, { useEffect, useState } from "react"
import { getUsersBySearchWord } from "../../api/user"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { NumberInput } from "../../common/NumberInput"
import { SelectedItem } from "../../common/SelectedItem"
import { TypingSelect } from "../../common/TypingSelect"
import Navigation from "../../components/Navigation"
import { User } from "../../types/user"
import { SearchResult, SearchResultText } from "./components/SearchResult"

const NewGame = () => {
    const [results, setResults] = useState<User[]>()
    const [selectedPlayers, setSelectedPlayers] = useState<User[]>([])
    const [numberOfTeams, setNumberOfTeams] = useState<number>(0)
    const [searchWord, setSearchWord] = useState<string>('')

    const onSearchChange = async (text: string) => {
        setSearchWord(text)
        const results = await getUsersBySearchWord({
            word: text
        })
        setResults(results.data)
    }

    const addPlayer = (user: User) => {
        let players = selectedPlayers
        players?.push(user)
        setSelectedPlayers([...players])
    }

    const removePlayer = (userId: any) => {
        const players = selectedPlayers.filter(player => player.userId !== userId)
        setSelectedPlayers([...players])
    }

    const increaseTeamCount = () => {
        setNumberOfTeams(numberOfTeams + 1)
    }

    const decreaseTeamCount = () => {
        if (numberOfTeams > 0) {
            setNumberOfTeams(numberOfTeams - 1)
        }
    }

    const renderTeamInputs = () => {
        const inputAmount = selectedPlayers.length / numberOfTeams
        let inputs = []
        for(let i = 0; i < inputAmount; i++) {
            inputs.push(<TypingSelect label={`Team ${i + 1}`}/>)
        }
        return inputs 
    }

    return (
        <AuthContainer>
            <Heading>new game</Heading>
            <TypingSelect placeholder="Search by nickname" label="players" onChange={(e: any) => onSearchChange(e.target.value)}/>
            <div style={{backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                {searchWord !== '' ? results?.map(user => (
                    <SearchResult key={user.nickName} onClick={() => addPlayer(user)}>
                        <SearchResultText>{user.nickName}</SearchResultText>
                    </SearchResult>
                )) : null}
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', width: '330px'}}>
            {
                selectedPlayers && selectedPlayers.length > 0 ? selectedPlayers.map(player => <SelectedItem user={player} removePlayer={removePlayer}/>) : null
            }
            </div>
            <NumberInput increase={increaseTeamCount} decrease={decreaseTeamCount} value={numberOfTeams}/>
            {renderTeamInputs()}
        </AuthContainer>
    )
}

export default NewGame