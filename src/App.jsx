import React from 'react'
import PageTitle from './components/PageTitle'
import TopAppBar from './components/TopAppBar'
import Sidebar from './components/Sidebar'
import { useToggle } from './hooks/useToggle'
import Greetings from './pages/Greetings'


const App = () => {

  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas" />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* Top app bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* Main content */}
          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[840px] w-full mx-auto grow'>
              <Greetings />
            </div>
          </div>

          {/* Prompt field */}
          <div>
            <p>
              Phoenix may display inaccurate info, including about people, so double-check its responses.
              <a
                href="https://support.google.com/gemini?P=privacy_notice"
                target="_blank"
                className=''
              >
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App