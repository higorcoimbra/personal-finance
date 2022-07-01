import { React, useState } from 'react';

export default function NewRecord() {
    const [valueValidationMessage, setValueValidationMessage] = useState();

    const handleChange = (event) => {
        if(event.value < 0) {
            setValueValidationMessage('Value must be greater than or equal to 0.');
        }
    }

    return (
        <>
            <label>
                Value
                <input min={0} type="number" name="value" onChange={handleChange}/>
                <p>{valueValidationMessage}</p>
            </label>
        </>
    )
}