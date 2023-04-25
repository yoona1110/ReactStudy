import {Component} from 'react'

/* 1. 클래스 컴포넌트
  - Component를 상속해야 함
  - render() 메소드 포함해야 함
render(): null, React.createElement 호출로 얻은 return 값, 
          JSX문 등으로 가상 DOM 객체를 반환해야 함
*/
export default class ClassComponent extends Component {
  render() {
    const isLoading = true // isLoading가 true이므로 Loading... 반환

    // 첫번째 방법
    if (isLoading) return <p> Loading ... </p>

    return (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p> go to Google </p>
          </a>
        </li>
      </ul>
    )

    // 두번째 방법 - 단축 평가 형태로 구현
    const children = (
      <li>
        <a href="http://www.google.com">
          <p> go to Google </p>
        </a>
      </li>
    )

    return (
      <div>
        {isLoading && <p> Loading ... </p>}
        {!isLoading && <ul> {children} </ul>}
      </div>
    )

    // 세번째 방법 - isLoading 값에 따라 분기
    const children2 = isLoading ? (
      <p> Loading ... </p>
    ) : (
      <ul>
        <li>
          <a href="http://www.google.com">
            <p> go to Google </p>
          </a>
        </li>
      </ul>
    )
    return <p> {children} </p>
  }
}
