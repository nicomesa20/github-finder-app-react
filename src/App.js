import { AlertProvider } from './context/alert/AlertContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext';
import About from './pages/About';
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router className="">
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
