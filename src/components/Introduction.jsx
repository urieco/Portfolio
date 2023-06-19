/* eslint-disable react/no-unescaped-entities */
function Introduction () {
  console.log('Introduction')
  return (
    <div className="Introduction">
      <div className="aboutMe">
        <h3 className="greeting">Hello,</h3>
        <h1>I'm <span className="role">Huy</span></h1>
        <div className="description">
          A self-taught web developer who is eager to learn and give it all.
        </div>
        <button 
          className="downloadCVBtn"
          onClick={() => window.open('../documents/Resume - EN.pdf', '_blank')}
        >
          Download Resume
        </button>
      </div>
    </div>
  )
}

export { Introduction }