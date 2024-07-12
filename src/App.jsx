import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom"
import RootLayout from "./RootLayout/RootLayout"
import HomePage from "./Pages/HomePage"
import TaskView from "./Pages/TaskViewPage"
import ContactPage from "./Pages/ContactPage"


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/task-view' element={<TaskView/>} />
            <Route path='/contact' element={<ContactPage/>} />
        </Route>
      </Route>
    )
  )
  
  return (
    <>
    <div className="bg-black">
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App


