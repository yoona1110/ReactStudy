import {Div, Title} from '../components'
import * as D from '../data'

export default function MinMaxTest() {
  // min-width / max-width
  // 웹 브라우저의 크기를 변경하면 퍼센트 단위를 사용하는 컨테이너들은 이에 맞춰 자신의 넓이는 널리거나 줄여서 폭을 유지함
  // = 부모 컨테이너의 크기에 대응하는 콘텐츠의 최소, 최대 크기를 설정하는 용도
  return (
    <section className='mt-4'>
      <Title> MinMaxTest </Title>
      <Div className='mt-4 bg-gray-300'>
        <Div src={D.randomImage(800, 300)} className='bg-cover'>
          <Div className='w-1/2 bg-blue-500 h-80'
          minWidth='300px' maxWidth='500px'/>
        </Div>
      </Div>
    </section>
  )
}