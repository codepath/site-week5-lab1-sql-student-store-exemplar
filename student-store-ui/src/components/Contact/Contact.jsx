import happy_person from "../../assets/happy_person.svg"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Facebook from "../Icons/Facebook"
import Linkedin from "../Icons/Linkedin"
import "./Contact.css"

export default function Contact() {
  const renderSocials = () => (
    <span className="socials">
      <Facebook fill="var(--pure-white)" />
      <Instagram fill="var(--pure-white)" />
      <Linkedin fill="var(--pure-white)" />
      <Twitter fill="var(--pure-white)" />
    </span>
  )
  return (
    <div id="Contact" className="Contact">
      <div className="content">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span>Email:</span> code@path.org
            </li>
            <li>
              <span>Phone:</span> 1-800-CODEPATH
            </li>
            <li>
              <span>Address:</span> 123 Fake Street, San Francisco, CA
            </li>
            <li>
              <span>Socials: </span> {renderSocials()}
            </li>
          </ul>
          <div className="media">
            <img src={happy_person} alt="codepath large" />
          </div>
        </div>
      </div>
    </div>
  )
}
