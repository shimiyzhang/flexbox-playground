import { useState, useContext } from 'react'
import { Form, Input, Select, Button, Segmented } from 'antd'
import { flexBoxOptions, flexItemOptions } from '@/data/flexBoxData'
import { FlexboxContext, FlexboxDispatchContext } from '@/context/FlexboxContext'
import { FlexItemsContext, FlexItemsDispatchContext } from '@/context/FlexItemsContext'

const tabOptions = ['CONTAINER', 'ITEMS']

export default function Menu({ activeId }) {
  const flexbox = useContext(FlexboxContext)
  const flexboxDispatch = useContext(FlexboxDispatchContext)

  const flexItems = useContext(FlexItemsContext)
  const flexItemsDispatch = useContext(FlexItemsDispatchContext)

  const [tab, setTab] = useState('CONTAINER')

  const options = tab === 'CONTAINER' ? flexBoxOptions : flexItemOptions
  const context = tab === 'CONTAINER' ? flexbox : flexItems
  const dispatch = tab === 'CONTAINER' ? flexboxDispatch : flexItemsDispatch

  const isNull = tab === 'ITEMS' && activeId === null

  const message =
    flexItems?.length > 0
      ? '单击左侧容器中的伸缩项以编辑其样式。'
      : '首先在另一个选项卡中添加一个项目。'

  return (
    <div className="flex h-full w-full flex-col p-4">
      <Segmented size="large" block options={tabOptions} onChange={(value) => setTab(value)} />
      <div className="flex w-full flex-1 flex-col flex-wrap items-center overflow-y-auto p-4 text-lg">
        <Form className="w-2/3" layout="vertical" size="large">
          {tab === 'CONTAINER' && (
            <Button
              className="my-4 bg-blue-500"
              type="primary"
              block
              onClick={() =>
                flexItemsDispatch?.({
                  type: 'added',
                })
              }
            >
              Add Flex Item
            </Button>
          )}
          {isNull ? (
            <p className="rounded bg-blue-50 p-4 text-sm leading-normal text-blue-900">{message}</p>
          ) : (
            options.map(({ label, key, value }) => {
              let formValue
              if (tab === 'CONTAINER') {
                formValue = context[key]
              } else {
                const itemValue = context.find((c) => c.id === activeId)?.value
                formValue = itemValue[key]
              }
              let formItemValue
              if (Array.isArray(value)) {
                const options = value.map((item) => {
                  return {
                    label: item,
                    value: item,
                  }
                })
                formItemValue = (
                  <Select
                    style={{ width: '100%' }}
                    value={formValue}
                    options={options}
                    onChange={(value) =>
                      dispatch?.({
                        type: 'changed',
                        key: key,
                        id: activeId,
                        value: value,
                      })
                    }
                  />
                )
              } else {
                formItemValue = (
                  <Input
                    style={{ width: '100%' }}
                    value={formValue}
                    onChange={(event) =>
                      dispatch?.({
                        type: 'changed',
                        key: key,
                        id: activeId,
                        value: event.target.value,
                      })
                    }
                  />
                )
              }
              return (
                <Form.Item label={label} key={label}>
                  {formItemValue}
                </Form.Item>
              )
            })
          )}
        </Form>
      </div>
    </div>
  )
}
