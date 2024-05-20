import { useContext } from 'react';
import { Context } from './context/Context';
import ShowGamesButton from './components/main/ShowGamesButton';
import Game from './components/main/Game';
import Header from './components/header/Header';
import PickStudios from './components/main/PickStudios';
import Categories from './components/main/Categories';

function App() {
  const context = useContext(Context);

  if (!context) return;

  const { filteredGames, numberOfGamesVisible } = context;

  const visibleGames = filteredGames.slice(0, numberOfGamesVisible);

  return (
    <div className="flex flex-col gap-10 items-center">
      <Header />
      <main className="mt-[200px] flex flex-col gap-10 max-w-[1400px] items-center px-10 pb-20">
        <PickStudios />
        <Categories />
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-wrap justify-center gap-10">
            {visibleGames.map((game, index) => {
              return <Game key={index} game={game} />;
            })}
          </div>
        </div>
        {filteredGames.length > 50 && <ShowGamesButton />}
      </main>
    </div>
  );
}

export default App;
