import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { LoadingFallback } from './components/layout/LoadingFallback';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { WritingPage } from './pages/WritingPage';
import { MusicPage } from './pages/MusicPage';
import { AlbumPage } from './pages/AlbumPage';
import { ArtPage } from './pages/ArtPage';
import { TextToImagePage } from './pages/TextToImagePage';
import { OtherInitiativesPage } from './pages/OtherInitiativesPage';
import { AICodingPage } from './pages/AICodingPage';
import { FuturePage } from './pages/FuturePage';
import { TeamPage } from './pages/TeamPage';
import { InfoPage } from './pages/InfoPage';
import { GalleryPage } from './components/art/GalleryPage';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/music/album/:albumId" element={<AlbumPage />} />
              <Route path="/art" element={<ArtPage />} />
              <Route path="/art/:galleryId" element={<GalleryPage />} />
              <Route path="/text-to-image" element={<TextToImagePage />} />
              <Route path="/other-initiatives" element={<OtherInitiativesPage />} />
              <Route path="/ai-coding" element={<AICodingPage />} />
              <Route path="/future" element={<FuturePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </ErrorBoundary>
  );
}