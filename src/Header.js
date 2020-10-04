import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="logo">
            <h2>Code Kavya </h2>
            <h5>Hacktoberfest Nepal 2020</h5>


            </div>

            <div className="list">
            <ul>
            <li><a href="https://www.facebook.com/codekavya" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/codekavya/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/codekavya" target="_blank" rel="noopener noreferrer">Twitter</a></li>
</ul>
            </div>
        </div>
    )
}

export default Header
