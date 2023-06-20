/* eslint-disable react/jsx-key */
import HTMLLogo from "../assets/html.svg";
import CSSLogo from "../assets/css.svg";
import SassLogo from "../assets/sass.svg";
import JavascriptLogo from "../assets/javascript.svg";
import PHPLogo from "../assets/php.png";
import ReactLogo from "../assets/react.svg";
import JestLogo from "../assets/jest.svg";
import GitLogo from "../assets/git.svg";
import VirtualBoxLogo from "../assets/virtualbox.svg";
import WebpackLogo from "../assets/webpack.svg";
import ViteLogo from "../assets/vite.svg";
import PhotoshopLogo from "../assets/photoshop.svg";
import DavinciResolveLogo from "../assets/davinci-resolve.svg";
import WordLogo from "../assets/microsoft-word.svg";
import ExcelLogo from "../assets/microsoft-excel.svg";
import PowerpointLogo from "../assets/microsoft-powerpoint.svg";
import WindowsLogo from "../assets/windows.svg";
import UbuntuLogo from "../assets/ubuntu.svg";
import ManjaroLogo from "../assets/manjaro.svg";

function Experience() {
  const developmentStack = [
    HTMLLogo,
    CSSLogo,
    SassLogo,
    PHPLogo,
    JavascriptLogo,
    ReactLogo,
  ];

  const devTools = [JestLogo, GitLogo, VirtualBoxLogo, WebpackLogo, ViteLogo];

  const mockUp = [PhotoshopLogo, DavinciResolveLogo];

  const officeTools = [WordLogo, ExcelLogo, PowerpointLogo];

  const OS = [WindowsLogo, UbuntuLogo, ManjaroLogo];

  return (
    <>
      <div className="Experience">
        <h1 className="workWith">I have worked with...</h1>
        <div className="experienceBoard">
          <div className="developmentStack">
            <h3>Development Stack</h3>
            {developmentStack.map((logo) => {
              return <img src={logo} />;
            })}
          </div>

          <div className="devTools">
            <h3>Development Tools</h3>
            {devTools.map((logo) => {
              return <img src={logo} />;
            })}
          </div>

          <div className="mockUp">
            <h3>Mockup Tools</h3>
            {mockUp.map((logo) => {
              return <img src={logo} />;
            })}
          </div>

          <div className="officeTools">
            <h3>Office Tools</h3>
            {officeTools.map((logo) => {
              return <img src={logo} />;
            })}
          </div>

          <div className="OS">
            <h3>Operating System</h3>
            {OS.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { Experience };
