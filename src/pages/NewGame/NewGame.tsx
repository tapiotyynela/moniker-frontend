import React, { useState } from "react"
import { getUsersBySearchWord } from "../../api/user"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { TypingSelect } from "../../common/TypingSelect"
import Navigation from "../../components/Navigation"
import { User } from "../../types/user"

const NewGame = () => {
    const [results, setResults] = useState<User[]>()

    const onSearchChange = async (text: string) => {
        const results = await getUsersBySearchWord({
            word: text
        })
        setResults(results.data)
    }

    return (
        <AuthContainer>
            <Heading>new game</Heading>
            <TypingSelect placeholder="Search by nickname" label="players" onChange={(e: any) => onSearchChange(e.target.value)}/>
            <div>
                {results?.map(r => (
                    <p>{r.nickName}</p>
                ))}
            </div>
        </AuthContainer>
    )
}

export default NewGame