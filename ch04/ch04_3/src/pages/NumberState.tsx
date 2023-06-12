import {useState, useCallback} from 'react'
import {Title} from '../components'

export default function NumberState() {
    const [count, setCount] = useState<number>(0)

    const increament = useCallback(() => {
        setCount(count => count + 1)
    }, [])
    const decreament = useCallback(() => {
        setCount(count => count - 1)
    }, [])

    return (
        <section className='mt-4 mb-8'>
            <Title> NumberState </Title>
            <div className='flex justify-center'>
                <div className='flex items-center justify-between w-1/4 mt-4'>
                    <button className='btn-primary btn-lg' onClick={increament}/>
                    <p className='text-3xl text-bold text-primary'> {count} </p>
                    <button className='btn-accent btn-lg' onClick={decreament}/>
                </div>
            </div>
        </section>
    )
}