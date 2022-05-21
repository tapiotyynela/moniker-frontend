import React from "react"
import Select from 'react-select'
import styled from "styled-components"
import { SelectInputProps } from "../../types/components"
import {styles} from './styles'
import {Option} from '../../types/components'

const Label = styled.p`
    color: white;
    font-family: 'Modak', cursive;
    font-size: 20px;
    display: flex;
    margin: 0;
    align-self: flex-start;
`

const SelectInput = ({ placeholder, isMulti, options, label, onChange, id, value }: SelectInputProps) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <Label>{label}</Label>
            <Select value={value} id={id} styles={styles} placeholder={placeholder} isMulti={isMulti} options={options} onChange={e => onChange(e as Option[])}/>
        </div>
    )
}

export default SelectInput