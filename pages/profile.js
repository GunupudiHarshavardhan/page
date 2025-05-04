// pages/profile.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import withAuth from '../utils/withAuth';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
}

export default withAuth(Profile);
