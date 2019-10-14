import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleSubmit, inputName, inputPassword }) => {

  LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    inputName: PropTypes.element.isRequired,
    inputPassword: PropTypes.element.isRequired
  }

  return (
    <div>
      <h2 className='login'>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          {inputName}
        </div>
        <div>
          password
          {inputPassword}
        </div>
        <button className='loginButton' type="submit">login</button>
      </form>
    </div>
  )

}

export default LoginForm