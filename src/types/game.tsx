export type NewTeam = {
    name: string
    players: number[]
}

export type NewGame = {
    teams: NewTeam[]
    pointsToWin: number
    roundLength: number
}