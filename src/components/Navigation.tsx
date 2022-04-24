import { useNavigate } from "react-router"
import styled from "styled-components"
const Navigation = () => {
    const NavContainer = styled.div`
        display: flex;
        align-items: flex-start;
        flex-direction: column; 
        justify-content: space-around;
        align-self: flex-start;
        padding-left: 50px;
        padding-top: 40px;
    `
    const NavText = styled.p`
        font-size: 20px;
        color: white;
        font-family: 'Modak', cursive;
    `
    const navigate = useNavigate()
    return (
        <NavContainer>
            <NavText onClick={() => navigate('/stats')}>stats</NavText>
            <NavText onClick={() => navigate('/gameHistory')}>game history</NavText>
            <NavText onClick={() => navigate('/friends')}>friends</NavText>
            <NavText onClick={() => navigate('/addWords')}>add words</NavText>
        </NavContainer>
    )
}

export default Navigation