import React, { useEffect, useState } from 'react'

function ChangeTransform() {
    const val = document.getElementsByClassName("card")
    for( let i = 0; i < val.length; i ++){
        if(val[i].style.transform === "none" ){
            val[i].style.transform = "rotate(0)"
        }else{
            console.log("not working")
        }
    }
}

const DelayFunction = () => {
    const [fn, setFn] = useState("");
    useEffect(()=> {
        const timeOutId = setTimeout(()=> {
            setFn(ChangeTransform);
        }, 2000);
        return () => clearTimeout(timeOutId)
    }, [])

    return fn
}



export default DelayFunction
