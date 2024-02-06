import { BrowserRouter, Routes, Route } from "react-router-dom"

import AIChat from "./pages/AIChat"
import Layout from "./pages/Layout"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<AIChat/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
