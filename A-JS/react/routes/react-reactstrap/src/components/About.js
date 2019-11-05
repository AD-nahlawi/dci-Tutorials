import React from 'react'
import { Alert } from 'reactstrap';
 import {Link} from 'react-router-dom'
export default function About() {
    return (
        <Alert  tag = {Link} color ='danger'>
            -this is an Alert-
        </Alert>
    )
}
