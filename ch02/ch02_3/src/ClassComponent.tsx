import {Component} from 'react'

type ClassComponentProps = {
  href: string
  text: string
}

// 클래스 컴포넌트의 부모 타입인 Component는 props라는 이름의 속성을 제공
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    // this.props 형태로 외부에서 넘어온 속성 사용 가능
    /* 아래와 같은 코드임
    const href = this.props.href
    const text = this.props.text
    */
    const {href, text} = this.props

    return (
      <li>
        <a href={href}>
          <p> {text} </p>
        </a>
      </li>
    )
  }
}
