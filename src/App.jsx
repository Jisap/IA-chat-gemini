import React from 'react'
import PageTitle from './components/PageTitle'
import TopAppBar from './components/TopAppBar'


const App = () => {
  return (
    <>
      <PageTitle title="Phoenix - chat to supercharge your ideas"/>

      {/* Sidebar */}
      <div>
        {/* Top app bar */}
        <TopAppBar />
        
        {/* Main content */}
        <div>
          <div>

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
    </>
  )
}

export default App