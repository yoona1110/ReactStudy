import { useCallback } from "react";
import { Title, Subtitle } from '../components'
import { useToggle } from "../hooks/useToggle";
import * as D from '../data'

export default function ShowHideModal() {
    const [open, toggleOpen] = useToggle(false)
    const onAccept = useCallback(() => {
        toggleOpen()
    }, [toggleOpen])
    return (
        <section className="mt-4">
            <Title> ShowHideModal </Title>
            <div className="flex justify-center p-4">
                <button className="btn-primary" onClick={toggleOpen}>
                    open Modal
                </button>
            </div>
        </section>
    )
}