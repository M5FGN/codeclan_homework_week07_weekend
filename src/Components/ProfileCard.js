import React from 'react';
import "./ProfileCard.css"

const ProfileCard = ({userDetail}) => {

return (
    <div className='profilecard'>

        // TODO - need a if statment in here to show 'Loading if the API hasn't loaded yet.
        <img src={userDetail.picture.large}></img>
        <h1>{userDetail.name.first} {userDetail.name.last}</h1>
        <p>{userDetail.location.city}, {userDetail.location.country}</p>
        <p>{userDetail.email}</p>
        <p>{userDetail.phone}</p>
        <p>{userDetail.cell}</p>


    </div>
    )
}

export default ProfileCard;