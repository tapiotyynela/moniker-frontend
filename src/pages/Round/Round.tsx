import { Circle } from 'rc-progress';
import { useEffect, useState } from 'react';
import Text from '../../common/Text'

const Round: React.FC = () => {
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
        if (timer < 60) {
            const interval = setInterval(() => {
                setTimer(timer + 1)
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [timer])

    return (
        <div style={{padding: 70}}>
            <div style={{position: 'relative', top: 80}}>
                <Text text={timer.toString()} size='xl' font="Modak, cursive"/>
            </div>
            <Circle strokeWidth={4} percent={60 / 100 * (timer * 2.79)} strokeColor="#6740BA" style={{position: 'relative', bottom: 100}}/>
        </div>
    )
}

export default Round