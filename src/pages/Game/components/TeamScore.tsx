import Text from '../../../common/Text'
import { Line } from 'rc-progress';

const TeamScore: React.FC = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '70vw', marginBottom: 30}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 0}}>
                <Text font='Marvel, sans-serif' size='l' text='team 1' />
                <Text font='Marvel, sans-serif' size='l' text='points: 0' />
            </div>
            <div style={{margin: 0}}>
                <Line percent={10} strokeWidth={4} strokeColor="#A343EE" trailColor='#B77FFD' trailWidth={4}/>
            </div>
        </div>
    )
}

export default TeamScore