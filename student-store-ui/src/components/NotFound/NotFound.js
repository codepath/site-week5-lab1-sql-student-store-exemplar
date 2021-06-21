import Navbar from "../Navbar/Navbar"
import SubNavbar from "../SubNavbar/SubNavbar"
import Footer from "../Footer/Footer"
import "./NotFound.css"

export default function NotFound({
  user,
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

      <div className="cta">
        <h1>404</h1>
        <p>That page does not exist</p>
      </div>

      <Footer />
    </div>
  )
}
