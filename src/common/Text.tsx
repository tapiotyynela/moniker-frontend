import styled from 'styled-components'
import { TextProps } from '../types/components'

const P = styled.p`
    color: white;
    margin: 0px;
    padding: 5px;
    font-family: 'Modak', cursive;
`

const ParagraphSmall = styled(P)`
    font-size: 10px
`

const ParagraphMedium = styled(P)`
    font-size: 20px
`

const ParagraphLarge = styled(P)`
    font-size: 30px
`

const Text = ({ text, size }: TextProps) => {
    switch(size) {
        case 's':
            return <ParagraphSmall>{text}</ParagraphSmall>
        case 'm':
            return <ParagraphMedium>{text}</ParagraphMedium>
        case 'l':
            return <ParagraphLarge>{text}</ParagraphLarge>
    }
}

export default Text