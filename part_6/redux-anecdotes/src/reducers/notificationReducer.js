const initialState =
{
  message: 'Default notification',
}


const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.message
    default:
      return state;
  }
}

export const show = message => {
  return {
    type: 'SHOW_NOTIFICATION',
    message
  }
}

export default notificationReducer;