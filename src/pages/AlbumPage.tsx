import { useParams } from 'react-router-dom';
import { albums } from '../data/musicData';
import { NotFound } from '../components/NotFound';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { AlbumHeader } from '../components/music/album/AlbumHeader';
import { TrackList } from '../components/music/album/TrackList';
import { AlbumPlayer } from '../components/music/album/AlbumPlayer';
import { AlbumBackButton } from '../components/music/album/AlbumBackButton';

export function AlbumPage() {
  const { albumId } = useParams();
  const album = albums.find(a => a.id === albumId);
  const { 
    currentTrack,
    isPlaying,
    progress,
    volume,
    playTrack,
    togglePlay,
    seekTo,
    adjustVolume
  } = useMusicPlayer();

  if (!album) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 pt-24 pb-48">
        <AlbumHeader album={album} />
        
        <TrackList
          tracks={album.tracks}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTrackSelect={playTrack}
          onTogglePlay={togglePlay}
        />
      </div>

      {/* Fixed bottom section */}
      <div className="fixed bottom-0 left-0 right-0">
        <AlbumBackButton />
        <AlbumPlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          progress={progress}
          volume={volume}
          onTogglePlay={togglePlay}
          onSeek={seekTo}
          onVolumeChange={adjustVolume}
        />
      </div>
    </div>
  );
}