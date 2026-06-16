import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicAsset from "@/assets/background-music.mp3.asset.json";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(musicAsset.url);
    audio.loop = true;
    audio.volume = 0.12;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
        setStarted(true);
      } catch {
        // Autoplay blocked — wait for first user interaction
        const onInteract = async () => {
          try {
            await audio.play();
            setStarted(true);
            setMuted(false);
            audio.muted = false;
          } catch {}
          window.removeEventListener("pointerdown", onInteract);
          window.removeEventListener("keydown", onInteract);
        };
        window.addEventListener("pointerdown", onInteract, { once: true });
        window.addEventListener("keydown", onInteract, { once: true });
      }
    };

    // Start muted to satisfy autoplay policy, then unmute on interaction
    audio.muted = true;
    tryPlay();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    if (!next && audio.paused) audio.play().catch(() => {});
    setMuted(next);
    setStarted(true);
  };

  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform animate-fade-in"
    >
      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      {!started && (
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-300 rounded-full animate-ping" />
      )}
    </button>
  );
};
