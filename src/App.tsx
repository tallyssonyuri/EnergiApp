// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { Container, Row, Col } from 'react-bootstrap';
// import { Header } from './components/Header';
// import { Sidebar } from './components/Sidebar';
// import { Dashboard } from './pages/Dashboard';

// function App() {
//   return (
//     <>
//       <Header />
//       <Container fluid>
//         <Row>
//           <Col md={2} className="p-0"><Sidebar /></Col>
//           <Col md={10}><Dashboard /></Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { ConsumoDetalhe } from './pages/ConsumoDetalhe';
import { Login } from './pages/Login';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0"><Sidebar /></Col>
          <Col md={10} className="p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/consumo" element={<ConsumoDetalhe />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;

