import { 
  Banner, 
  Education, 
  Events, 
  Jurnal, 
  JurnalVuzSl, 
  News, 
  SliderHome 
} from "../../widgets"
import { HomeLinkSlider } from "../../widgets/homeSection/sliderLinks/HomeLinkSlider"

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <News />
      <Education />
      <Events />
      <Jurnal />
      <JurnalVuzSl />
      <HomeLinkSlider/>
      <SliderHome />
    </div>
  )
}
