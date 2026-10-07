import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ForgeSystemPage from './pages/ForgeSystemPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ForgeSystemPage />} />
        <Route path="/forge-system" element={<ForgeSystemPage />} />
        <Route path="/expertise/forge-system" element={<ForgeSystemPage />} />
        {/* Fallback to ForgeSystemPage */}
        <Route path="*" element={<Navigate to="/forge-system" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
