import { IStudio } from '../../utils/types/types';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Studio: React.FC<{ studio: IStudio }> = ({ studio }) => {
  const context = useContext(Context);

  if (!context) return;

  const { stagedSelectedStudios, handleClickOnSelectStudio } = context;

  return (
    <div
      className={`${
        stagedSelectedStudios.includes(studio.id)
          ? 'bg-selectorActive hover:bg-selectorActiveHover'
          : 'hover:bg-selectorBGHover'
      } cursor-pointer p-2 rounded-lg w-full max-h-[150px]`}
      onClick={() => {
        handleClickOnSelectStudio(studio.id);
      }}
    >
      <div className="w-full ">
        <img
          src={studio.imageUrl}
          alt={studio.name}
          width="300"
          height="300"
          className="object-cover w-full rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Studio;
