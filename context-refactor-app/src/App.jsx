import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

// Dashboard doesn't need user props anymore!
function Dashboard() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Dashboard</h2>
      <Sidebar />
    </div>
  );
}

// Sidebar doesn't need user props anymore either!
function Sidebar() {
  return (
    <div style={{ margin: '10px', padding: '10px', background: '#f0f0f0', color: '#333' }}>
      <h3>Sidebar</h3>
      <UserProfile />
    </div>
  );
}

function App() {
  return (
    // Wrapping the top level with our Provider
    <UserProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>React Context Assignment</h1>
        <Dashboard />
      </div>
    </UserProvider>
  );
}

export default App;