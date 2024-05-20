import { useContext } from 'react';
import { Context } from '../../context/Context';

const ShowGamesButton = () => {
  const context = useContext(Context);

  if (!context) return;

  const { showAllGames, toggleShowAllGamesOnClick } = context;

  return (
    <div>
      <button
        className="py-4 px-8 primary-button"
        onClick={() => {
          toggleShowAllGamesOnClick(showAllGames ? false : true);
        }}
      >
        {showAllGames ? 'Hide' : 'Show All'}
      </button>
    </div>
  );
};

export default ShowGamesButton;
