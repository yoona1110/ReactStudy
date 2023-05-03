// viewport: 웹 페이지에서 사용자가 볼 수 있는 영역
// 동작하는 장치의 화면 크기가 제각각 달라서 생긴 개념
import {Title} from '../components'

export default function ViewportTest() {
  return (
    <section className='w-screen h-screen mt-4 bg-indigo-900'>
      <Title className='text-white'> ViewportTest </Title>
    </section>
  )
}