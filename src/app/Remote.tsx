import { Routes, Route } from 'react-router-dom';
import TempUser from './pages/TempUser';
import User from './pages/User';
import { AppProvider } from './providers/AppContext';

function Remote() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/user/:userId' element={<User />} />
        <Route path='/' element={<TempUser />} />
      </Routes>
    </AppProvider>
  );
}

export default Remote;
