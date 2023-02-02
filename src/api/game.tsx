import { post, get } from "."
import { INewGame } from "../types/game"

export const createNewGame = async (data: INewGame) => {
    const res = await post('/game/newGame', data)
    return res.data
}

export const getAllPleyersGames = async (userId: number | undefined) => {
    if (userId) {
        const res = await get(`/game/list/${userId}`)
        return res.data
    } else {
        console.log("NO USERID")
    }
}