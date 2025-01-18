import React, { useEffect } from 'react'
import PageTitle from './components/PageTitle'
import TopAppBar from './components/TopAppBar'
import Sidebar from './components/Sidebar'
import { useToggle } from './hooks/useToggle'
import Greetings from './pages/Greetings'
import { motion } from 'framer-motion'
import PromptField from './components/promptField'
import { Outlet, useParams, useNavigation, useActionData } from 'react-router-dom'
import { useSnackbar } from './hooks/useSnackbar'


const App = () => {

  const params = useParams();
  const navigation = useNavigation();
  const actionData = useActionData(); // Returns the action data from the most recent POST navigation form submission
console.log("actionData", actionData);
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if(actionData?.conversationTitle){
      showSnackbar({
        message: `Deleted: ${actionData.conversationTitle} conversation`,
      })
    }
  })

  const isNormalLoad = navigation.state === "loading" && !navigation.formData; // isNormalLoad es true cuando la página se carga y no hay formularios en la URL

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
              {isNormalLoad ? null : params.conversationId ? ( // Si la página "/" tiene un parámetro conversationId, mostramos el elemento asociado a la ruta "/:conversationId". outlet renderiza el componente de la ruta hija de app.js
                <Outlet />
              ) : (
                <Greetings />
              )}
            </div>
          </div>

          {/* Prompt field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>

              <PromptField />

              <motion.p
                initial={{ opacity: 0, translateY: "-4px" }}
                animate={{ opacity: 1, translateY: "0px" }}
                transition={{ duration: 0.2, delay: 0.8, ease: "easeOut"}}
                className='text-bodySmall text-center text-light-onsurfaceVariant dark:text-dark-onSurfaceVariant p-3' 
              >
                Phoenix may display inaccurate info, including about people, so double-check its responses.
                <a
                  href="https://support.google.com/gemini?P=privacy_notice"
                  target="_blank"
                  className='inline underline ms-1'
                >
                  Your privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App