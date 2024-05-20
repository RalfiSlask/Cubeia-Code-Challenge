import Studio from './Studio';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import closeIcon from '../../assets/icons/close.svg';
import resetIcon from '../../assets/icons/reset.svg';

const StudiosModal = () => {
  const context = useContext(Context);

  if (!context) return;

  const { studios, toggleModalOnClick, handleClickOnSelectButton, handleClickOnResetStudios } = context;

  return (
    <div className="flex flex-col fixed top-40 w-[300px] rounded-lg h-[600px] bg-selectorBG">
      <div className="flex-between border-b px-4 border-solid border-white h-[100px]">
        <button
          onClick={() => {
            toggleModalOnClick('studios');
          }}
        >
          <img src={closeIcon} alt="close icon" width="32" height="32" />
        </button>
        <button onClick={handleClickOnResetStudios}>
          <img src={resetIcon} alt="reset icon" width="32" height="32" />
        </button>
      </div>

      <div className="flex-col-center overflow-y-auto h-full py-4 px-6 gap-4">
        {studios.map((studio, index) => {
          return <Studio key={index} studio={studio} />;
        })}
      </div>
      <div className="border-t border-solid border-white h-[100px] flex-center">
        <button onClick={handleClickOnSelectButton} className="px-6 py-2 text-xl primary-button">
          Select
        </button>
      </div>
    </div>
  );
};

export default StudiosModal;
