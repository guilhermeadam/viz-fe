import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Notification from '../pages/notification';
import Analyzer from '../pages/analyzer';
import Dashboard from '../pages/dashboard';
import Analytics from '../pages/analytics';
import Documentation from '../pages/documentation';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notification' element={<Notification />} />

      <Route path='/analyzer' element={<Analyzer />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/documentation' element={<Documentation />} />

      <Route path='/validation' element={<h1>Validação</h1>} />
      <Route path='/liberation' element={<h1>Liberação</h1>} />

      <Route path='/management' element={<h1>Gestão Pentaho</h1>} />
      <Route path='/load' element={<h1>Cargas SEI</h1>} />
      <Route path='/reprocess' element={<h1>Reprocessamento</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />

    </Routes>
  );
}
