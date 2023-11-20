import './App.css';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from "./components/data"

function App() {
  const [selectedTopic, setselectedTopic] = useState();
  // "Please select the tab"

  const handleClick = (selectedTab) => {
    setselectedTopic(selectedTab);
  };

  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")} label="Components" />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")} label="JSX" />
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")} label="Props" />
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")} label="State" />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
