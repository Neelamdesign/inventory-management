import {Routes, Route, BrowserRouter} from "react-router-dom"
import Dashboard from "./pages/dashboard"
import AddForm from "./pages/addform"
import UpdateForm from "./pages/update"


const App = ()=>{
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Dashboard/>} />
   <Route path="/add" element={<AddForm/>} />
   <Route path="/update/:id" element={<UpdateForm/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App