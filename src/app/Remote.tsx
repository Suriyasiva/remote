import { Routes, Route } from 'react-router-dom';
import TempUser from './pages/TempUser';



function Remote() {
  return (
    <Routes>
      <Route path='/user/:userId' element={<TempUser/>} />
    </Routes>
  );
}

export default Remote;
