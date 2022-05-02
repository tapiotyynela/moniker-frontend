import styled from 'styled-components'

const Input = styled.input`
    width: 310px;
    height: 42px;
    border-radius: 15px;
    border: none;
    margin-bottom: 10px;
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
export const InputWithLabel = ({...props}: any) => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <Label>{props.label}</Label>
            </div>
            <Input {...props}/>
        </div>
    )
}