import '../Styles/Profile.css';

const Profile = () => {
    return (
      <main className="profile-background">
        <h2>Dein Profil</h2>
        <div>
          <h3>Likes</h3>
          <p>Hier siehst du deine gelikten Szenarien.</p>
        </div>
        <div>
          <h3>Favoriten</h3>
          <p>Hier siehst du deine gespeicherten Szenarien.</p>
        </div>
      </main>
    );
  };
  
  export default Profile;