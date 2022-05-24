import { Option } from "./components";

export type Team = {
    name: string
    players: Option[]
    game?: number
    score?: number
    bestPlayer?: string
}