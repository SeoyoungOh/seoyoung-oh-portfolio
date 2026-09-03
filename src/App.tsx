import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { PublicationDetail } from './pages/PublicationDetail';
import { PhDHubPage } from './pages/PhDHubPage';
import { ResearchDetailPage } from './pages/ResearchDetailPage';
import { PhDPresentationPage } from './pages/PhDPresentationPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phd" element={<PhDHubPage />} />
        <Route path="/phd/presentation" element={<PhDPresentationPage />} />
        <Route path="/phd/research/:slug" element={<ResearchDetailPage />} />
        <Route path="/work/:slug" element={<CaseStudyDetail />} />
        <Route path="/publications/:slug" element={<PublicationDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
