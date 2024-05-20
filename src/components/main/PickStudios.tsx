import React, { useContext, Suspense } from 'react';
import { Context } from '../../context/Context';
import arrowLogo from '../../assets/icons/filter.svg';
const StudiosModal = React.lazy(() => import('./StudiosModal'));

const PickStudios = () => {
  const context = useContext(Context);

  if (!context) return;

  const { modalStates, toggleModalOnClick } = context;

  return (
    <>
      <div className="bg-secondaryBG flex items-center w-[300px] justify-between py-4 px-4">
        <p className="uppercase text-gray-400">Games By: </p>
        <button
          onClick={() => {
            toggleModalOnClick('studios');
          }}
          className="flex items-center gap-2 w-[100px]"
        >
          <p className="flex w-[150px] flex-wrap gap-4 text-xl">Studios</p>
          <img src={arrowLogo} alt="filter icon" width="24" height="24" />
        </button>
      </div>
      {modalStates.studios && (
        <Suspense fallback={<div>Loading...</div>}>
          <StudiosModal />
        </Suspense>
      )}
    </>
  );
};

export default PickStudios;
