import { useState } from "react"
import { addWord } from "../../api/word"
import { AuthContainer } from "../../common/AuthContainer"
import { Button } from "../../common/Button"
import { Heading } from "../../common/Heading"
import { InputWithLabel } from "../../common/Input"
import { Word } from "../../types/word"

const AddWords = () => {
    const [word, setWord] = useState<string>('')

    const handleSubmit = async () => {
        const data: Word = {
            word: word,
            timesExplained: 0,
            UserUserId: 1
        }
        const res = await addWord(data)
        console.log("RESSSINEN", res)
    }

    return (
        <AuthContainer>
            <Heading>add words</Heading>
            <InputWithLabel onChange={(e: any) => setWord(e.target.value)} label="word"/>
            <Button onClick={() => handleSubmit()}>save</Button>
        </AuthContainer>
    )
}

export default AddWords