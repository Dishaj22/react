function ProfileCard() {
  return (
    <div
      className="profile-card"
      style={{ backgroundColor: "#eb9595" }}
    >
      <img src="disha.jpeg" alt="User Profile" />
      <h2>Disha Jaiswal</h2>
      <p className="bio">Software Developer</p>
    </div>
  );
}

export default ProfileCard;