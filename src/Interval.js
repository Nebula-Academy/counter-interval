import React, {useState, useEffect} from "react";

const Interval = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setCounter(count=>count+1);
        }, 500);
        return ()=>{clearInterval(intervalId);};
    }, []);

    return (
        <div>
            {counter}
        </div>
    );
}

export default Interval;