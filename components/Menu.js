import { useContext } from 'react'
import { Form, Select } from 'antd'
import { flexBoxOptions } from '@/data/flexBoxData'
import { FlexboxContext, FlexboxDispatchContext } from '@/context/FlexboxContext'

export default function Menu() {
  const flexbox = useContext(FlexboxContext)
  const dispatch = useContext(FlexboxDispatchContext)
  return (
    <div className="flex h-full w-full flex-col flex-wrap items-center overflow-y-auto p-4 text-lg">
      <Form className="w-2/3" layout="vertical" size="large">
        {flexBoxOptions.map(({ label, key, value }) => {
          const selectValue = flexbox[key]
          const options = value.map((item) => {
            return {
              label: item,
              value: item,
            }
          })
          return (
            <Form.Item label={label} key={label}>
              <Select
                style={{ width: '100%' }}
                value={selectValue}
                options={options}
                onChange={(value) => {
                  dispatch({
                    type: 'changed',
                    key: key,
                    value: value,
                  })
                }}
              />
            </Form.Item>
          )
        })}
      </Form>
    </div>
  )
}
