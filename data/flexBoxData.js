export const display = ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'none']

export const flexDirection = ['row', 'row-reverse', 'column', 'column-reverse']

export const flexWrap = ['nowrap', 'wrap', 'wrap-reverse']

export const justifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
]

export const alignItems = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline']

export const alignContent = [
  'stretch',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]

export const flexBoxOptions = [
  { key: 'display', label: 'display', value: display },
  { key: 'flexDirection', label: 'flex-direction', value: flexDirection },
  { key: 'flexWrap', label: 'flex-wrap', value: flexWrap },
  { key: 'justifyContent', label: 'justify-content', value: justifyContent },
  { key: 'alignItems', label: 'align-items', value: alignItems },
  { key: 'alignContent', label: 'align-content', value: alignContent },
]

export const alignSelf = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']

export const flexItemOptions = [
  { key: 'order', label: 'order', value: '' },
  { key: 'flexGrow', label: 'flex-grow', value: '' },
  { key: 'flexShrink', label: 'flex-shrink', value: '' },
  { key: 'flexBasis', label: 'flex-basis', value: '' },
  { key: 'alignSelf', label: 'align-self', value: alignSelf },
]
