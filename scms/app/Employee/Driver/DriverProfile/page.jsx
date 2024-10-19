import "../../styles/DriverProfile.css";

const Profile = () => {
  const user = {
    driverName: 'Deepthi Damruwan',
    email: 'Deepthi123@gmail.com',
    address: '123 Main St, Mavathagama, Kurunagala',
    phoneNumber: '123-456-7890',
    workYears: '6 Month',
    licenseNumber: 'ABC123456',
    imageUrl: 'https://via.placeholder.com/150',
  };

  return (
    <div className="container2">
      <div className="profile-container">
        <img src={user.imageUrl} alt="Profile" className="profile-image" />
        <h2 className="profile-name">{user.driverName}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-address"><strong>Address:</strong> {user.address}</p>
        <p className="profile-phone"><strong>Phone Number:</strong> {user.phoneNumber}</p>
        <p className="profile-work-years"><strong>Work Years:</strong> {user.workYears}</p>
        <p className="profile-license-number"><strong>License Number:</strong> {user.licenseNumber}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
