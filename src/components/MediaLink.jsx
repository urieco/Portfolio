import GithubLogo from "/assets/github.svg";
import FacebookLogo from "/assets/facebook.svg";

function MediaLink() {
  return (
    <div className="MediaLink">
      <a href="https://github.com/urieco" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="github-logo" />
      </a>
      <a
        href="https://www.facebook.com/danghuy27"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookLogo} alt="facebook-logo" />
      </a>
    </div>
  );
}

export { MediaLink };
