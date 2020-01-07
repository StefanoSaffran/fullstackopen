import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    let component;

    component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(() => component.container.querySelector('.login'))

    expect(component.container).not.toHaveTextContent(
      'React patterns'
    )

    expect(component.container).not.toHaveTextContent(
      'Go To Statement Considered Harmful'
    )

    expect(component.container).not.toHaveTextContent(
      'Canonical string reduction'
    )
  })

  test('if a user is logged, blogs are rendered', async () => {
    let component;
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }
    localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
    component = render(
      <App/>
    )

    component.rerender(<App />)

    expect(localStorage.getItem('loggedBlogAppUser')).toContain('token')

  })
})