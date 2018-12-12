import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3> {post.title}</h3>
                <p> {post.body}</p>
            </div>
        ));


        return (
            <div>
                <h1>post</h1>
                {postItems};
      </div>
        )
    }
}

Post.PropTypes = {
    fetchPosts: PropTypes.func.isRequired,//fetchpostsx is a property
    Post: PropTypes.array.isRequired  //array
    , newPost: PropTypes.object
}

const mapStateToProps = state => ({ //mapStateToProps get the updated state from store
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Post); //To export the component with updated state