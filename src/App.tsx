import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Home, About, Dashboard, NotFound } from '@/pages';
import { ROUTES } from '@/constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
