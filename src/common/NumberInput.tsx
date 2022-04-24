import styled from "styled-components";
import BigArrowUp from '../assets/BigArrowUp.png'
import BigArrowDown from '../assets/BigArrowDown.png'

const Text = styled.p`
    font-size: 25px;
    font-family: 'Modak', cursive;
    color: white;
    padding: 10px;
`
const Number = styled.p`
    font-size: 25px;
    font-family: 'Modak', cursive;
    color: white;
    padding: 15px;
    width: 15px;
`

type NumberInputProps = {
    increase: () => void;
    decrease: () => void;
    value: number;
}

export const NumberInput = ({increase, decrease, value}: NumberInputProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '310px', alignSelf: 'center'}}>
            <Text>number of teams</Text>
            <Number>{value.toString()}</Number>
            <div style={{display: 'flex', flexDirection: 'column', padding: '5px'}}>
                <img onClick={() => increase()} src={BigArrowUp} style={{paddingBottom: '5px'}}/>
                <img onClick={() => decrease()} src={BigArrowDown} style={{paddingTop: '5px'}}/>
            </div>
        </div>
    )
}