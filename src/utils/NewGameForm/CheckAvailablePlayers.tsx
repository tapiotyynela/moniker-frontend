import { Team } from "../../types/team"
import { Option } from "../../types/components"

export const CheckAvailablePlayers = (teams: Team[], allPlayers: Option[]) => {
    const playersOfTeams = teams.flatMap((team: Team) => {
        return team.players.flatMap((player: any) => player)
    })
    const available = allPlayers.filter((p: Option) => !playersOfTeams.includes(p))
    return available   
}