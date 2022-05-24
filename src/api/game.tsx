import axios from "axios"
import { INewGame } from "../types/game"

export const createNewGame = async (data: INewGame) => {
    const res = await axios.post('http://localhost:3000/api/game/newGame', data)
    return res.data
}