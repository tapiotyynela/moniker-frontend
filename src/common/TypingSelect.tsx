import styled from 'styled-components'
import ArrowDown from '../assets/ArrowDown.png'

const InputContainer = styled.div`
    width: 310px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    width: 280px;
    height: 42px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    &:focus {
        outline: none;
    };
`

const Label = styled.p`
    font-size: 20px;
    margin: 0;
    padding-left: 5px;
    font-family: 'Modak', cursive;
    color: white;
`
export const TypingSelect = ({...props}: any) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Label>{props.label}</Label>
            </div>
            <InputContainer>
                <Input {...props} />
                <img src={ArrowDown} style={{paddingRight: '10px'}} onClick={() => console.log("MOIKKA")}/>
            </InputContainer>
        </div>
    )
}