import React from 'react';
import Section from './Section';
import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from "./data";
import Tabs from './Tabs';

function Examples() {
    const [selectedTopic, setselectedTopic] = useState();

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
        <Section title="Examples" id='examples'>
            <Tabs
                buttons={
                    <>
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
                    </>
                }
            >
                {tabContent}</Tabs>
        </Section>
    );
}

export default Examples;
