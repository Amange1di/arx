import {
  HomeBaaner,
  HomeEvents,
  HomeJurnal,
  HomeNews,
  HomeStepen,
  JurnalVuzSl,
  LinkSlider,
  SliderHome
} from "../../widgets"

export const HomePage = () => {
  return (
    <div>
      <HomeBaaner />
      <HomeNews />
      <HomeStepen />
      <HomeEvents />
      <HomeJurnal />
       <JurnalVuzSl />
      <LinkSlider />
      <SliderHome /> 
    </div>
  )
}
