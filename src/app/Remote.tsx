import { Routes, Route } from 'react-router-dom';
import User from './pages/User';

function Remote() {
  return (
    <Routes>
      <Route path='/user/:userId' element={<User />} />
    </Routes>
  );
}

export default Remote;
