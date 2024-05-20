import { useContext } from 'react';
import { Context } from '../../context/Context';

const ShowGamesButton = () => {
  const context = useContext(Context);

  if (!context) return;

  const { handleClickOnLoadMoreGames } = context;

  return (
    <div>
      <button onClick={() => handleClickOnLoadMoreGames(false)} className="py-4 px-8 primaryButton">
        Hide
      </button>
      <button
        className="py-4 px-8 primaryButton"
        onClick={() => {
          handleClickOnLoadMoreGames(true);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default ShowGamesButton;
