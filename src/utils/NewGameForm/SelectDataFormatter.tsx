import { Option } from '../../types/components'

export const FormatSelectOptions = (data: any): Option[] => {
    return data.map((d: any) => ({
            label: d.nickName,
            value: d.userId
        }
    ))
}