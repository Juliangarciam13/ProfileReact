const PersonalProfile = () => {
    const data = {
        img: require('./Media/julianrun.jpg'),
        name: 'Julian Garcia',
        description: 'Hello, my name is Julian Garcia and I am 25 years old.'
    }
    
    return (
        <div className="Profile">
                <h1>My Profile</h1>
                <ul>
                    <li><img src={data.img}></img></li>
                    <li>{data.name}</li>
                    <li>{data.description}</li>
                </ul>
        </div>
    )
}

export default PersonalProfile;