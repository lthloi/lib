
import './App.css'

function App() {
    const value = 33

    const handleChange = (e, chua) => {
        console.log('>>> change >>>', e.target.value)
        console.log('>>> chua >>>', chua)
    }

    const debounce = (fn, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => fn(...args), delay)
        }
    }

    function throttle(fn, delay) {
        let run = false
        return function (...args) {
            if (!run) {
                fn(...args)
                run = true
                setTimeout(() => run = false, delay)
            }
        }
    }

    return (
        <div className="App">
            <label htmlFor='test'>TEST React App</label>
            <input type="text" name="test" id="test" onChange={throttle((e) => handleChange(e, value), 500)} />
        </div>
    )
}

export default App
