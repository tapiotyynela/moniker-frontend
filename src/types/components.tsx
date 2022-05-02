import { MultiValue, SingleValue } from "react-select"

export type Option = {
    label: string
    value: string
}

export type SelectInputProps = {
    id?: string;
    placeholder: string
    label: string
    isMulti: boolean
    options: Option[]
    onChange: (option: Option[]) => void
}

export type ModalProps = {
    contentLabel: string
    isOpen: boolean
    children: JSX.Element
    onClose: () => void
}

export type TextProps = {
    text: string
    size: 's' | 'm' | 'l'
}