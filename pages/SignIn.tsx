import React from 'react'
import {Image} from '../UI/signin/image'
import {Login} from '../UI/signin/login'
import {CentY} from '../UI/space'
import Head from 'next/head'
export default function SignIn(){
    return (
        <main className="signin_block" >
            <Head>
                <title>Login To Thunter</title>
            </Head>
            <div className="image_area">
                <Image/>
            </div>
            <div className="input_login_area">
                <CentY>
                    <Login/>
                </CentY>
            </div> 
        </main>
    )
}
