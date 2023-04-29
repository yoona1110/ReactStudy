/*  input 
- type 속성값
checkbox, radio => checked
text, email, password, range => value
file => files

- input 요소는 value, checked 외에도 defaultValue, deafaultChecked도 제공함
  value, checked: 사용자가 input에 입력한 값을 얻을 때 사용
  defaultValue, defaultChecked: 어떤 초깃값을 설정하고 싶을 때 사용
*/

export default function VariousInputs() {
  return (
    <div>
      {/* 만약 type이 text라면 onChange 이벤트가 발생 */}
      <input type="text" placeholder="enter some texts" />
      <input type="password" placeholder="enter your password" />
      <input type="email" placeholder="enter email address" />
      <input type="range" />
      <input type="button" placeholder="I'm a button" />
      <input type="checkbox" placeholder="I'm a checkbox" defaultChecked />
      <input type="radio" placeholder="I'm a radio" defaultChecked />
      <input type="file" />
    </div>
  )
}
