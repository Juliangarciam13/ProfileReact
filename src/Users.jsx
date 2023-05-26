import React, { useState } from "react";
import usersData from "./usersData";

const Users = () => {
    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    const handleButtonClick = () => {
        const nextUserIndex = (currentUserIndex + 1) % usersData.length;

        setCurrentUserIndex(nextUserIndex);
    };

    const currentUser = usersData[currentUserIndex];

    return (
        <div>
            <button onClick={handleButtonClick}>Show Next User</button>
            <div className="Card">
                <ul>
                    <li>{currentUser.name}</li>
                    <li>{currentUser.age}</li>
                    <li>{currentUser.email}</li>
                </ul>
            </div>
        </div>
    );
};

export default Users;