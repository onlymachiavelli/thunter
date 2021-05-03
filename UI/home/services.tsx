import React from 'react'
import { CentY, Shadow } from '../../UI/space'
import Link from 'next/link'
let Image = {
    web: '/img/web.jpg',
    wordpress: '/img/wordpress.png',
    app: '/img/app.jpg',
    softwaredev: '/img/soft.jpg',
    photograph: '/img/cam.jpg',
    producer: '/img/prod.jpg',
    gdesigner: '/img/gd.jpg',
    threed: '/img/gameboy.jpg'
}
let StyleImage = a => ({ background: `url(${a})` })
const Service = () => {
    return (
        <main className="service" >
            <div className="service_title">
                <p>Some Popular Services</p>
            </div>
            <div className="c_container">
                <div className="scard" style={{ ...StyleImage(Image["web"]) }}>

                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["wordpress"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["app"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["softwaredev"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
            </div>

            <div className="c_container">
                <div className="scard" style={{ ...StyleImage(Image["photograph"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["producer"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <Link href="#">
                                    <a className="exp_btn">Explore</a>
                                </Link>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["gdesigner"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
                <div className="scard" style={{ ...StyleImage(Image["threed"]) }}>
                    <Shadow>
                        <CentY>
                            <Link href="#">
                                <a className="exp_btn">Explore</a>
                            </Link>
                        </CentY>
                    </Shadow>
                </div>
            </div>
        </main >
    )
}
export default Service