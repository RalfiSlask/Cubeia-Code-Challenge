import { useContext } from 'react';
import { Context } from '../../context/Context';
import { currencies } from '../../data/currencies';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';
import { v4 as uuidv4 } from 'uuid';

const Currencies = () => {
  const context = useContext(Context);

  if (!context) return;

  const { modalStates, selectedCurrency, toggleModalOnClick, handleClickOnCurrency } = context;

  return (
    <div className="bg-selectorBG right-10 relative w-[125px] px-4 py-2 border-b border-solid border-primaryBG z-50 rounded-sm">
      <div onClick={() => toggleModalOnClick('currencies')}>
        <h2>User</h2>
        <div className="flex items-center gap-2 cursor-pointer ">
          <p className="text-special">0</p>
          <p>{selectedCurrency}</p>
          <img
            src={arrowDownIcon}
            alt="arrow down icon"
            width="32"
            height="32"
            className={`${modalStates.currencies ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      {modalStates.currencies && (
        <div className="bg-selectorBG absolute w-full left-0 pl-4 py-4 flex flex-col items-start gap-2 z-0">
          {currencies.map(currency => (
            <button onClick={() => handleClickOnCurrency(currency)} className="hover:text-special" key={uuidv4()}>
              {currency}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Currencies;
