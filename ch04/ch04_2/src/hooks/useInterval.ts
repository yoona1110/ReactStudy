import { useEffect } from "react";

export const useInterval = (callback: () => void, duration: number = 1000) => {
    useEffect(() => {
        const id = setInterval(callback, duration)
        return () => clearInterval(id)              // setInterval 함수가 동작하지 않을 땐 반드시 clearInterval 호출
    }, [callback, duration])
}