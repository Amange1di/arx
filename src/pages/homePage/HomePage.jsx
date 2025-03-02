import { HomeBaaner, HomeEvents, HomeJurnal, HomeNews, HomeStepen } from "../../widgets"

export const HomePage = () => {
  return (
    <div>
      <HomeBaaner />
      <HomeNews />
      <HomeStepen />
      <HomeEvents />
      <HomeJurnal />
      {/* <JurnalVuz />
      <LinkSlider />
      <SliderHome />  */}
    </div>
  )
}
