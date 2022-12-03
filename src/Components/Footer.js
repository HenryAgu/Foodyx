// stylesheet
import './Footer.css'

// Images
import logo from '../Images/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2022 Foodyx, Inc.</p>
    </footer>
  )
}

export default Footer