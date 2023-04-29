import type {SyntheticEvent} from 'react'

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs', isTrusted, target, bubbles)
  }

  return (
    <div>
      <button onClick={onClick}> ReactOnClick </button>
    </div>
  )
}
