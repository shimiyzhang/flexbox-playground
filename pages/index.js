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
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://flexbox-playground-sigma.vercel.app" />
        <meta />
        <meta
          name="description"
          content="Flexbox Playground是一个用于探索Flex布局的Web应用程序。它提供了一个Flex容器和项目的编辑器。用户可以单击项目以查看其属性，并在编辑器中更改这些属性。"
        />
        <meta
          property="og:description"
          content="Flexbox Playground是一个用于探索Flex布局的Web应用程序。它提供了一个Flex容器和项目的编辑器。用户可以单击项目以查看其属性，并在编辑器中更改这些属性。"
        />
      </Head>
      <main className="flex h-screen w-screen items-center justify-between bg-gray-100">
        <FlexboxProvider>
          <FlexItemsProvider>
            <section className="h-full w-full sm:w-3/4">
              <FlexBox activeId={activeId} setActiveId={setActiveId} />
            </section>
            <menu className="fixed bottom-0 h-1/2 w-full border-l border-gray-300 bg-white sm:relative sm:h-full sm:w-1/4">
              <Menu activeId={activeId} />
            </menu>
          </FlexItemsProvider>
        </FlexboxProvider>
      </main>
    </>
  )
}
