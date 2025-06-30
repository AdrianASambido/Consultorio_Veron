import React, { useState } from 'react';
import styled from 'styled-components';

// Importa todos los videos de la carpeta videos
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,ogg}', { eager: true });
const videos = Object.keys(videoModules).map(path => ({
  src: path.replace('/public', ''),
  type: `video/${path.split('.').pop()}`
}));

const VideoThumb = styled.video`
  width: 120px;
  height: 80px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #1a3c5a;
`;

const VideoPlaceholder = styled.div`
  width: 120px;
  height: 80px;
  margin: 10px 0;
  border-radius: 8px;
  border: 2px solid #1a3c5a;
  background: #e0e0e0;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalVideo = styled.video`
  width: 20vw;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  background: #fff;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-width: none;
    border-radius: 0;
  }
`;

const ModalPlaceholder = styled.div`
  width: 20vw;
  max-width: 400px;
  height: 200px;
  border-radius: 12px;
  background: #e0e0e0;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    max-width: none;
    border-radius: 0;
  }
`;

const VideoPreview = () => {
  const [modal, setModal] = useState(null);
  const [error, setError] = useState(Array(videos.length).fill(false));

  const openModal = idx => setModal(idx);
  const closeModal = () => setModal(null);
  const handleError = idx => {
    setError(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  if (videos.length === 0) {
    return <VideoPlaceholder style={{ width: '100%' }}>Sin videos</VideoPlaceholder>;
  }

  return (
    <div>
      {videos.map((video, idx) =>
        error[idx] ? (
          <VideoPlaceholder key={video.src}>
            Video no disponible
          </VideoPlaceholder>
        ) : (
          <VideoThumb
            key={video.src}
            src={video.src}
            type={video.type}
            muted
            loop
            preload="metadata"
            onMouseOver={e => e.target.play()}
            onMouseOut={e => e.target.pause()}
            onClick={() => openModal(idx)}
            onError={() => handleError(idx)}
          />
        )
      )}
      {modal !== null && (
        <ModalOverlay onClick={closeModal}>
          {error[modal] ? (
            <ModalPlaceholder>Video no disponible</ModalPlaceholder>
          ) : (
            <ModalVideo
              src={videos[modal].src}
              type={videos[modal].type}
              autoPlay
              controls
              onClick={e => e.stopPropagation()}
              onError={() => handleError(modal)}
            />
          )}
        </ModalOverlay>
      )}
    </div>
  );
};

export default VideoPreview; 