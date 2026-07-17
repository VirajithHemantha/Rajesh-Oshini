import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

import { EnvelopeOpening } from './components/EnvelopeOpening';
import { InvitationContent } from './components/InvitationContent';
import { EnvelopeOpening as SinhalaEnvelopeOpening } from './components/sinhala/EnvelopeOpening';
import { InvitationContent as SinhalaInvitationContent } from './components/sinhala/InvitationContent';
import { Admin } from './components/Admin';
import { INVITATION_IMAGE_URLS, preloadImages } from './utils/preloadImages';

const isAdminRoute = () => window.location.pathname.startsWith('/admin');
const isSinhalaRoute = () => window.location.pathname.startsWith('/sinhala');

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const params = new URLSearchParams(window.location.search);
  const titleParam = params.get('title') || '';
  const nameParam = params.get('name') || '';
  const eventParam = params.get('event') || 'both';

  const fullInviteeName = `${titleParam} ${nameParam}`.trim();

  let eventLabel = 'Our Wedding Celebration';

  const weddingDate = new Date('2026-08-26T09:30:00');

  useEffect(() => {
    if (isAdminRoute()) return;

    let cancelled = false;

    preloadImages([...INVITATION_IMAGE_URLS]).then(() => {
      if (!cancelled) setAssetsReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Dreams Come True - Dylan Carwyn Romantic Wedding Song 2025 (Lyrics) - Dazzling Tunes (128k).mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.preload = 'none';
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMusicStart = useCallback(() => {
    setIsMusicPlaying(true);
    const audio = ensureAudio();
    audio.play().catch(console.error);
  }, [ensureAudio]);

  const toggleMusic = useCallback(() => {
    const audio = ensureAudio();
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsMusicPlaying((playing) => !playing);
  }, [ensureAudio, isMusicPlaying]);

  const handleEnvelopeComplete = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      setShowInvitation(true);
    });
  }, []);

  if (isAdminRoute()) {
    return (
      <>
        <Toaster position="top-center" />
        <Admin />
      </>
    );
  }

  if (isSinhalaRoute()) {
    return (
      <>
        <Toaster position="top-center" />

        <SinhalaInvitationContent
          active={showInvitation}
          eventParam={eventParam}
          fullInviteeName={fullInviteeName}
          eventLabel={eventLabel}
          weddingDate={weddingDate}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={toggleMusic}
        />

        <AnimatePresence mode="wait">
          {!showInvitation && (
            <SinhalaEnvelopeOpening
              key="envelope"
              onComplete={handleEnvelopeComplete}
              onMusicStart={handleMusicStart}
              event={eventParam}
              readyToTransition={assetsReady}
            />
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />

      <InvitationContent
        active={showInvitation}
        eventParam={eventParam}
        fullInviteeName={fullInviteeName}
        eventLabel={eventLabel}
        weddingDate={weddingDate}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />

      <AnimatePresence mode="wait">
        {!showInvitation && (
          <EnvelopeOpening
            key="envelope"
            onComplete={handleEnvelopeComplete}
            onMusicStart={handleMusicStart}
            event={eventParam}
            readyToTransition={assetsReady}
          />
        )}
      </AnimatePresence>
    </>
  );
}
