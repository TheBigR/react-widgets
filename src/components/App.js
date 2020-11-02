import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate'

const items  = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'green'
    },
    {
        label:'A Shade of Blue',
        value:'blue'
    }
];

const App  = () => {  
    const [selected, setSelected] = useState(options[0]);
    

    return (
            <div>
                <Accordion items={items}/>
                <Search />                                
                <Dropdown 
                        label="Select Color"
                        options={options} 
                        selected={selected}
                        onSelectedChange={setSelected}
                /> 
                <Translate />
            </div>
        );
    };

export default App