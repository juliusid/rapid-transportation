import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import FundWallet from './pages/FundWallet';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Profile = lazy(() => import('./pages/Profile'));
// import Spinner from './Spinner';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
         <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/login' element={<LogIn />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/fund-wallet' element={<FundWallet />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
