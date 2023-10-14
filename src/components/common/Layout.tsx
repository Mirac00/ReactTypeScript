import React from 'react';
import Navbar from './navbar'; // Import the Navbar component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ background: '#f5f5f5', padding: '10px 0', marginBottom: '20px' }}>
        <Navbar /> {/* Include the Navbar component here */}
      </header>
      <main style={{ flex: '1', padding: '0 20px' }}>
        {children}
      </main>
      <footer style={{ background: '#f5f5f5', padding: '10px 0', marginTop: '20px' }}>
        <p style={{ margin: '0', padding: '0 20px' }}>Stopka</p>
      </footer>
    </div>
  );
}

export default Layout;
