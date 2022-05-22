import styled from 'styled-components'
import { TextProps } from '../types/components'

const Paragraph = styled.p((props: { size: string, font: 'Modak, cursive' | 'Marvel, sans-serif'}) => ({
    color: 'white',
    margin: 0,
    padding: '5px',
    fontFamily: props.font,
    fontSize: props.size,
}))

const Text = ({ text, size, font }: TextProps) => {
    switch(size) {
        case 's':
            return <Paragraph size="10px" font={font}>{text}</Paragraph>
        case 'm':
            return <Paragraph size="20px" font={font}>{text}</Paragraph>
        case 'l':
            return <Paragraph size="30px" font={font}>{text}</Paragraph>
        case 'xl':
            return <Paragraph size="60px" font={font}>{text}</Paragraph>
    }
}

export default Text