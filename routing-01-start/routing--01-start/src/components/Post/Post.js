import React from 'react';

import './Post.css';

/*

withRouter uses for showing the rendered  component  router infos   
import {withRouter} from 'react-router-dom';

const post = (props) => {
    console.log(props);
}

export default withRouter(Post);
*/


const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;