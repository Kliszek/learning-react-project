import { useEffect, useState } from "react";
import Airtable from 'airtable';

export interface InputData {
    username : string
}

export const InputForm = (props? : InputData) => {

    const tableName = process.env.REACT_APP_AIRTABLE_API_TABLE;
    const [inputValue, setInputValue] = useState<string>("");
    const [warningMessage, setWarningMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [successMessage, setSuccessMessage] = useState<string>("");

    const [ dbRecords, setDbRecords ] = useState<string[]>([]);

    const formReady = !!inputValue && !errorMessage;

    const handleInputChange = (event : any) => {
        const value : string = event.target.value;
        setInputValue(value);

        if(value.length !== 0 && value.length < 3)
        {
            setErrorMessage("Input too short! Must be between 3 and 20 characters!");
        }
        else if(value.length > 20)
        {
            setErrorMessage("Input too long! Must be between 3 and 20 characters!");
        }
        else
        {
            setErrorMessage("");
        }
    }

    const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY
    const dbId = process.env.REACT_APP_AIRTABLE_API_DB_ID
    const base = new Airtable({apiKey}).base(`${dbId}`);

    const handleLoadRecords = async () => {
        await base(`${tableName}`).select({
            fields:["Name", "Id"],
            sort:[{field:"Id", direction:"desc"}]
        }).eachPage(function page(records, fetchNextPage) {
        
            setDbRecords(records.map(item => item.fields.Name) as string[]);
            records.forEach(function(record) {
                console.log(record);
                console.log('Retrieved', record.get('Name'));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }

    const handleSubmit = async (event : any) => {
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
                    setErrorMessage("Input too short! Must be between 3 and 20 characters!");
                }
            }

            else
            {
                await handleSetNewRecord();
                await handleLoadRecords();
                //localStorage.setItem("username", inputValue);
                setSuccessMessage("Record added successfully!");
                setTimeout(setSuccessMessage, 3000, "");
            }
        }
    }

    const handleSetNewRecord = async () => {
        await base(`${tableName}`).create([
            {
              "fields": {
                "Name": inputValue,
                "Id": dbRecords.length,
              }
            }
          ], function(err, records: any) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record: any) {
              console.log(`Saved value: ${record.name}`);
              setInputValue('');
            });
          });
    }

    useEffect(() => {
        handleLoadRecords();
        const loadedUsername = localStorage.getItem("username");
        if (loadedUsername != null)
        {
            setInputValue(loadedUsername);
        }
    },[]);

    return <div className="mt-10 w-96">
        <form onSubmit={handleSubmit} id="username-form">
            {successMessage && <span id="success-message">{successMessage}</span>}
            <label htmlFor="username-input">New record:</label>
            <input className="rounded-sm text-gray-800 p-2 mt-5 text-lg" onInput={handleInputChange} value={inputValue} placeholder="Enter a new record here..." id="username-input"></input>
            {warningMessage && <span id="warning-message">{warningMessage}</span>}
            {errorMessage && <span id="error-message">{errorMessage}</span>}
            <button className="bg-slate-700 rounded-sm p-2 w-4/5 mt-4 hover:bg-slate-800 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-slate-600" disabled={!formReady} type="submit">Submit</button>
        </form>
        <h3 className="">
            Records:
        </h3>
        <p className="text-sm mb-4">
            (Newest to oldest)
        </p>
        <table className="w-full border-4 border-black text-sm text-left text-gray-500 dark:text-gray-400 mb-5">
            <tbody>
                {dbRecords.map(item => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                            {item}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}