import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {useCallback, useEffect, useState} from "react";

function RecaptchaComponent(){
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [token,setToken] = useState('');

    const handleCaptchaVerify = useCallback(async () => {
        if(!executeRecaptcha){
            console.log(`Execute recaptcha not yet available`)
            return;
        }
        const value = await executeRecaptcha('yourAction')
        console.log("value :"+value);
        setToken(value)
    },[])

    useEffect(() => {
        handleCaptchaVerify()
            .then(result => console.log(result))
    },[handleCaptchaVerify])

    if(token)
    console.log(token)
    return <button onClick={handleCaptchaVerify}>Verify recaptcha</button>;
}

export default RecaptchaComponent;