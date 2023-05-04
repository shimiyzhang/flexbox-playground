import { useState } from 'react'
import Head from 'next/head'
import FlexBox from '@/components/FlexBox'
import Menu from '@/components/Menu'
import { FlexboxProvider } from '@/context/FlexboxContext'
import { FlexItemsProvider } from '@/context/FlexItemsContext'

export default function Home() {
  const [activeId, setActiveId] = useState(null)
  return (
    <>
      <Head>
        <title>Flexbox Playground</title>
      </Head>
      <main className="flex h-screen w-screen items-center justify-between bg-gray-100">
        <FlexboxProvider>
          <FlexItemsProvider>
            <section className="h-full w-3/4">
              <FlexBox activeId={activeId} setActiveId={setActiveId} />
            </section>
            <menu className="h-full w-1/4 border-l border-gray-300 bg-white">
              <Menu activeId={activeId} />
            </menu>
          </FlexItemsProvider>
        </FlexboxProvider>
      </main>
    </>
  )
}
