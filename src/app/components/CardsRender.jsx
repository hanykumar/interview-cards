'use client';
import React, { useState } from 'react';
import CardsDeck from '../utils/Cards';
import CardItem from './CardItem';

export default function CardsRender() {
  const drawNoOfCards = 5;
  const [availableCard, setAvailable] = useState(CardsDeck);
  const [drawnCards, setDrawnCards] = useState([]);

  const onDrawCards = () => {
    const newCards = availableCard.sort(() => Math.random() - 0.5).slice(0, drawNoOfCards);
    setDrawnCards(prev => [newCards, ...prev]);
    setAvailable(prev => prev.filter(item => !newCards.includes(item)))
  }
  return (
    <div className='cards-container'>
      <div className='draw-card-container'>
        <button className='draw-card' disabled={!availableCard.length} onClick={onDrawCards}>
          {availableCard.length ? 'Draw Cards' : 'No Cards Left'}
        </button>
        <div>
          Cards: {availableCard.length}
        </div>
      </div>

      <div className='cards-render'>
        <div className='cards-wrapper'>
          {
            drawnCards.map((cards, index) => (
              <div key={index} className='card-wrapper'>
                {
                  cards.map(card => (
                    <div key={card.id} >
                      <CardItem card={card} />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
