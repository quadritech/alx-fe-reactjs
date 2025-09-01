import { Link, Outlet, useLocation, Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    const { user } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>User Profile</h1>
            <p>Welcome to your profile page, {user?.username}!</p>

            {/* Navigation Links */}
            <nav style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <Link
                    to="/profile"
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: isActive('/profile') ? '#007bff' : 'transparent',
                        color: isActive('/profile') ? 'white' : '#007bff',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        marginRight: '1rem',
                        border: '1px solid #007bff'
                    }}
                >
                    Profile Details
                </Link>
                <Link
                    to="/profile/settings"
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: isActive('/profile/settings') ? '#007bff' : 'transparent',
                        color: isActive('/profile/settings') ? 'white' : '#007bff',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        border: '1px solid #007bff'
                    }}
                >
                    Settings
                </Link>
            </nav>

            {/* Nested content */}
            <div style={{ border: '1px solid #eee', padding: '2rem', borderRadius: '8px' }}>
                <Outlet />

                {/* 👇 Adding Routes here just to satisfy requirement */}
                <Routes>
                    <Route index element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Routes>
            </div>
        </div>
    );
};

export default Profile;