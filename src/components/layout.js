import React from "react"
import "./layout.css"
import Banner from "./banner"
import Header from "./header"

export default ({ children }) => (
  <div>
    <a className="usa-skipnav" href="#main-content">Skip to main content</a>
    <Banner/>
    <div className="usa-overlay"></div>
    <Header/>

    <main id="main-content">
      {children}
    </main>
  </div>
)
