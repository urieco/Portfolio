/* eslint-disable react/jsx-key */
import HTMLLogo from "/assets/html.svg";
import CSSLogo from "/assets/css.svg";
import SassLogo from "/assets/sass.svg";
import TailwindCSSLogo from "/assets/tailwind-css.svg";
import JavascriptLogo from "/assets/javascript.svg";
import TypescriptLogo from "/assets/typescript.svg";
import PHPLogo from "/assets/php.png";
import ReactLogo from "/assets/react.svg";
import BootstrapLogo from "/assets/bootstrap.svg";
import MySQLLogo from "/assets/mysql.svg";
import JestLogo from "/assets/jest.svg";
import GitLogo from "/assets/git.svg";
import VirtualBoxLogo from "/assets/virtualbox.svg";
import WebpackLogo from "/assets/webpack.svg";
import ViteLogo from "/assets/vite.svg";
import WordpressLogo from "/assets/wordpress.svg";
import FirebaseLogo from "/assets/firebase.svg";
import PhotoshopLogo from "/assets/photoshop.svg";
import DavinciResolveLogo from "/assets/davinci-resolve.svg";
import WordLogo from "/assets/microsoft-word.svg";
import ExcelLogo from "/assets/microsoft-excel.svg";
import PowerpointLogo from "/assets/microsoft-powerpoint.svg";
import WindowsLogo from "/assets/windows.svg";
import UbuntuLogo from "/assets/ubuntu.svg";
import ManjaroLogo from "/assets/manjaro.svg";

function Experience() {
  const developmentStack = [
    HTMLLogo,
    CSSLogo,
    SassLogo,
    TailwindCSSLogo,
    PHPLogo,
    JavascriptLogo,
    TypescriptLogo,
    ReactLogo,
    BootstrapLogo,
    MySQLLogo,
  ];

  const devTools = [
    JestLogo,
    GitLogo,
    VirtualBoxLogo,
    WordpressLogo,
    FirebaseLogo,
    WebpackLogo,
    ViteLogo,
  ];

  const mockUp = [PhotoshopLogo, DavinciResolveLogo];

  const officeTools = [WordLogo, ExcelLogo, PowerpointLogo];

  const OS = [WindowsLogo, UbuntuLogo, ManjaroLogo];

  return (
    <section>
      <h1 className="workWith">I Have Experience With...</h1>
      <div className="experienceBoard">
        <div className="developmentStack">
          <h3>Technical Tools</h3>
          <div className="iconContainer">
            {developmentStack.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>

        <div className="devTools">
          <h3>Development Tools</h3>
          <div className="iconContainer">
            {devTools.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>

        <div className="mockUp">
          <h3>Mockup</h3>
          <div className="iconContainer">
            {mockUp.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>

        <div className="officeTools">
          <h3>Office</h3>
          <div className="iconContainer">
            {officeTools.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>

        <div className="OS">
          <h3>Operating System</h3>
          <div className="iconContainer">
            {OS.map((logo) => {
              return <img src={logo} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Experience };
