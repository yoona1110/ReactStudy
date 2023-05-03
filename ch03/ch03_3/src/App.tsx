import Divtest from './pages/DivTest'
import ViewportTest from './pages/ViewportTest'
import HeightTest from './pages/HeightTest'
import PaddingTest from './pages/PaddingTest'
import MarginTest from './pages/MarginTest'
import ImageTest from './pages/ImageTest'
import BackgroundImageTest from './pages/BackgroundImageTest'
import DisplayTest from './pages/DisplayTest'
import DisplayNoneTest from './pages/DisplayNoneTest'
import AvatarTest from './components/Avatar'
import PositionTest from './pages/PositionTest'
import OverlayTest from './pages/OverlayTest'

export default function App() {
  return (
    <main>
      <OverlayTest/>
      <PositionTest/>
      <AvatarTest/>
      <DisplayNoneTest/>
      <DisplayTest/>
      <BackgroundImageTest/>
      <ImageTest/>
      <MarginTest/>
      <PaddingTest/>
      <HeightTest/>
      <ViewportTest/>
      <Divtest/>
    </main>
  )
}