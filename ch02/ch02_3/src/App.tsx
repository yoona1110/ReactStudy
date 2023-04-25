import {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

/* 1. 클래스형 컴포넌트
export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="http://www.naver.com" text="go to Naver" />
        <ClassComponent href="http://www.facebook.com" text="go to Facebook" />
      </ul>
    )
  }
}
*/

// 2. 함수형 컴포넌트(1): function 키워드로 만드는 방법
export default function App() {
  return (
    <ul>
      <ArrowComponent href="http://www.naver.com" text="go to Naver" />
      <ArrowComponent href="http://www.facebook.com" text="go to Facebook" />
    </ul>
  )
}

/* 3. 함수형 컴포넌트(2):  화살표 기호를 사용하여 만드는 방법
  - 이름을 가질 수 없는 익명 함수 
  - App이라는 변수에 익명 함수를 설정하는 방식으로 구현

export default function App = () => {
  return <h1> function component </h1>
}
*/
