import React from 'react'
import {
        BrowserRouter as 
        Router,
        Switch, 
        Route, 
        Link,
        useRouteMatch,
        useParams
} from 'react-router-dom';


export default function Topics() {

    let { path , url } = useRouteMatch();

    // console.log(path); // relative/path/topics

    // console.log(url); // absolute/path/topics
    
    

    return (
        <>
        <div className = 'dropmenu'>
        <ul>
          <li className = 'topicsLI bg-dark'>
            <Link to = {`${url}/link-1`}  >Link 1</Link>
          </li>
          <li className = 'topicsLI bg-dark'>
            <Link to = {`${url}/link-2`}  >Link 2</Link>
          </li>
          <li className = 'topicsLI bg-dark'>
            <Link to = {`${path}/link-3`}  >Link 3</Link>
          </li>
          <li className = 'topicsLI bg-dark'>
            <Link to = {`/link-3`}  >Link 4</Link>
          </li>
        </ul>
      </div>

    <Switch>
        <Route /* exact */ path = {`${path}/:topicID`}>
              {/* <Topic /> */}
        </Route>
    </Switch>
    </>
    )
}

function Topic() {

    let { topicID } = useParams();

    return(
        <div>
            <h3>Topic: {topicID}</h3>
        </div>
    )

}