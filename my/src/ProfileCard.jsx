function ProfileCard({ name, age, role }) {
  return (
    <div
      className="profile-card"
      style={{ backgroundColor: "#eb9595" }}
    >
      <img src="disha.jpeg" alt="User Profile" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p className="bio">{role}</p>
    </div>
  );
}

export default ProfileCard;