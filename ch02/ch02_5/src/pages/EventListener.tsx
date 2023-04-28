// EventListner: 이벤트가 발생할 떄까지 귀 기울여 기다리다가 이벤트가 발생하면 해당 이벤트를 코드 쪽으로 알려주는 역할
// addEventListener, removeEventListener, dispatchEvent 메서드 3개를 제공함

// addEventListener: 이벤트 처리기를 추가
// ?. - getElementById 메서드가 null이 아니라면 콘솔 창에 출력
document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', isTrusted, target, bubbles)
})

// 대부분의 HTML 요소는 'on' 뒤에 이름을 붙인 속성을 제공할 수 있음 => 사용을 간결하게 하는게 목적
const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function EventListener() {
  return <div> EventListener </div>
}
