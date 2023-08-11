import React from "react";
import { useState, useEffect } from "react";
export default function Stopwatch() {
    const [hour, Sethour] = useState(0);
    const [min, Setmin] = useState(0);
    const [sec, setsec] = useState(0);
    const [stop, setStop] = useState(true);
    const [dis, setdis] = useState(true);
    const [isstart, setstart] = useState(true);
    const [ispause, setpause] = useState(false);
    const onStart = () => {
        setStop(false);
        setdis(false);
        setstart(false);
    };
    const onStop = () => {
        setStop(true);
        setpause(true);
    };
    const onReset = () => {
        sethour(0);
        setmin(0);
        setsec(0);
    };
    const onResume = () => {
        setStop(false);
        setpause(false);
    };
    useEffect(() => {
        let interval = null;
        if(!stop){
            interval = setInterval(() => {
                if(min > 59) {
                    sethour(hour + 1);
                    setmin(0);
                    clearInterval(interval);
 

                }
                if(sec > 59) {
                    setmin(min + 1);
                    setsec(0);
                    clearInterval(interval);
                }
                if(sec <= 59) {
                    setsec(sec + 1);
                }
            }, 1000);
            
        }
        else {
            clearInterval(interval);
        }
        return () =>{
            clearInterval(interval);
        };
    }) 

}