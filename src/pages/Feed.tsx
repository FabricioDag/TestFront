import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Publication } from '../components/Publication';

export default function Feed() {
  const API_URL = 'https://apirandompost.onrender.com/api/posts';

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [translateY, setTranslateY] = useState(0);
  const [startPositionY, setStartPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const maxTranslateY = window.innerHeight * 0.2;

  // Função para buscar novos posts aleatórios
  async function fetchRandomPosts() {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}?limit=10`);
      const data = await response.json();
      setPosts(data.data); // Substitui os posts anteriores por novos aleatórios
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
    } finally {
      setIsLoading(false);
    }
  }

  // Carregar os primeiros posts quando a página iniciar
  useEffect(() => {
    fetchRandomPosts();
  }, []);

  // Função para capturar o início do clique/arraste
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPositionY(event.clientY);
  };

  // Função para mover o botão de acordo com o arraste
  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientY;
      const newTranslateY = Math.min(
        maxTranslateY,
        Math.max(0, currentPosition - startPositionY)
      );
      setTranslateY(newTranslateY);
    }
  };

  // Função para parar o movimento do arraste e decidir se atualiza a página
  const handleMouseUp = () => {
    setIsDragging(false);
    if (translateY > 100) {
      fetchRandomPosts(); // Pega novos posts aleatórios ao arrastar para baixo
    }
    setTranslateY(0);
  };

  return (
    <div
      style={{ padding: '20px', position: 'relative', userSelect: 'none' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h2 style={{ textAlign: 'center' }}>Feed</h2>

      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          backgroundColor: '#FFA718',
          color: 'white',
          borderRadius: '50%',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: translateY / maxTranslateY,
          y: translateY,
          rotate: (translateY / maxTranslateY) * 360,
        }}
      >
        <p>↓</p>
      </motion.div>

      {posts.map((post) => (
        <Publication key={post.id} post={post} />
      ))}

      {isLoading && <p>Carregando...</p>}
    </div>
  );
}
