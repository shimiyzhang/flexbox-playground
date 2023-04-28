import { createContext, useReducer } from 'react'

export const initFlexboxValue = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
}
export const FlexboxContext = createContext(null)

export const FlexboxDispatchContext = createContext(null)

export function FlexboxProvider({ children }) {
  const [flexbox, dispatch] = useReducer(flexboxReducer, initFlexboxValue)

  return (
    <FlexboxContext.Provider value={flexbox}>
      <FlexboxDispatchContext.Provider value={dispatch}>{children}</FlexboxDispatchContext.Provider>
    </FlexboxContext.Provider>
  )
}

function flexboxReducer(flexbox, action) {
  switch (action.type) {
    case 'changed': {
      return {
        ...flexbox,
        [action.key]: action.value,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
