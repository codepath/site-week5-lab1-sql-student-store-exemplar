import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SubNavbar from "../SubNavbar/SubNavbar"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export default function Home({
  user,
  isFetching,
  products,
  activeCategory,
  setActiveCategory,
  handleOnSearchInputChange,
  searchInputValue,
  addToCart,
  removeFromCart,
  getQuantityOfItemInCart,
}) {
  const location = useLocation()
  // const [prevHash, setPrevHash] = useState(null)

  console.log({ location })

  useEffect(() => {
    if (location.hash) {
      // if (prevHash !== location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
      // }

      // setPrevHash(location.hash)
    }

    return () => {
      // setPrevHash(null)
    }
    // if (location.pathname.indexOf("#") !== -1) {
    //   const hash = location.pathname.split("#")[1]

    //   if (hash !== prevHash) {
    //     const el = document.querySelector(`#${hash}`)
    //     el.scrollIntoView({ behavior: "smooth" })
    //   }

    //   setPrevHash(hash)
    // }
  }, [location.hash])

  // useEffect(() => {
  //   console.log("Mount")
  //   return () => {
  //     console.log("Unmount")
  //     // setPrevHash(null)
  //   }
  // }, [])

  return (
    <div className="Home">
      <Navbar />
      <SubNavbar
        user={user}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        handleOnSearchInputChange={handleOnSearchInputChange}
        searchInputValue={searchInputValue}
      />
      <Hero />
      <About />
      <ProductGrid
        products={products}
        isFetching={isFetching}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getQuantityOfItemInCart={getQuantityOfItemInCart}
      />
      <Contact />
      <Footer />
    </div>
  )
}
