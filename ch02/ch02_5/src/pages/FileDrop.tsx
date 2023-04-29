import type {DragEvent} from 'react'

export default function FileDrop() {
  // 파일이 웹 브라우저의 밖 -> 안으로 떨어지므로 <div draggable>은 필요없음
  // But, onDrop이 호출되어야 하니 onDragOver의 preventDefault 메서드 호출 필요

  const onDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault()
  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) // or file = file[i];
        console.log(`file[${i}]: `, file)
      }
    }
  }

  return (
    <div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1> Drop Image files over Me </h1>
      </div>
    </div>
  )
}
