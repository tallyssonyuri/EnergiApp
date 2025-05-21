import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import ApplianceRegistration from './pages/ApplianceRegistration';
import ConsumptionRegistration from './pages/ConsumptionRegistration';
import Menu from './pages/Menu';
import Alerts from './pages/Alerts';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/appliance" element={<ApplianceRegistration />} />
        <Route path="/register-consumption" element={<ConsumptionRegistration />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/dashboards" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;