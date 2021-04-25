import React, { useEffect, useState } from 'react';
import './ProfileCardContainer.css';
import Header from '../Components/Header';
import ProfileCard from '../Components/ProfileCard'

const ProfileCardContainer = () => {

    const [userDetail, setUser] = useState("");

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = function() {
      const randomUser = fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      // .then((details) => {setUser(details.results[0].name.first)})
      .then((details) => {setUser(details.results[0])})
      console.log(randomUser);
    }


    return (
        <div>
            <Header />
            <ProfileCard userDetail={userDetail} />
            <button onClick={fetchUser}>Next User</button>
        </div>
    )
}
export default ProfileCardContainer;