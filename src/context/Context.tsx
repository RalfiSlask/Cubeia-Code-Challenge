import { createContext, ReactNode, useState } from 'react';
import { IModalStates, ICategory } from '../utils/types/types';

import axios from 'axios';

interface IContext {
  activeCategory: number | null;
  modalStates: IModalStates;
  selectedCurrency: string;
  categories: ICategory[];
  showAllGames: boolean;
  toggleModalOnClick: (modalKey: keyof IModalStates) => void;
  handleClickOnCurrency: (currency: string) => void;
  handleClickOnCategory: (categoryId: number | null) => void;
}

interface IChildren {
  children: ReactNode;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
  const [modalStates, setModalStates] = useState<IModalStates>({ currencies: false, studios: false });
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [showAllGames, setShowAllGames] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  /*   useEffect(() => {
    const fetchCasinoData = async () => {
      try {
        const response = await axios.get('https://cubeia-code-tests.s3.eu-west-1.amazonaws.com/lobby.json');
        console.log(response.data);

        setCasinoData(response.data);
      } catch (error) {
        console.error('Error fetching casino data', error);
      }
    };

    fetchCasinoData();
  }, []); */

  const toggleModalOnClick = (modalKey: keyof IModalStates) => {
    setModalStates(prev => ({ ...prev, [modalKey]: !prev[modalKey] }));
  };

  const handleClickOnCategory = (categoryId: number | null) => {
    setActiveCategory(categoryId);
    setShowAllGames(false);
  };

  const handleClickOnCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setModalStates(prev => ({ ...prev, currencies: false }));
  };

  const contextValue = {
    modalStates: modalStates,
    selectedCurrency: selectedCurrency,
    categories: categories,
    showAllGames: showAllGames,
    activeCategory: activeCategory,
    toggleModalOnClick: toggleModalOnClick,
    handleClickOnCurrency: handleClickOnCurrency,
    handleClickOnCategory: handleClickOnCategory,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
