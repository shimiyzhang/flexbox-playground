import { useContext } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { FlexboxContext } from '@/context/FlexboxContext'
import { FlexItemsContext, FlexItemsDispatchContext } from '@/context/FlexItemsContext'

export default function FlexBox({ activeId, setActiveId }) {
  const flexboxStyle = useContext(FlexboxContext)

  const flexItemsStyle = useContext(FlexItemsContext)
  const flexItemsDispatch = useContext(FlexItemsDispatchContext)

  return (
    <div className="h-full w-full gap-4 overflow-x-auto p-8" style={{ ...flexboxStyle }}>
      {flexItemsStyle.map(({ id, value: flexItemStyle }, index) => {
        return (
          <div
            key={id}
            className="flex cursor-pointer items-center justify-center rounded bg-white shadow"
            style={{ ...flexItemStyle }}
          >
            <div
              className={`h-full flex-1 rounded-l p-4 ${
                id === activeId ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => setActiveId(id)}
            >
              index: {index}
            </div>
            <div
              className="flex items-center justify-center self-stretch border-l p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
              onClick={() => {
                if (id === activeId) {
                  setActiveId(null)
                }
                flexItemsDispatch?.({
                  type: 'deleted',
                  id: id,
                })
              }}
            >
              <DeleteOutlined />
            </div>
          </div>
        )
      })}
    </div>
  )
}
