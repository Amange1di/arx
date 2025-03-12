import { 
  Banner, 
  Education, 
  Events, 
  Jurnal, 
  JurnalVuzSl, 
  LinkSlider, 
  News, 
  SliderHome 
} from "../../widgets"

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
