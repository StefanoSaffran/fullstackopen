import React, { useState } from 'react'

const Blog = ({ blog, handleLikes, handleDelete, user }) => {

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <div onClick={toggleVisibility} style={hideWhenVisible} className='blog'>
        {blog.title} {blog.author}
      </div>
      <div style={showWhenVisible} className='isVisible'>
        <div onClick={toggleVisibility}>
          {blog.title} {blog.author} <br />
        </div>
        {blog.url} <br />
        {blog.likes} likes <button onClick={() => handleLikes(blog)}>like</button> <br />
        added by {blog.user.name || user.name} <br />
        {blog.user.name === user.name && <button onClick={() => handleDelete(blog)}>remove</button>}
      </div>
    </div>
  )
}
export default Blog