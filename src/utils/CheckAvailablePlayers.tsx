export const CheckAvailablePlayers = (teams: any, allPlayers: any) => {
    const playersOfTeams = teams.flatMap((team: any) => {
        return team.players.flatMap((player: any) => player)
    })
    const available = allPlayers.filter((p: any) => !playersOfTeams.includes(p.label))
    return available   
}