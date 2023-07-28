import { MediaLink } from "./MediaLink";

function Contact() {
  return (
    <footer>
      <h1>Contact Me</h1>
      <div className="note">
        Please get in touch if you think our work could be mutually beneficial!
      </div>
      <br />
      <div className="phoneNumber">
        Phone: <span>0909 755 292</span>
      </div>
      <div className="email">
        Email: <span>huy.dodang27@gmail.com</span>
      </div>
      <MediaLink />
    </footer>
  );
}

export { Contact };
