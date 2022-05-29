import { useEffect, useState } from "react";

export interface InputData {
    username : string
}

export const InputForm = (props? : InputData) => {

    const [inputValue, setInputValue] = useState<string>("");
    const [warningMessage, setWarningMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [successMessage, setSuccessMessage] = useState<string>("");

    const formReady = !!inputValue && !errorMessage;

    const handleInputChange = (event : any) => {
        const value : string = event.target.value;
        setInputValue(value);

        if(value.length !== 0 && value.length < 3)
        {
            setErrorMessage("Username too short! Must be between 3 and 20 characters!");
        }
        else if(value.length > 20)
        {
            setErrorMessage("Username too long! Must be between 3 and 20 characters!");
        }
        else
        {
            setErrorMessage("");
        }
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        if (formReady)
        {
            const trimmed = inputValue.trim();
            if(inputValue.length !== trimmed.length)
            {
                setInputValue(trimmed);
                setWarningMessage("The input was trimmed, don't put spaces at the beginning or at the end! If you want to submit, try again!");
                setTimeout(setWarningMessage, 3000, "");
                if(trimmed.length !== 0 && trimmed.length < 3)
                {
                    setErrorMessage("Username too short! Must be between 3 and 20 characters!");
                }
            }

            else
            {
                localStorage.setItem("username", inputValue);
                setSuccessMessage("Username submitted successfully!");
                setTimeout(setSuccessMessage, 3000, "");
            }
        }
    }

    useEffect(() => {
        const loadedUsername = localStorage.getItem("username");
        if (loadedUsername != null)
        {
            setInputValue(loadedUsername);
        }
    },[]);

    return <div style={{"width": "350px"}}>
        <form onSubmit={handleSubmit} id="username-form">
            {successMessage && <span id="success-message">{successMessage}</span>}
            <label htmlFor="username-input">Username:</label>
            <input className="rounded-sm text-gray-800 p-2 mt-5 text-lg" onInput={handleInputChange} value={inputValue} placeholder="Enter your username here..." id="username-input"></input>
            {warningMessage && <span id="warning-message">{warningMessage}</span>}
            {errorMessage && <span id="error-message">{errorMessage}</span>}
            <button className="bg-slate-700 rounded-sm p-2 w-4/5 mt-4 hover:bg-slate-800 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-slate-600" disabled={!formReady} type="submit">Submit</button>
        </form>
    </div>
}