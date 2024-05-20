import React, { useEffect } from 'react';
import { useState } from 'react';
import { IGame, IStudio } from '../../utils/types/types';
import { useContext } from 'react';
import { Context } from '../../context/Context';

interface IGameProps {
  game: IGame;
}

const Game: React.FC<IGameProps> = ({ game }) => {
  const [studio, setStudio] = useState<IStudio>();
  const context = useContext(Context);

  if (!context) return;

  const { imageUrl, name, studioId } = game;
  const { studios } = context;

  useEffect(() => {
    const studio = [...studios].find(studio => studio.id === studioId);
    setStudio(studio);
  }, [studios, game.studioId]);

  return (
    <div className="h-[280px] w-[300px] bg-secondaryBG rounded-lg pb-4">
      <div className="w-full h-[200px]">
        <img src={imageUrl} alt={name} width="300" height="300" className="object-cover h-full rounded-t-lg" />
      </div>
      <div className="px-4 py-4">
        <h2>{name}</h2>
        <p className="text-gray-400">{studio?.name}</p>
      </div>
    </div>
  );
};

export default Game;
