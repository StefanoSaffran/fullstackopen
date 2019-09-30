import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'


let component;

const blog = {
  title: 'Component testing is done with react-testing-library',
  author: 'Author"s name',
  likes: 5,
  user: {
    name: 'User"s name'
  }
}
const user = {
  name: 'User"s name'
}

beforeEach(() => {
  component = render(
    <Blog blog={blog} user={user}/>
  )
})

test('only the name and author of the blog post are shown by default', () => {

  component.debug();

  const div = component.container.querySelector('.isVisible')
  expect(div).toHaveStyle('display: none')
})

test('when the blog post is clicked, the other information of the blog post becomes visible', () => {

  const button = component.container.querySelector('.blog')
  fireEvent.click(button)

  const div = component.container.querySelector('.isVisible')
  expect(div).not.toHaveStyle('display: none')
})