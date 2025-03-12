import { 
  Banner, 
  Education, 
  Events, 
  Jurnal, 
  JurnalVuzSl, 
  News, 
  SliderHome 
} from "../../widgets"
 import  LinkSlider from "../../widgets/homeSection/sliderLinks/LinkSlider"
export const HomePage = () => {
  return (
    <div>
      <Banner />
      <News />
      <Education />
      <Events />
      <Jurnal />
      <JurnalVuzSl />
      <LinkSlider />
      <SliderHome />
    </div>
  )
}
