import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'


test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Author"s name',
    likes: 5
  }

  const component = render(
    <SimpleBlog blog={blog} />
  )

  component.debug()

  const div = component.container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library',
    'Author"s name',
    5
  )
})

test('clicking the button calls event handler once', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'Author"s name',
    likes: 5
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})