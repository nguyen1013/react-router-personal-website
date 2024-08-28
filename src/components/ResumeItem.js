import parse from 'html-react-parser'

const ResumeItem = ({ icon, year, title, desc, href }) => {
  return (
    <div className='resume__item'>
      <div className="resume__icon">{icon}</div>

      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">
        <a href={href} target="_blank" rel="noreferrer">       
        {parse(title)}
        </a>
      </h3>           
      <p className="resume__description">{desc}</p>
    </div>
  )
}
export default ResumeItem