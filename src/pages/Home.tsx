import { useState } from 'react';
import './Home.css'
import { motion } from 'framer-motion';

export default function Home() {

  const [translateX, setTranslateX] = useState(0);
  const [startPositionX, setStartPositionX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Função para capturar o início do clique/arraste
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPositionX(event.clientX);
  };

  // Função para mover o botão de acordo com o arraste
  const handleMouseMove = (event) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      const newTranslateX = currentPosition - startPositionX
      setTranslateX(newTranslateX);
    }
  };

  // Função para parar o movimento do arraste e decidir se atualiza a página
  const handleMouseUp = () => {
    setIsDragging(false);
    if (translateX > 100) {
     alert('soltou')
    }
    setTranslateX(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
     <div className="cardsWrapper"
     onMouseDown={handleMouseDown}
     onMouseMove={handleMouseMove}
     onMouseUp={handleMouseUp}>
      <motion.div className="card"
      animate={{
        rotate: translateX / 10,
        x:translateX,
        transition:{duration:.1}
        }}>
          <h2>Bem-vindo à Home!</h2>
          <p>StartPositionX: {startPositionX}</p>
          <p>TranslateX: {translateX}</p>
        </motion.div>
     </div>
    </div>
  );
}
