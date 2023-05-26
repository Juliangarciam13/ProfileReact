import { useState } from "react";
import './Profile.css';

const Profile = ({ profileImg = require('./Media/Profile2.png') }) => {

    const [fastName, setFastName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactsNumber, setContactsNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFastName = (event) => {
        const fastNameData = event.target.value;
        if (isNaN(fastNameData) || fastNameData === '') {
            setFastName(fastNameData)
        }
    }

    const handleChangeLastName = (event) => {
        const lastNameData = event.target.value;
        if (isNaN(lastNameData) || lastNameData === '') {
            setLastName(lastNameData)
        }
    }

    const handleChangeEmail = (event) => {
        const emailData = event.target.value;
        setEmail(emailData)
    }

    const handleChangeContactsNumber = (event) => {
        const phoneNumber = event.target.value;
        if (!isNaN(phoneNumber)) {
            setContactsNumber(phoneNumber)
        }
    }

    const handleChangeAddress = (event) => {
        const addressData = event.target.value;
        setAddress(addressData)
    }

    const handleChangeCity = (event) => {
        const cityData = event.target.value;
        if (isNaN(cityData) || cityData === '') {
            setCity(cityData)
        }
    }

    const handleChangeState = (event) => {
        const stateData = event.target.value;
        if (isNaN(stateData) || stateData === '') {
            setState(stateData)
        }
    }

    const handleChangeZipCode = (event) => {
        const zipCodeData = event.target.value;
        if (!isNaN(zipCodeData)) {
            setZipCode(zipCodeData)
        }
    }

    const handleChangeCountry = (event) => {
        const countryData = event.target.value;
        if (isNaN(countryData) || countryData === '') {
            setCountry(countryData)
        }
    }

    const handleChangePassword = (event) => {
        const passwordData = event.target.value;
        if (passwordData.length >= 6) {
            setPassword(passwordData);
    }
    
    return (
        <div className="containerProfile">
            <div className="headerProfile">
                <h1>Edit Profile</h1>
                <img src={profileImg} style={{ width: '100px', height: '100px' }} />
            </div>
            <form className="formProfile">
                <div className="fastLastName">
                    <label>
                        Fast Name
                        <input value={fastName} onChange={handleChangeFastName}>
                        </input>
                    </label>
                    <label>
                        Last Name
                        <input value={lastName} onChange={handleChangeLastName}>
                        </input>
                    </label>
                </div>
                <div className="email">
                    <label>
                        Email
                    </label>
                    <input type='email' value={email} onChange={handleChangeEmail}>
                    </input>
                </div>
                <div className="contactsNumber">
                    <label>
                        Contacts Number
                    </label>
                    <input value={contactsNumber} onChange={handleChangeContactsNumber}>
                    </input>
                </div>
                <div className="address">
                    <label>
                        Addres
                    </label>
                    <input value={address} onChange={handleChangeAddress}>
                    </input>
                </div>
                <div className="cityState">
                    <label>
                        City
                        <input value={city} onChange={handleChangeCity}>
                        </input>
                    </label>
                    <label>
                        State
                        <input value={state} onChange={handleChangeState}>
                        </input>
                    </label>
                </div>
                <div className="zipCodeCountry">
                    <label>
                        Zip code
                        <input value={zipCode} onChange={handleChangeZipCode}>
                        </input>
                    </label>
                    <label>
                        Country
                        <input value={country} onChange={handleChangeCountry}>
                        </input>
                    </label>
                </div>
                <div className="password">
                    <label>
                        Password
                    </label>
                    <input type="password" value={password} onChange={handleChangePassword}>
                    </input>
                </div>
            </form>
            <button type="submit">Save</button>
        </div>
    )
}

export default Profile;