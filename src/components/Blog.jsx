import React, { useState } from 'react';
import '../styles/Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handlePostBlog = () => {
        const newBlog = {
            id: blogs.length + 1,
            title,
            author,
            text,
            image,
        };
        setBlogs([newBlog, ...blogs]);
        setTitle('');
        setAuthor('');
        setText('');
        setImage(null);
    };

    const toggleLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id],
        }));
    };

    const handleAddComment = (id) => {
        if (newComment.trim()) {
            setComments((prevComments) => ({
                ...prevComments,
                [id]: [...(prevComments[id] || []), newComment],
            }));
            setNewComment('');
        }
    };

    return (
        <div>
            <h2 className="blog-heading">Write a Blog</h2>
            <div className="blog-form">
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="input-field"
                />
                <textarea
                    placeholder="Write your blog here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="textarea-field"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                />
                <button onClick={handlePostBlog} className="submit-button">
                    Post Blog
                </button>
            </div>

            <div className="blogs-list">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-item">
                        {blog.image && (
                            <img src={blog.image} alt="Blog" className="blog-image" />
                        )}
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-author">By {blog.author}</p>
                            <p className="blog-text">{blog.text}</p>
                        </div>
                        <div className="blog-actions">
                            <span
                                className={`like-icon ${likes[blog.id] ? 'active' : ''}`}
                                onClick={() => toggleLike(blog.id)}
                            >
                                👍
                            </span>
                            <span
                                className="comment-icon"
                                onClick={() => handleAddComment(blog.id)}
                            >
                                💬
                            </span>
                        </div>
                        <div className="comments-section">
                            {comments[blog.id]?.map((comment, index) => (
                                <p key={index}>{comment}</p>
                            ))}
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="input-field"
                            />
                            <button
                                onClick={() => handleAddComment(blog.id)}
                                className="submit-button"
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
