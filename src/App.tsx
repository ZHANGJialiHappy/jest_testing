import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Skills skills={['html', 'css']}/>
    </div>
  );
}

export default App;
