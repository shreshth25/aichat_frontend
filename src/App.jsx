import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout"
import AIChat from "./pages/AIChat"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<AIChat/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
