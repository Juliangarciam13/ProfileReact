import { useState } from "react";

const Phone = () => {

    const [phone, setPhone] = useState('')

    const handleChange = (event) => {
        const phoneNumber = event.target.value;
        if (!isNaN(phoneNumber)) {
            setPhone(phoneNumber)
        }
    }


        return (

            <div>
                <label>
                    Phone
                </label>
                <input value={phone} onChange={handleChange}>
                </input>
            </div>

        )
    }

export default Phone;