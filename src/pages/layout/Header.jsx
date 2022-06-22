import React from 'react'
import {
    useNavigate
} from 'react-router-dom'
import Link from '@mui/material/Link'
import { data } from '../../data/data';

function Header() {

    let navigate = useNavigate();

    function stringToSlug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    //add fixed class to navbar
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('show-sidebar');
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('show-sidebar');
    }

    const goToCategory = (name, category) => {
        navigate(`/${category.id}/${stringToSlug(name)}`, { state: { category: category } })
    }

    const goToHome = () => {
        navigate("/");
    }

    return (<>
        {/* navbar start */}
        <nav className="nav" id="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-btn" id="nav-btn" onClick={() => showSidebar()}>
                        <i className="fas fa-bars" />
                    </button>
                    <Link sx={{ textDecoration: "none" }} onClick={() => goToHome()}><h1 className='nav-logo'>Etstur Event</h1></Link>
                </div>
                <ul className="nav-links">
                    {
                        data.categories.map(category => {
                            return <li key={category.id}>
                                <Link onClick={() => goToCategory(category.name, category)} sx={{ textDecoration: "none" }}>{category.name}</Link>
                            </li>
                        })
                    }
                    <li>
                        <Link sx={{ textDecoration: "none" }}>Geçmiş Etkinlikler</Link>
                    </li>
                </ul>
            </div>
            <button className='login-btn'><Link sx={{ textDecoration: "none" }}><i class="fa-solid fa-user"></i><span className='login-text'>Giriş Yap</span></Link></button>
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
                    {
                        data.categories.map(category => {
                            return <li key={category.id}>
                                <Link onClick={() => goToCategory(category.name, category.id)} sx={{ textDecoration: "none" }}>{category.name}</Link>
                            </li>
                        })
                    }
                    <li>
                        <Link sx={{ textDecoration: "none" }}>Geçmiş Etkinlikler</Link>
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