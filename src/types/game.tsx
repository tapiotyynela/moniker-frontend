import {Option} from './components'

export type NewTeam = {
    name: string
    players: Option[]
}

export type NewGame = {
    teams: NewTeam[]
    pointsToWin: number
    roundLength: number
}

export interface INewTeam {
    name: string
    players: number[]
}
export interface INewGame {
    teams: INewTeam[]
    pointsToWin: number
    roundLength: number
}