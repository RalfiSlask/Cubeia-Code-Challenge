import Category from './Category';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Categories = () => {
  const context = useContext(Context);

  if (!context) return;

  const { categories } = context;

  return (
    <div className="flex items-center gap-6 cursor-pointer flex-wrap max-w-[1100px]">
      {categories.map((tag, index) => {
        return <Category key={index} category={tag} />;
      })}
    </div>
  );
};

export default Categories;
