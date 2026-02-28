import { useMemo, useState } from "react"

export const UseMemo = () => {
    const [inputNum, setInputNum] = useState('')
    const [maxNum, setMaxNum] = useState(0)

    const calculations = (max: number) => {
        const numbers = Array.from({ length: max }, (_, i) => i + 1)
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum
    }

    const result = useMemo(() => calculations(maxNum), [maxNum])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNum(e.target.value)
    }
    const handleClick = () => {
        setMaxNum(+inputNum)
    }

    return (
        <div>
            <h3>Enter you number to know the sum of all numbers:</h3>
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleClick}>Count</button>
            <p>The sum from 1 to {maxNum} is {result}</p>
        </div>
    )
}