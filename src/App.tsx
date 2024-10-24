import './App.css'
import Button from "./components/Button.tsx";
import Header from "./components/Header.tsx";
import Paragraph from "./components/Paragraph.tsx";

function App() {
  return (
      <>
        <Header size="xlarge" />
        <Header size="large" />
        <Header size="medium" />
        <Button />
          <Paragraph uppercase="uppercase">
              Paragraph
          </Paragraph>
      </>
  )
}

export default App
