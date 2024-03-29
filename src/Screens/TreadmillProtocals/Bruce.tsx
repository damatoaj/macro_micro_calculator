import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Ramp from './Ramp';
import './TreadmillTests.css';
const Bruce = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        seconds: 0,
        minutes: 0,
        stage : 1,
        grade : 10,
        mph: 1.7,
        inProgress: false,
        mets: 5
    });

    const handleStart = () => {
        setState((prev) => {
            return {...prev, inProgress : true }
        })
    };

    const handleStop = () => {
        const queryParams = new URLSearchParams({
            mets: state.mets.toString()
        });
        navigate({
            pathname: '/treadmill-protocols/bruce/results/',
            search: `?${queryParams}`
        })
    };

    useEffect(()=> {
        if (state.inProgress) {
            const bruceTest = setInterval(()=> {
                if (state.seconds < 59) {
                    setState((prev) => {
                        return { ...prev, seconds : prev.seconds + 1 }
                    })
                } else {
                    if (state.minutes < 2) {
                        //stage 1
                        setState((prev) => {
                            return { ...prev, seconds : 0, minutes : prev.minutes + 1 }
                        })
                        console.log('stage 1: ', state)
                    } 
                    else if (state.minutes >= 2 && state.minutes < 6) {
                        //stage 2
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:12, mph: 2.5, stage:2, mets: 7 }
                        })
                        console.log('stage 2: ', state)
                    } 
                    else if (state.minutes >= 5 && state.minutes < 9) {
                        //stage 3
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:14, mph: 3.4, stage:3, mets: 10 }
                        })
                    } 
                    else if (state.minutes >= 8 && state.minutes < 12) {
                        //stage 4
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:16, mph: 4.2, stage:4, mets: 13 }
                        })
                    } 
                    else if (state.minutes >= 11 && state.minutes < 15) {
                        //stage 5
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:18, mph: 5, stage:5, mets: 15 }
                        })
                    } 
                    else if (state.minutes >= 14 && state.minutes < 18) {
                        //stage 6
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:20, mph: 5.5, stage:6, mets: 18 }
                        })
                    } 
                    else if (state.minutes >= 17 && state.minutes  < 21) {
                        //stage7
                        setState((prev) => {
                            return {...prev, seconds : 0, minutes: prev.minutes + 1, grade:22, mph: 6, stage:7, mets: 20 }
                        })
                    } 
                    else {
                        clearInterval(bruceTest)
                    }
                }
            }, 1000)
            return ()=> clearInterval(bruceTest);
        }
    }, [state])


    return (
        <main className='treadmill-container'>
            <Ramp />
            {state.inProgress && (
                <section>
                    <h1>You Are In Stage {state.stage}</h1>
                    <h2>Your Treadmill Should Be Set At</h2>
                    <span>
                        <h3>{state.mph} MPH</h3>
                        <h3>{state.grade}% Grade</h3>
                    </span>
                </section>
            )}
            <h2>Time</h2>
            <time>{state.minutes < 10 ? `0${state.minutes}`:state.minutes}:{state.seconds < 10 ? `0${state.seconds}`:state.seconds}</time>

            {!state.inProgress && <button type='button' onClick={handleStart} disabled={state.inProgress}>Start</button>}
            {state.inProgress && <button type='button' onClick={handleStop} disabled={!state.inProgress}>Stop</button>}
        </main>
    )
};

export default Bruce;