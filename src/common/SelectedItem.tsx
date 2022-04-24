import styled from 'styled-components'
import Close from '../assets/Close.png'
import { User } from '../types/user'

const Container = styled.div`
    background-color: #6740BA;
    display: flex;
    flex-diraction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    height: 24px;
    border: none;
    margin: 10px;
    padding: 7px;
    &:focus {
        outline: none;
    };
`

const Text = styled.p`
    font-size: 15px;
    margin: 0;
    padding-right: 7px;
    padding-left: 5px;
    font-family: 'Modak', cursive;
    color: white;
`

type SelectedItemProps = {
    user: User;
    removePlayer: (id: number) => void
}

export const SelectedItem = ({user, removePlayer}: SelectedItemProps) => {
    const { userId } = user
    return (
        <Container>
            <Text>{user.nickName}</Text>
            <img src={Close} onClick={() => removePlayer(userId)}/>
        </Container>
    )
}