import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    //add fixed class to navbar
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show-sidebar');
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('show-sidebar');
    }

    return (<>
        {/* navbar start */}
        <nav className="nav" id="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-btn" id="nav-btn" onClick={() => showSidebar()}>
                        <i className="fas fa-bars" />
                    </button>
                    <Link to={"/"}><h1 className='nav-logo'>Etstur Event</h1></Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to={"/"}>Tiyatro</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Konser</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Sinema</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Geçmiş Etkinlikler</Link>
                    </li>
                </ul>
            </div>
            <button className='login-btn'><Link to={"/"}><i class="fa-solid fa-user"></i><span className='login-text'>Giriş Yap</span></Link></button>
        </nav>
        {/* navbar end */}
        {/* sidebar start */}
        <aside className="sidebar" id="sidebar">
            <div>
                <button className="close-btn" id="close-btn" onClick={() => hideSidebar()}>
                    <i className="fas fa-times" />
                </button>
                {/* nav-links */}
                <ul className="sidebar-links">
                    <li>
                        <Link to={"/"}>Tiyatro</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Konser</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Sinema</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Geçmiş Etkinlikler</Link>
                    </li>
                </ul>
                {/* social icons */}
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com" className="social-icon">
                            <i className="fab fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/fatmanurkoysuren/" className="social-icon">
                            <i className="fab fa-linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" className="social-icon">
                            <i className="fab fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="social-icon">
                            <i className="fa-brands fa-twitter-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        {/* sidebar end */}

    </>)
}

export default Header