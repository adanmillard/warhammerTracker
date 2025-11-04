import { useState } from "react";
import { auth } from "../firebase";

export default function Profile() {
    const [user, setUser] = useState('');
    const [aboutMe, setAboutMe] = useState('')

    const saveUserDetails = async () => {
        const token = await auth.currentUser?.getIdToken();

        const userToSend = {
            username: user,
            aboutMe : aboutMe
        }

        await fetch('http://localhost:5000/api/users/update', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(userToSend)
        })
    }

    return(
        <div className="max-w-3xl mx-auto p-6 flex flex-col gap-8">
        <div className="flex justify-around bg-gray-100 p-4 rounded-lg shadow-md">
            <div>
                    <h2>Profile Name</h2>
                    <input value={user} onChange={e => setUser(e.target.value)}/>
                        <p>This is about me</p>
                        <input value={aboutMe} onChange={e => setAboutMe(e.target.value)} />
                    <button onClick={() => saveUserDetails()}>Save</button>
            </div>
            <div>
            <img className="w-50 h-50 rounded-full object-cover" alt="profile image" src="https://assets.warhammer-community.com/miniofmonth-jul28-mini-aulozslx3e.jpg"></img>
            </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-around">
            <div>
                <h3>Profile Stats</h3>
                <p>Join Date</p>
                <p>Member for:</p>
                <p>Total Projects created</p>
                <p>Total Models painted</p>
                <p>In progress</p>
            </div>
            <div>
                <h3>Achievements</h3>
                <p>Badges</p>
                <p>Trophies</p>
                <p>Milestones</p>
            </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-4 items-center">
            <h3>Recent Activity</h3>
            <p>last mini painted</p>
            <img className="mx-auto max-w-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjepOjVMQGmYzp02zj0VgWIyudcpikwg7Zg&s"></img>
        </div>
        </div>
    )
}

{/*
    Backened Todo:
    Profile Name - save to database or browser storage
    About Me - save to database or browser storage
    Profile Image - upload and save to database
    Profile Stats -
        Join Date - timestamp on account creation
        Member for - calculate from join date
        Total Projects created - count from database
        Total Models painted - count from database
        In progress - count from database
    Achievements -
        Badges - make based on milestones
        Milestones - paint X models, complete Y projects
    Recent Activity -
        last mini painted with image - get recent activity from database
    */}

