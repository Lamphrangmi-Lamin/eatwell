import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SignupPage from './components/pages/SignupPage';
import RecipeDetail from './components/RecipeDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
    </div>
  )
}

export default App
