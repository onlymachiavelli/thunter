import React from 'react'
import Link from 'next/link'
const Login = () =>{
    return(
        <div className="login_frm" >
            <div className="log_title">
                <p>
                    Thunter : Login
                </p>
            </div>
            <form action="" method="POST" className="space_form">
                <input type="text" name="" placeholder="Username or Email Adress"  />
                <input type="password" name="" placeholder="Password" />
                <button className="sub" type="submit">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>
                <Link href="/">
                    <a id="back" >
                        Go Back <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                </Link>

                <Link href="" >
                    Forgot UserName Or Password ?
                </Link>
            </form>
        </div>
    )
}
export {Login}