import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = ({ siteAuthor }) => {
  return (
    <footer className={footerStyles.footer}>
      © {new Date().getFullYear()}, Built by {siteAuthor}
    </footer>
  )
}

export default Footer
