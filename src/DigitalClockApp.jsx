import React, {useState, useEffect} from "react"

function DigitalClockApp(){
    const [time, setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return(()=>{
            clearInterval(interval)
        })
    }, [])

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        //let milliSeconds = time.getMilliseconds();
        let meridium = hours >= 12 ? 'PM' : 'AM'

        return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridium}`
    }

    function padZero(number){
        return (number < 10 ? '0' : '') + number
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClockApp