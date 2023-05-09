import DirectionTest from './pages/DirectionTest'
import WrapTest from './pages/WrapTest'
import MinMaxTest from './pages/MineMaxTest'
import JustifyCenterTest from './pages/JustifyCenterTest'
import AlignTest from './pages/AlignTest'
import UserContainer from './pages/UserContainer'
import CardContainer from './pages/CardContainer'
import * as D from './data'

export default function App() {
  return (
    <main>
      <DirectionTest/>
      <WrapTest/>
      <MinMaxTest/>
      <JustifyCenterTest/>
      <AlignTest/>
      <UserContainer/>
      <CardContainer/>
    </main>
  )
}