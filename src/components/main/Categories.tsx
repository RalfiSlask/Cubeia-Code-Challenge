import Category from './Category';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';

const Categories = () => {
  const context = useContext(Context);

  if (!context) return;

  const { categories } = context;

  return (
    <div className="flex items-center gap-6 cursor-pointer flex-wrap max-w-[1100px]">
      {categories.map(tag => {
        return <Category key={uuidv4()} category={tag} />;
      })}
    </div>
  );
};

export default Categories;
