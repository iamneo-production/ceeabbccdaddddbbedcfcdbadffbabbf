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
    const onStop

}