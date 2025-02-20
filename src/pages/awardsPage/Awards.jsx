import AwardsRepublic from './components/AwardsRepublic'
import AwardsAcademic from './components/AwardsAcademic'
import AwardsBaaner from "./components/AwardsBaaner"
import "./style/Awards.scss"
export const Awards = () => {
  return (
    <div className='awards'>
      <AwardsBaaner />
      <AwardsRepublic />
      <AwardsAcademic />

    </div>
  )
}
