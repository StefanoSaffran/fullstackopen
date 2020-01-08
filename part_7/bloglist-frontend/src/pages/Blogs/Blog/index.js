import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Comments, Form } from './styles';

export default function Blog() {
  const user = useSelector(state => state.user.profile);
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(true);

  const loadBlog = async () => {
    try {
      const { data } = await api.get(`/api/blogs/${id}`);
      setBlog(data);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error connecting to the server'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlog();
  }, []); //eslint-disable-line

  const handleLikes = async () => {
    const blogToUpdate = {
      comments: blog.comments.map(c => c.id),
      user: blog.user.id,
      likes: (blog.likes += 1),
      author: blog.author,
      title: blog.title,
      url: blog.url,
    };

    try {
      const { data } = await api.put(`/api/blogs/${id}`, blogToUpdate);

      setBlog({
        ...data,
        user: {
          username: blog.user.username,
          name: blog.user.name,
          id: blog.user.id,
        },
        comments: blog.comments.map(c => ({
          text: c.text,
          id: c.id,
          blog: c.blog,
        })),
      });
      toast.success(`${user.name} liked the blog post ${data.title}`);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error trying to like the blog'
      );
    }
  };

  const handleDelete = async () => {
    const result = window.confirm(
      `remove blog ${blog.title} by ${blog.author} ?`
    );

    if (result) {
      try {
        await api.delete(`/api/blogs/${id}`);

        toast.success('the blog has been removed from server');
        history.push('/blogs');
      } catch (err) {
        toast.error(
          (err.response && err.response.data.error) ||
            'Error trying to delete the blog'
        );
      }
    }
  };

  const handleComment = async e => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/blogs/${id}/comments`, {
        text: comment,
      });

      setBlog({
        ...blog,
        comments: blog.comments.concat(data),
      });
      setComment('');
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error trying to add a comment'
      );
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <>
          <div>
            <h1>
              {blog.title} {blog.author} <br />
            </h1>
            <a className="dont-break-out" href={blog.url}>
              {blog.url}
            </a>{' '}
            <br />
            <div>
              <p>{blog.likes} likes</p>
              <button
                className="like"
                type="button"
                onClick={() => handleLikes(blog)}
              >
                like
              </button>
            </div>
            <p>added by {blog.user.name || user.name} </p>
            {blog.user.name === user.name && (
              <button
                type="button"
                className="remove"
                onClick={() => handleDelete(blog)}
              >
                remove
              </button>
            )}
          </div>
          <Comments>
            <h3>comments</h3>
            <Form onSubmit={handleComment}>
              <div>
                <input
                  type="text"
                  value={comment}
                  onChange={({ target }) => {
                    setComment(target.value);
                  }}
                />

                <button type="submit" className="addComment">
                  add comment
                </button>
              </div>
            </Form>
            <ul>
              {blog.comments &&
                blog.comments.map(c => <li key={c.id}>{c.text}</li>)}
            </ul>
          </Comments>
          <Link to="/blogs">Back to Blogs</Link>
        </>
      )}
    </Container>
  );
}

Blog.propTypes = {};
