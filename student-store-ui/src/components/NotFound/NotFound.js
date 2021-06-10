import Navbar from "../Navbar/Navbar"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"
import "./NotFound.css"

export default function NotFound({
  user,
  orders,
  products,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
}) {
  return (
    <div className="NotFound">
      <Navbar />
      <SubNavbar
        user={user}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInputChange={handleOnSearchInputChange}
        searchInputValue={searchInputValue}
      />
      {/* <div className="banner">
        <div className="content">
          <h2>Orders</h2>
        </div>
      </div> */}

      <div className="cta">
        <h1>404</h1>
        <p>That page does not exist</p>
      </div>

      <Footer />
    </div>
  )
}
