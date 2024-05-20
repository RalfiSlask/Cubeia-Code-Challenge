import { useContext } from 'react';
import { Context } from '../../context/Context';

const ShowGamesButton = () => {
  const context = useContext(Context);

  if (!context) return;

  const { handleClickOnLoadMoreGames } = context;

  return (
    <div className="flex gap-6">
      <button
        onClick={() => handleClickOnLoadMoreGames(false)}
        className="py-4 px-8 bg-selectorBG hover:bg-[#4c4368] rounded-xl text-xl"
      >
        Hide
      </button>
      <button
        className="py-4 px-8 primary-button"
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
