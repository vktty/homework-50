import { useCallback, useState } from "react"

export const UseCallback = () => {
    const [text, setText] = useState('')

    const handleTextAlert = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleClick = useCallback((() => {
        alert(`Your text is ${text}`)
    }), [text])


    return (
        <div>
            <h3>Alert your text:</h3>
            <input type="text" onChange={handleTextAlert}></input>
            <button onClick={handleClick}>Alert</button>
        </div>
    )
}