export const RemoveTeamPlayers = (allPlayers: any, teams: any) => {
    const teamPlayers = teams.map((team: any) => {
        const players = team.players.filter((p: any) => allPlayers.includes(p))
    })
}