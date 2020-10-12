import React from 'react'
import NavigationDrawer from './UI/NavigationDrawer'
import '../css/header.scss'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import eventBus from '../utils/eventBus'
import authentication from '../services/authentication'

class Header extends React.Component {

  constructor(props) {
    super()
    this.state = {
      headerOn: true,
      user: 'anonymous'
    }
}

  render() {
    const {headerOn, user} = this.state

    return (
        <header id="header" className={headerOn? 'headerfooter-on': 'headerfooter-off'}>
          <div id="upper-bar">
            <div id="drawer">
              <NavigationDrawer />
            </div>
            <a href="/">
              <img id="banner" src={require('../assets/logo_dark.svg')} alt="Logo" className="Logo" />
            </a>
            <input className="search-bar" type="text"></input>
            <nav className="upper-bar-right">
              <ul id="nav-menu-container">
                <li>
                  <Link to="/login">
                    <Banner main={`Hello, ${user ==='anonymous' ? 'sign-in' : user}`} sub="Accounts & Lists" />
                  </Link>
                </li>
                <li>
                  <a href="/">
                    <Banner main="Returns" sub="& Orders" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <Banner main="Cart" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="under-bar">
            <div className="under-banner">
               <Link to="/"><Banner sub="Delivery to: Somewhere!"/></Link> 
            </div>
            <div className="under-banner">
               <Link to="/"><Banner main="Today's Deals" /></Link> 
            </div>
            <div className="under-banner">
            <Link to="/"><Banner main="Customer Service" /></Link> 
            </div>
            <div className="under-banner">
            <Link to="/"><Banner main="Sell" /></Link> 
            </div>
              <h3 className="under-banner covid">Our Response to COVID-19</h3>
          </div>
        </header>
    )
  }

  componentDidMount() {
    eventBus.on("headerFooter", (data) =>
      this.setState({ headerOn: data.message })
    )
    authentication.fetchUser().then(()=> {
      eventBus.on("fetchUser", (data) =>
      this.setState({ user: data.message })
    )
    })
  }
}

export default Header
