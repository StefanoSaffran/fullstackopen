const initialState =
{
  message: 'Default notification',
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.data
    case 'HIDE_NOTIFICATION':
      return action.data;
    default:
      return state;
  }
}

export const show = message => {
  return {
    type: 'SHOW_NOTIFICATION',
    data: {
      message
    }
  }
}

export const hide = message => {
  return {
    type: 'HIDE_NOTIFICATION',
    data: {
      message,
    }
  }
}

export default notificationReducer;