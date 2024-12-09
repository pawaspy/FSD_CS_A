
import { useRef } from "react";
const Refex = () =>{
    let a = 5;
    const refcont = useRef(0);
    console.log("object Rendererd")
    function handleRef(){
        refcont.current++;
        console.log("refcount = ", refcont.current)
        if(refcont.current==a)
            alert("counter = "+refcont.current)
    }
    return(
        <div>
            <h1>Refcount={refcont.current}</h1>
            <button onClick={handleRef}>Increment</button>
            <p>{a}</p>
        </div>
    )
}
export default Refex;