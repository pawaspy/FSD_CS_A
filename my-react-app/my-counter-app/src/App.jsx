import {Routes, Route} from 'react-router-dom'
import Refex from './Refex'
const App=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}></Route>
                <Route path="/counter" element={<h1>Counter App</h1>}></Route>
                <Route path="/stopwatch" element={<h1>Stop Watch App</h1>}></Route>
                <Route path="*" element={<h1>No Page</h1>}></Route>
                <Route path="/ref" element={<Refex/>}></Route>
            </Routes>
        </div>
    )
}
export default App;