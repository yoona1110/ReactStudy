import {Title, Subtitle, Div, Icon} from '../components'

export default function DivTest() {
  return (
    <section className='mt-4'>
      <Title> DivTest </Title>
      {/* 화면의 높이를 명시적으로 설정하지 않고 웹 브라우저가 계산하도록 구현하는 것이 바람직함 */}
      {/* <Div className="text-center text-blue-100 bg-blue-600" height='6rem'> */}

      {/* 캐스케이팅(cascading): 자식 요소의 색상 속성값을 명시적으로 설정하지 않으면 부모 요소에 설정한 색상 속성값이 적용됨 */}
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name='home' className='text-3xl' />
        <Subtitle> Home </Subtitle>
      </Div>
    </section>
  )
}