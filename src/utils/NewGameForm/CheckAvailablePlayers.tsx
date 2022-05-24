import { Option } from "../../types/components"
import { NewTeam } from "../../types/game"

export const CheckAvailablePlayers = (teams: NewTeam[], allPlayers: Option[]) => {
    const playersOfTeams = teams.flatMap((team: NewTeam) => {
        return team.players.flatMap((player: any) => player)
    })
    const available = allPlayers.filter((p: Option) => !playersOfTeams.includes(p))
    return available   
}