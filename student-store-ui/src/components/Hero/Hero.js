import phone from "../../assets/phone.svg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="Hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout
            whenever you're ready.
          </p>
        </div>

        <div className="media">
          <img src={phone} alt="hero" />
        </div>
      </div>
    </div>
  )
}
