import React, { useState, useEffect } from 'react';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(response => {
                return response.json();
            }).then(resAsJson => {
                console.log(resAsJson);
                setPosts(resAsJson)
            })
    }, []);

    const getPost = (e) => {
        const id = e.target.id;
        console.log(id)
    }

    return (
        posts && posts.length > 0 ?
            posts.map(post => {
                return <div className="post-card" id={post.id} onClick={getPost} key={post.id}>
                    <img src={`http://127.0.0.1/storage/${post.img}`} alt={post.img} className="img" />
                    <p className="post-title">{post.title}</p>
                    <p className="post-content">{post.content}
                        <span className="post-user"> Written By: {post.name}</span>
                    </p>
                </div>
            })
            : null
    )
}
export default Post;