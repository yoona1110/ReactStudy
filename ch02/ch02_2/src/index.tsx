import ReactDOM from 'react-dom/client'

// 1. 배열과 JSX 구문
const children1 = [
  <li>
    <a href="http://www.google.com" target="_blank">
      <p> go to Google </p>
    </a>
  </li>,
  <li>
    <a href="http://www.naver.com" target="_blank">
      <p> go to Naver </p>
    </a>
  </li>,
  <li>
    <a href="http://fackbook.com" target="_blank">
      <p> go to Facebook </p>
    </a>
  </li>,
]

// 2. 데이터 배열을 컴포넌트 배열로 만들 때
const children2 = [0, 1, 2].map((n: number) => <h3> Hello World! {n} </h3>)

// XML 요소는 무조건 부모 요소가 있어야 함 / ex. <ul> </ul>
const rootVirtualDOM = (
  <ul>
    <p> 1번 예제 </p>
    {children1}
    <br />
    <p> 2번 예제 </p>
    {children2}
  </ul>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(rootVirtualDOM)
