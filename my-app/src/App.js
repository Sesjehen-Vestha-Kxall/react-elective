import './App.css';
import { useState } from 'react';//hook

const operate = (op, a, b) => {
    let r;
    // eslint-disable-next-line default-case
    switch (op) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/': r = a / b;
    }
    document.getElementById('result').textContent = `Result: ${r ?? 'something went wrong!'}`;
}

function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    return (
        <div className='App'>
            <h1>ReactCalc</h1>
            <div id="result">
                Result: 
            </div>
            <br/>
            <label htmlFor="a">a: </label>
            <input type='number' id='a' onChange={e => {
                setA(+e.target.value)
            }}/>
            <br/>
            <label htmlFor="b">b: </label>
            <input type='number' id='b' onChange={e => {
                setB(+e.target.value)
            }}/>
            <br/>
            <button type="button" onClick={() => operate('+', a, b)}>+</button>
            <button type="button" onClick={() => operate('-', a, b)}>-</button>
            <button type="button" onClick={() => operate('*', a, b)}>*</button>
            <button type="button" onClick={() => operate('/', a, b)}>/</button>
            <br/>
        </div>
    );
}

export default App;