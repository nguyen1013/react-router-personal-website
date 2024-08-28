import  { mySkills } from '../data'

const MySkills = () => {
  return (
    <>
    {mySkills.map(({href, icon, title}, index) => {
      return (
        <div key={index} className="skills__box">
          <div className="skills__icon">
            <a href={href} target="_blank" rel="noreferrer">
            {icon}
            </a>
          </div>
          <h2 className="skills__title">{title}</h2>
        </div>
      )
    })}
    </>
  )
}

export default MySkills