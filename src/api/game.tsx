import axios from "axios"
import { NewGame } from "../types/game"

export const createNewGame = async (data: NewGame) => {
    const res = await axios.post('http://localhost:3000/api/game/newGame', data)
    return res
}