import { useState, useEffect } from 'react';

const useTimer = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let intervalRef = null;

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef);
    };

    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef);
        setTimer(0);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef); // Clean up interval on unmount
    }, []);

    return { timer, isRunning, startTimer, stopTimer, resetTimer };
};

export default useTimer;
