import type {FC, ReactNode} from 'react'

// key: 같은 이름의 컴포넌트가 여러 개일 떄 이들을 구분하기 위해 만든 속성
// 속성에는 문자열이나 숫자를 설정해야 함

/* 매개변수에서 얻을 수 있는 인덱스 값을 key값으로 설정
const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
return <div> {texts} </div>
*/

export type PProps = {
  children?: ReactNode
}

const P: FC<PProps> = props => {
  const {children} = props
  return <p children={children} />
}

export default P
