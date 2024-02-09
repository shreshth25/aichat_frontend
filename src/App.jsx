import { BrowserRouter, Routes, Route } from "react-router-dom"

import AIChat from "./pages/AIChat"
import Layout from "./pages/Layout"
import EmotionChat from "./pages/EmotionChat"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<AIChat/>}></Route>
        <Route path="emotion" element={<EmotionChat/>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
