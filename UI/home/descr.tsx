import React, { useState } from "react"
import { Brain, Computer, Band } from '../icons'
const Desc = () => {
    return (
        <main className="descr" id="d">
            <div className="des_title">
                <p>How It's Working ? </p>
            </div>
            <div className="card_container">
                <div className="card bl">
                    <i>
                        <Brain />
                    </i>
                    <p className="card_title">Post Your Idea</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. s
                    </p>
                </div>
                <div className="card p">
                    <i>
                        <Computer />
                    </i>
                    <p className="card_title">Get The Chance</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. s
                    </p>
                </div>
                <div className="card gr">
                    <i>
                        <Band />
                    </i>
                    <p className="card_title">Pay Or Get Paid</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. s
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Desc