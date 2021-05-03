import React, { useState } from 'react'
import Link from 'next/link'
import { DownIcon, BarsIcon } from '../icons'

const HomeImage = () => {
    return (
        <div className="slideimg">
            <div className="Shadow">
                <nav className="navbar" >
                    <p className="logo">Thunter</p>
                    <button className="resnv">
                        <BarsIcon />
                    </button>
                    <nav className="nav" >
                        <Link href="/">Home</Link>
                        <Link href="Why">Why TaskHunter</Link>
                        <Link href="Contact">Contact</Link>
                        <Link href="About">About Us</Link>
                    </nav>
                </nav>
                <div className="auth" >
                    <Link href="SignIn" >
                        <a className="sin" >Sign In</a>
                    </Link>
                    <Link href="SignUp" >
                        <a className="sup" >Sign In</a>
                    </Link>
                </div>


                <div className="c">
                    <p className="sp">Enough wasting time and start<br /> getting money as an indipendent CockSucker</p>
                    <p className="ins">
                        Serve someone Or get served and get PAID ! <br />
                    You can do all of these works and stuffs in this platform <br />
                    We gave you an opporunity, Don't screw it !
                </p>

                    <div className="pr">
                        <button id="post">Post a project</button>
                        <button id="b">Get paid</button>
                    </div>
                </div>
                <div className="down">
                    <button>
                        <DownIcon />
                    </button>
                </div>
            </div>


        </div >

    )
}

export { HomeImage }