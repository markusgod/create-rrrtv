import { useRecoilState } from "recoil"
import { textState } from "./state"
import { Link as ReachLink, Route, Routes } from 'react-router-dom'
import { Box, Button, Link } from "@chakra-ui/react"

function App() {
  const [count, setCount] = useRecoilState(textState)
  return (
    <Box>
      <Button onClick={() => setCount((count) => count + 1)}>count is: {count}</Button>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={
          <Box>Nothing here</Box>
        } />
      </Routes>
      <Navigation />
    </Box>
  )
}

function Page1() {
  return (
    <Box>
      Page1
    </Box>
  )
}
function Page2() {
  return (
    <Box>
      Page2
    </Box>
  )
}

function Navigation() {
  return (
    <Box>
      <Link as={ReachLink} to={"/"}>Home</Link>
      <Link as={ReachLink} to={"/page1"}>Page1</Link>
      <Link as={ReachLink} to={"/page2"}>Page2</Link>
    </Box>
  )
}

export default App