export const styles = {
    control: (provided: any) => ({
        ...provided,
        width: 310,
        borderRadius: 15,
        padding: 5
      }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none'
    }),
    multiValue: (provided: any) => ({
        ...provided,
        backgroundColor: '#6740BA',
        padding: 2,
        margin: 3,
        borderRadius: 10,
        color: 'white'
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Modak, cursive',
        fontSize: 20
    }),
    multiValueRemove: (provided: any) => ({
        ...provided,
        color: 'black',
    })
}