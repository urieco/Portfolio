/* eslint-disable react/no-unescaped-entities */
import Resume from "/documents/Resume - EN (Đỗ Đăng Huy).pdf";
import Avatar from "/images/avatar.png";

function Introduction() {
  return (
    <section className="IntroductionSection">
      <div className="Introduction">
        <div className="aboutMe">
          <h3 className="greeting">Hello,</h3>
          <h1 className="name">
            I'm
            <li>
              <span>Đăng Huy</span>
            </li>
          </h1>
          <div className="description">
            A self-taught web developer who aims to create interactive websites.
          </div>
          <button
            className="downloadCVBtn"
            onClick={() => window.open(Resume, "_blank")}
          >
            View Resume
          </button>
        </div>
        <div className="avatarContainer">
          <img src={Avatar} alt="Avatar-picture" />
        </div>
      </div>
    </section>
  );
}

export { Introduction };
