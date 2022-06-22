import React from 'react'

function Footer() {
    return (<>
        <footer className="footer">
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
        </footer>

    </>)
}

export default Footer