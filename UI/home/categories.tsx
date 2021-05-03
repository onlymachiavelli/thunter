import React from 'react'
import Link from 'next/link'
import { Html5, Css3, Php, Python, Camera, Comp, CPP, Cs, Unity, Rengine, Java, Jscript, Reactjs, Nextjs, Nodejs, Laravel, Cube, Language, DB, WP, Copy, Apple, Android, Linux, Finance, Media, Y } from '../icons'
const Categ = () => {
    return (
        <div className="cat" >
            <div className="cat_title">
                <p>Some Popular Categories</p>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Html5 />
                        <p> &nbsp;HTML5</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Css3 />
                        <p> &nbsp;CSS3</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">
                        <Php />
                        <p> &nbsp;PHP</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Python />
                        <p> &nbsp;PYTHON</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Camera />
                        <p> &nbsp;PHOTOGRAPH</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">
                        <Comp />
                        <p> &nbsp;Soft Architecture</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <CPP />
                        <p> &nbsp;C++</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Cs />
                        <p> &nbsp;CSHARP</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">
                        <Unity />
                        <p> &nbsp;UNITY 3D</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Rengine />
                        <p> &nbsp;REAL ENGINE</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Java />
                        <p> &nbsp;JAVA</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">
                        <Jscript />
                        <p> &nbsp;JAVASCRIPT</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Reactjs />
                        <p> &nbsp;REACT JS</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Nextjs />
                        <p> &nbsp;NEXT JS</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">
                        <Nodejs />
                        <p> &nbsp;NODE JS</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Laravel />
                        <p> &nbsp;LARAVEL</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Language />
                        <p> &nbsp;TRANSLATION</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">

                        <Cube />
                        <p> &nbsp;3D MODELLING</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <DB />
                        <p> &nbsp;DATABASES</p>

                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <WP />
                        <p> &nbsp;WORDPRESS</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">

                        <Copy />
                        <p> &nbsp;COPYWRITING</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Apple />
                        <p> &nbsp;APPLE APPS</p>

                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Android />
                        <p> &nbsp;ANDROID APPS</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">

                        <Linux />
                        <p> &nbsp;LINUX</p>
                    </div>
                </Link>
            </div>
            <div className="mix">
                <Link href="#">
                    <div className="b_block">
                        <Finance />
                        <p> &nbsp;FINANCE</p>

                    </div>
                </Link>
                <Link href="#">
                    <div className="purp_block">
                        <Media />
                        <p> &nbsp;MEDIA EDITING</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="yel_block">

                        <Y />
                        <p> &nbsp;ACCOUNTING</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export { Categ }