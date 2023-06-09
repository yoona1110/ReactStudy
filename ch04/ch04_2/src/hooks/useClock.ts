import {useState} from 'react'
import { useInterval } from './useInterval'

export const useClock = () => {
    const [today, setToday] = useState(new Date())      // 현재 시간 렌더링
    useInterval(() => setToday(new Date()))
    return today
}