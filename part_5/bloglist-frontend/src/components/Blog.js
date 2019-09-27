import React, { useState } from 'react'

const Blog = ({ blog }) => {

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
      <div onClick={toggleVisibility} style={hideWhenVisible}>
        {blog.title} {blog.author}
      </div>
      <div style={showWhenVisible} onClick={toggleVisibility}>
        {blog.title} {blog.author} <br/>
        {blog.url} <br/>
        {blog.likes} likes <button>like</button> <br/>
        added by {blog.author}
      </div>
    </div>
  )
}
export default Blog