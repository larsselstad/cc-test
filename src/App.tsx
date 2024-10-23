import './App.css'
import Button from "./components/Button.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
      <>
        <Header size="xlarge" />
        <Header size="large" />
        <Header size="medium" />
        <Button />
      </>
  )
}

export default App
