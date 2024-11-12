import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")

    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")

    }

    const handleAltClick = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to alternate case!", "success")

    };

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Successfully copied!", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")

    }

    const handleclear = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Cleared!", "success")
    }

    const handlOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // text = "new Text"; // Wrong way to change the state
    // setText = "new text"; // Correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handlOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Connvert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Connvert to Lowercasee</button>
                <button className="btn btn-primary mx-2" onClick={handleAltClick}>Connvert to aLtErNaTiNg case</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleclear}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
