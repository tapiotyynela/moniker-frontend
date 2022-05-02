export const formatSelectOptions = (data: any) => {
    return data.map((d: any) => {
        return {
            label: d.nickName,
            value: d.userId
        }
    })
}