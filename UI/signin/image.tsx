import React from 'react'
import {Shadow} from '../space'
import Link from 'next/link'
import {CentY} from '../space'
const Image = () =>{
    let DamnIt = {
        width:'100%',
        height:'100px'
    }
    return(
        <div className="image_container">
            <Shadow>
            <br/>
            
                <CentY>
                    <div className="image_slide">
                    <p className="tit">Life's Good !</p>
                    <p id="image_par">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui nulla, suscipit eu magna eget, vehicula mattis erat. Ut condimentum ipsum mauris, eu tincidunt turpis ultrices facilisis. Suspendisse pharetra mollis augue, in mollis augue. Donec feugiat ante eget congue vestibulum. Nunc dapibus euismod placerat. In tellus mi, luctus nec tincidunt et, cursus nec arcu. Nam pharetra vestibulum sodales. Integer vitae sagittis ipsum, eu viverra massa. Mauris elit lectus, consectetur nec mauris vel, commodo malesuada nisl. Sed dictum rutrum odio quis interdum. Proin et neque vel purus elementum feugiat. Phasellus malesuada mattis volutpat. Cras vitae enim sit amet neque scelerisque semper. Quisque lacinia eget ipsum at lacinia. Suspendisse eleifend luctus maximus.
                    </p>
                    <br/>
                    <Link href="How">
                        <a className="how l-btn">How to use TaskHunter ?</a>
                    </Link>
                    <Link href="Sign Up">
                        <a className="SignUp l-btn">Create an account</a>
                    </Link>
                    </div> 
                    <div style={DamnIt} ></div>
                </CentY>   
            
        </Shadow> 
        </div>
    )
}
export {Image}