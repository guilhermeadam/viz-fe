import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>Bem-vindo(a) ao SEI</h1>} />
      <Route path='/notification' element={<h1>Notificações</h1>} />

      <Route path='/analyzer' element={<h1>Analyzer</h1>} />
      <Route path='/dashboard' element={<h1>Dashboard</h1>} />
      <Route path='/analytics' element={<h1>Analytics</h1>} />
      <Route path='/documentation' element={<h1>Documentação</h1>} />

      <Route path='/validation' element={<h1>Validação</h1>} />
      <Route path='/liberation' element={<h1>Liberação</h1>} />

      <Route path='/management' element={<h1>Gestão Pentaho</h1>} />
      <Route path='/load' element={<h1>Cargas SEI</h1>} />
      <Route path='/reprocess' element={<h1>Reprocessamento</h1>} />
      <Route path='/register' element={<h1>Register</h1>} />

    </Routes>
  );
}
