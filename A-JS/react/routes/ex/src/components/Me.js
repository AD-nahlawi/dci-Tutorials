import React from 'react'
import {Link} from 'react-router-dom';
import img from '../imgs/1.jpeg';
export default function Me() {
    return (
        <div tag = {Link}>
            <img id = 'me-img' src = {img}/>
            <div id = 'me-div'>
                <h5> My Name</h5>
                <p>
                Some nice text about my home
                    town, where
                    I was born and what my skills are
                </p>
                <p>Some websites I frequently use</p>
                <a href="https://github.com/">github.com </a><br></br>
                <a href = 'https://www.icloud.com/'>icloud.com</a><br>
                </br>
                <a href = 'https://www.pexels.com/'>pexels.com</a>
            </div>
        </div>
    )
}
