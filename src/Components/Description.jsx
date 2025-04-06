//import React from 'react'

// const Description = () => {
//   return (
//     <div>
//       description ,this is a description section
//     </div>
//   );
// };

// export default Description; // ✅ This is a default export

import React, { useState } from 'react';

const Description = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="mt-4 space-y-4">
            <p className="text-lg">
              UNO is a fast-paced, color-matching card game that's easy to learn but challenging to master! The goal is simple: be the first player to get rid of all your cards.
            </p>
            <p>
              Originally created in 1971, UNO has become one of the world's most popular family card games with countless variations and millions of players worldwide.
            </p>
            <div className="my-6 bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="font-bold">GAME OBJECTIVE</p>
              <p>Be the first player to score 500 points by getting rid of all your cards before your opponents do!</p>
            </div>
          </div>
        );
      case 'setup':
        return (
          <div className="mt-4 space-y-4">
            <p className="text-lg">
              Each player starts with 7 cards. The remaining cards form the draw pile, and the top card is flipped to start the discard pile.
            </p>
            <div className="my-4">
              <p className="font-bold mb-2">THE DECK CONTAINS:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-semibold">19 Blue cards</span> - 0-9 (each number appears once, except 0)</li>
                <li><span className="font-semibold">19 Green cards</span> - 0-9 (each number appears once, except 0)</li>
                <li><span className="font-semibold">19 Red cards</span> - 0-9 (each number appears once, except 0)</li>
                <li><span className="font-semibold">19 Yellow cards</span> - 0-9 (each number appears once, except 0)</li>
                <li><span className="font-semibold">8 Draw Two cards</span> - 2 each in blue, green, red, and yellow</li>
                <li><span className="font-semibold">8 Reverse cards</span> - 2 each in blue, green, red, and yellow</li>
                <li><span className="font-semibold">8 Skip cards</span> - 2 each in blue, green, red, and yellow</li>
                <li><span className="font-semibold">4 Wild cards</span></li>
                <li><span className="font-semibold">4 Wild Draw Four cards</span></li>
              </ul>
            </div>
          </div>
        );
      case 'rules':
        return (
          <div className="mt-4 space-y-4">
            <p className="text-lg">
              On your turn, you must match the top card on the discard pile by either number, color, or symbol.
            </p>
            <div className="my-4 space-y-6">
              <div>
                <p className="font-bold text-lg mb-2">BASIC PLAY:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Match the top card on the discard pile with a card from your hand by either color, number, or action</li>
                  <li>If you can't play a card, you must draw from the pile</li>
                  <li>If the drawn card can be played, you may play it immediately</li>
                  <li>If not, your turn ends</li>
                </ol>
              </div>
              
              <div>
                <p className="font-bold text-lg mb-2">SPECIAL CARDS:</p>
                <ul className="space-y-3">
                  <li className="bg-blue-100 p-3 rounded-md">
                    <span className="font-bold">Draw Two Card:</span> Next player draws 2 cards and skips their turn
                  </li>
                  <li className="bg-green-100 p-3 rounded-md">
                    <span className="font-bold">Reverse Card:</span> Reverses direction of play
                  </li>
                  <li className="bg-red-100 p-3 rounded-md">
                    <span className="font-bold">Skip Card:</span> Next player loses their turn
                  </li>
                  <li className="bg-purple-100 p-3 rounded-md">
                    <span className="font-bold">Wild Card:</span> Play this card to change the current color
                  </li>
                  <li className="bg-purple-200 p-3 rounded-md">
                    <span className="font-bold">Wild Draw Four:</span> Changes the color AND next player draws 4 cards and loses their turn
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500 my-4">
              <p className="font-bold">IMPORTANT! Don't forget to shout "UNO!" when you have only one card left!</p>
              <p>If you forget and another player catches you before the next player starts their turn, you must draw 2 penalty cards.</p>
            </div>
          </div>
        );
      case 'scoring':
        return (
          <div className="mt-4 space-y-4">
            <p className="text-lg">
              When a player goes out, they receive points for all the cards left in their opponents' hands.
            </p>
            <div className="my-4">
              <p className="font-bold mb-2">POINT VALUES:</p>
              <ul className="space-y-2">
                <li>Number cards (0-9): Face value</li>
                <li>Draw Two: 20 points</li>
                <li>Reverse: 20 points</li>
                <li>Skip: 20 points</li>
                <li>Wild: 50 points</li>
                <li>Wild Draw Four: 50 points</li>
              </ul>
            </div>
            <p>
              The first player to reach 500 points wins the game!
            </p>
          </div>
        );
      case 'strategy':
        return (
          <div className="mt-4 space-y-4">
            <p className="text-lg">
              UNO is not just luck - master these strategies to dominate your opponents!
            </p>
            <div className="my-4 space-y-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="font-bold">1. Card Counting</p>
                <p>Keep track of which colors and special cards have been played. This helps you predict what cards your opponents might have.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <p className="font-bold">2. Save Special Cards</p>
                <p>Hold onto your action cards and Wild cards for strategic moments, especially when you suspect an opponent is about to call "UNO!"</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md">
                <p className="font-bold">3. Color Management</p>
                <p>Try to maintain cards of multiple colors so you can respond to color changes. If you have mostly one color, you're vulnerable.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-md">
                <p className="font-bold">4. Watch Your Opponents</p>
                <p>Pay attention to which cards players are choosing to play. If they consistently avoid a certain color, they likely don't have cards of that color.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-2 text-red-600">UNO Game Guide</h1>
      <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-6 rounded-full"></div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('overview')} 
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'overview' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Game Overview
        </button>
        <button 
          onClick={() => setActiveTab('setup')} 
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'setup' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Setup & Cards
        </button>
        <button 
          onClick={() => setActiveTab('rules')} 
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'rules' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          How To Play
        </button>
        <button 
          onClick={() => setActiveTab('scoring')} 
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'scoring' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
        >
          Scoring
        </button>
        <button 
          onClick={() => setActiveTab('strategy')} 
          className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'strategy' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
        >
          Pro Tips
        </button>
      </div>
      
      {renderContent()}
      
      <div className="mt-10 text-center">
        <div className="inline-block bg-black text-white px-6 py-3 rounded-lg font-bold text-xl transform hover:scale-105 transition-transform duration-200">
          Let's Play UNO!
        </div>
      </div>
    </div>
  );
};

export default Description;
