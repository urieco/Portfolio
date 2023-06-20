/* eslint-disable react/no-unescaped-entities */
import Resume from '../documents/Resume - EN (Đỗ Đăng Huy).pdf'
import Avatar from '../images/avatar.png'

function Introduction () {
  return (
    <div className="Introduction">
      <div className="aboutMe">
        <h3 className="greeting">Hello,</h3>
        <h1>I'm 
          <li><span>Đăng Huy</span></li>
        </h1>
        <div className="description">
          A self-taught web developer who is eager to learn and give it his all.
        </div>
        <button 
          className="downloadCVBtn"
          onClick={() => window.open(Resume, '_blank')}
        >
          Download Resume
        </button>
      </div>
      <div className='avatarContainer'>
        <img src={Avatar} alt="Avatar-picture" />
      </div>
    </div>
  )
}

export { Introduction }