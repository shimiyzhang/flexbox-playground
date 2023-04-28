import { useContext } from 'react'
import { FlexboxContext } from '@/context/FlexboxContext'

export default function FlexBox() {
  const flexbox = useContext(FlexboxContext)

  return (
    <div className="h-full w-full p-8 text-lg" style={{ ...flexbox }}>
      <div className=" m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ①
      </div>
      <div className="m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ②
      </div>
      <div className="m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ③
      </div>
      <div className="m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ④
      </div>
      <div className="m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ⑤
      </div>
      <div className="m-2 flex h-12 w-1/12 cursor-pointer items-center justify-center rounded bg-white shadow">
        index: ⑥
      </div>
    </div>
  )
}
