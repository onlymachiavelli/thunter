import React from 'react'
import Link from 'next/link'
import { Android, Apple } from '../icons'
const Footer = () => {
    const ftit = {
        color: "#fff",
        fontFamily: "var(--Bold)",
    }
    return (

        <footer>
            <div className="flex">
                <div className="f_card cent">
                    <div className="f_logo">
                        <Link href="#">Task Hunter</Link>
                    </div>
                    <div className="social_footer">
                        <a href="" target="_blank">
                            <i id="linkedin" className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a href="" target="_blank">
                            <i id="facebook" className="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <a href="" target="_blank">
                            <i id="instagram" className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="" target="_blank">
                            <i id="twitter" className="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                        <a href="" target="_blank">
                            <i id="github" className="fa fa-github-square" aria-hidden="true"></i>                        </a>
                    </div>
                </div>
                <div className="f_card tw">
                    <p id="grey_title">Navigate</p>
                    <div className="footer_links">
                        <Link href="/">Home</Link>
                        <Link href="SignIn">Sign In</Link>
                        <Link href="SignUp">Sign Up</Link>
                        <Link href="Why">Why TaskHunter</Link>
                        <Link href="Contact">Contact Us</Link>
                    </div>
                </div>
                <div className="f_card tw" >
                    <p id="grey_title">Suggested Tools</p>
                    <div className="footer_links">
                        <Link href="#">Web Developement</Link>
                        <Link href="#">Programming</Link>
                        <Link href="#">Graphic Designing</Link>
                        <Link href="#">App Developement</Link>
                        <Link href="#">Accounting</Link>
                        <Link href="#">Production</Link>
                        <Link href="#">Financing</Link>
                        <Link href="#">PhotoGraph</Link>
                    </div>
                </div>
                <div className="f_card cent">
                    <form action="" method="POST" >
                        <input type="text" name="" placeholder="Subscribe to News Letters" />
                        <button type="submit" >Submit</button>
                    </form>
                    <p style={ftit}>Download Thunter App</p>
                    <button className="dw andr">
                        Thunter &nbsp;<Android />
                    </button>
                    <button className="dw apple">
                        Thunter &nbsp;<Apple />
                    </button>
                </div>
            </div>
        </footer >
    )
}

export { Footer }