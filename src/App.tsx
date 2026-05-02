import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainNav from './components/layout/MainNav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';
import SubscribePage from './pages/SubscribePage';
import GamesPage from './pages/games/GamesPage';
import { fetchClubLanding } from './utils/helpers';
import { MOCK_LANDING_CONTENT } from './constants/content';
import type { ClubLandingContent } from './types';

export default function App() {
  const [landingContent, setLandingContent] = useState<ClubLandingContent>(MOCK_LANDING_CONTENT);
  const [isLoadingLanding, setIsLoadingLanding] = useState(true);
  const [landingError, setLandingError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const loadLanding = async () => {
      setIsLoadingLanding(true);
      setLandingError(null);
      try {
        const response = await fetchClubLanding();
        if (!active) return;
        setLandingContent({
          planos: response.planos.filter((p) => p.ativo),
          kitMensal: response.kitMensal,
        });
      } catch (error) {
        if (!active) return;
        setLandingContent(MOCK_LANDING_CONTENT);
        setLandingError(
          error instanceof Error
            ? `${error.message} Exibindo conteúdo de exemplo.`
            : 'Não foi possível carregar a vitrine. Exibindo conteúdo de exemplo.',
        );
      } finally {
        if (active) setIsLoadingLanding(false);
      }
    };
    void loadLanding();
    return () => { active = false; };
  }, []);

  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                planos={landingContent.planos}
                kitMensal={landingContent.kitMensal}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route
            path="/planos"
            element={
              <PlansPage
                planos={landingContent.planos}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route
            path="/jogos"
            element={<GamesPage />}
          />
          <Route
            path="/quero-assinar"
            element={
              <SubscribePage
                planos={landingContent.planos}
                isLoading={isLoadingLanding}
                error={landingError}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
