import './App.css'
import { useRecoilState } from "recoil"
import { textState } from "./state"
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useRecoilState(textState)
  return (
    <div className="App" >
      <header className="App-header">
        <p className="text-blue-600">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<div>Nothing here
            <Link to={"/page1"}>Page1</Link>
            <Link to={"/page2"}>Page2</Link>
          </div>} />
        </Routes>
      </header>
    </div>)
}

function Page1() {
  return (
    <div>
      Page1
      <Link to={"/page1"}>Page1</Link>
      <Link to={"/page2"}>Page2</Link>
    </div>
  )
}
function Page2() {
  return (
    <div>
      Page2
      <Link to={"/page1"}>Page1</Link>
      <Link to={"/page2"}>Page2</Link>
    </div>
  )
}

export default App