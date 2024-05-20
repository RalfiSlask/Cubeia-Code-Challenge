import { ICategory } from '../../utils/types/types';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Category: React.FC<{
  category: ICategory;
}> = ({ category }) => {
  const { name, id } = category;

  const context = useContext(Context);

  if (!context) return;

  const { handleClickOnCategory, activeCategory } = context;

  return (
    <div
      onClick={() => {
        handleClickOnCategory(id);
      }}
      className={`${
        activeCategory === id ? 'bg-selectorActive' : 'bg-selectorBG hover:bg-[#4c4368]'
      } py-2 px-4 rounded-lg`}
    >
      {name}
    </div>
  );
};

export default Category;
