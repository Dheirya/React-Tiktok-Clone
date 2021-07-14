import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/' style={{textDecoration: 'none'}}>
        <span class="texte" data-text="&nbsp;React Tok">&nbsp;React Tok</span>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img loading="lazy" className="personal" src="https://i.imgur.com/QwZod6m.png" />
        </div>
      </div>
    </div>
  )  
}
  
export default Header
