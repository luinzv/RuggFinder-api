import './App.css';
import { HomeForm, RegisterForm, Dashboard } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm/LoginForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />

        <Route 
          path="/home" 
          element={<PrivateRoute element={Dashboard} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
