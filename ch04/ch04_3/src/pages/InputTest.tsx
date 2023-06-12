import { ChangeEvent, useCallback, useState } from "react";
import {Title} from '../components'

export default function InputTest() {
    const [value, setValue] = useState<string>('')
    const [checked, setChecked] = useState<boolean>(false)

    const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(notUsed => e.target.value)
    }, [])

    const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setChecked(notUsed => e.target.checked)
    }, [])

    return (
        <section className='mt-4'>
            <Title> InputState </Title>
                <div className='flex items-center justify-center p-4 mt-4'>
                <input 
                    type="text" 
                    value={value}
                    onChange={onChangeValue}
                    className="input-primary input-sm"
                />
                <input 
                    type="checkbox" 
                    checked={checked}
                    onChange={onChangeChecked}
                    className="ml-4 checkbox checkbox-primary input-sm"
                />
            </div>
        </section>
    )
}