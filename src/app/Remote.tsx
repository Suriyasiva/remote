import { Routes, Route } from 'react-router-dom';
import TempUser from './pages/TempUser';
import User from './pages/User';



function Remote() {
  return (
    <Routes>
      <Route path='/user/:userId' element={<User/>} />
      <Route path='/' element={<TempUser/>} />
    </Routes>
  );
}

export default Remote;
