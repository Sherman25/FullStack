import React, {useState} from 'react';

function NewPage(){
    const[text, setText] = useState("Enter your text here ...");
    return(
        <div>
            {text}
            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
        </div>
    );
}

export default NewPage;