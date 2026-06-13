import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  // Grab the user object directly from our Context
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: '15px', background: '#fff', border: '1px solid #aaa', borderRadius: '4px' }}>
      <h4>User Profile</h4>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Theme:</strong> {user.themePreference}</p>
    </div>
  );
}

export default UserProfile;