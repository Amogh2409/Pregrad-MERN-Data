import React from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { id } = useParams();

    return (
        <div>
            <h1>User Profile</h1>
            <p>Viewing profile of user with ID: {id}</p>
        </div>
    );
}
