import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import Facebook from "../Icons/Facebook"
import LinkedIn from "../Icons/Linkedin"
import YouTube from "../Icons/YouTube"
import american_express from "../../assets/american_express.svg"
import app_store from "../../assets/app_store.svg"
import google_play from "../../assets/google_play.svg"
import mastercard from "../../assets/mastercard.svg"
import paypal from "../../assets/paypal.svg"
import visa from "../../assets/visa.svg"
import "./Footer.css"

const socialsLookup = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
}

const links = {
  Categories: ["All Categories", "Clothing", "Food", "Accessories", "Tech"],
  Company: ["About Us", "Find a Store", "Terms", "Sitemap", "Careers"],
  Support: ["Contact Us", "Money Refund", "Order Status", "Shipping Info", "Open Dispute"],
  Account: ["Login", "Register", "Account Setting", "My Orders"],
  Socials: ["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"],
}

const LinkIcon = ({ title, link }) => {
  if (title !== "Socials") return null

  const Icon = socialsLookup[link] || null

  return <Icon fill="var(--muted)" />
}

const LinkColumn = ({ title, links }) => {
  return (
    <div className="link-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <LinkIcon title={title} link={link} />
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="Footer">
      <div className="content">
        {/* Top Section */}
        <div className="top">
          <div className="links">
            {/* Standard Links */}
            {Object.keys(links).map((columnTitle) => (
              <LinkColumn key={columnTitle} title={columnTitle} links={links[columnTitle]} />
            ))}
            {/* App Links */}
            <div className="link-column">
              <h4>Our App</h4>
              <ul>
                <li>
                  <img src={app_store} alt="app store" />
                </li>
                <li>
                  <img src={google_play} alt="google play store" />
                </li>
              </ul>
            </div>
            {/* End of Links */}
          </div>
        </div>
        {/* Bottom Section */}
        <div className="bottom">
          <span className="payment-options">
            <img src={american_express} alt="american express" />
            <img src={mastercard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
            <img src={visa} alt="visa" />
          </span>
        </div>
      </div>
    </div>
  )
}
