import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div>
      <nav className='flex items-center justify-center gap-8 p-4'>
          <Link to="/" className='text-[#FFBA08] hover:text-[#F48C06] transition-colors duration-300 text-lg font-semibold'>Home</Link>
          <Link to="/signup" className='text-[#FFBA08] hover:text-[#F48C06] transition-colors duration-300 text-lg font-semibold'>Sign Up</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App
