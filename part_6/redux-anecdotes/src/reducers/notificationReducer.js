const initialState =
{
  message: 'Default notification',
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    default:
      return state;
  }
}

export const setNotification = (message, timeOut) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        message
      }
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: {
          message: ''
        }
      })
    }, (timeOut*1000))
  }
}

export default notificationReducer;