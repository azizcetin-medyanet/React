import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href='/'>Home</a> </li>
                            <li><a href='/new-post'>New Post</a></li> */}
                            <li><NavLink 
                            to="/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}
                            > Home </NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', // This is the absolute path
                                //pathname: this.props.match.url + '/new-post', this is the relative path
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}> New Post </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/> */}
                {/* <Route path="/posts/:id" component={NewPost} /> Its a possible  solution for the render the "/" paths. */}
                
                <Route path="/" exact component={Posts} />
                <Switch>
                    {/* FOr Switch order is very important */}
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;