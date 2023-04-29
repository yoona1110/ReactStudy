import type {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault() // 어떤 사용자 액션에 따라 이벤트가 발생했을 때 이 이벤트와 관련된 웹 브라우저의 기본 구현 내용을 실행하지 않게 함
    console.log('onChangeValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    // e.target.files: 사용자가 선택한 파일 목록을 얻을 수 있음
    // e.target.files - type: FileList
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="Hello"
      />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      {/* multiple: 기본값 false, true면 파일 여러 개 선택 가능
      accept: 사용자가 선택할 수 있는 파일 확장자를 제한하는데 사용 */}
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  )
}
