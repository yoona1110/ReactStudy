import type {DragEvent} from 'react'

export default function DragDrop() {
  // e.dataTransfer - type: DataTransfer
  //                  files 속성으로 드롭한 파일의 정보를 알 수 있음

  // dragstart: 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 떄 발생
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer)
  }
  // dragend: 드래그를 끝낼을 때 발생
  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer)
  }

  // dragover: 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생
  const onDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault()
  // drop: 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생
  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }

  return (
    <div>
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <h1> Drag Me </h1>
      </div>
      <div onDragOver={onDragOver} onDrop={onDrop}>
        <h1> Drop Me </h1>
      </div>
    </div>
  )
}
