import { createContext, useReducer } from 'react'
import { getUuid } from '@/utils/utils'

export const initFlexItemValue = {
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
  alignSelf: 'auto',
}
export const FlexItemsContext = createContext(null)

export const FlexItemsDispatchContext = createContext(null)

export function FlexItemsProvider({ children }) {
  const [flexItems, dispatch] = useReducer(flexItemsReducer, [])

  return (
    <FlexItemsContext.Provider value={flexItems}>
      <FlexItemsDispatchContext.Provider value={dispatch}>
        {children}
      </FlexItemsDispatchContext.Provider>
    </FlexItemsContext.Provider>
  )
}

function flexItemsReducer(flexItems, action) {
  switch (action.type) {
    case 'added': {
      return [...flexItems, { id: getUuid(), value: initFlexItemValue }]
    }
    case 'changed': {
      return flexItems.map((f) => {
        if (f.id === action.id) {
          return {
            ...f,
            value: {
              ...f.value,
              [action.key]: action.value,
            },
          }
        } else {
          return f
        }
      })
    }
    case 'deleted': {
      return flexItems.filter((f) => f.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
