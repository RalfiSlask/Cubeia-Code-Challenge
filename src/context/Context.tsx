import { createContext, ReactNode, useState } from 'react';
import { IModalStates, ICategory, IStudio } from '../utils/types/types';
import data from '../data.json';
import axios from 'axios';

interface IContext {
  activeCategory: number | null;
  modalStates: IModalStates;
  selectedCurrency: string;
  categories: ICategory[];
  studios: IStudio[];
  showAllGames: boolean;
  stagedSelectedStudios: number[];
  toggleModalOnClick: (modalKey: keyof IModalStates) => void;
  handleClickOnCurrency: (currency: string) => void;
  handleClickOnSelectStudio: (studioId: number) => void;
  handleClickOnCategory: (categoryId: number | null) => void;
  handleClickOnSelectButton: () => void;
  handleClickOnResetStudios: () => void;
}

interface IChildren {
  children: ReactNode;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
  const [studios, setStudios] = useState<IStudio[]>(data.studios);
  const [modalStates, setModalStates] = useState<IModalStates>({ currencies: false, studios: false });
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [showAllGames, setShowAllGames] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [stagedSelectedStudios, setStagedSelectedStudios] = useState<number[]>([]);
  const [selectedStudios, setSelectedStudios] = useState<number[]>([]);

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

  const handleClickOnSelectStudio = (studioId: number) => {
    setStagedSelectedStudios(prev => {
      const currentIndex = prev.indexOf(studioId);
      if (currentIndex === -1) {
        return [...prev, studioId];
      } else {
        return prev.filter(id => id !== studioId);
      }
    });
  };

  const handleClickOnSelectButton = () => {
    setModalStates(prev => ({ ...prev, studios: false }));
    setSelectedStudios(stagedSelectedStudios);
  };

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

  const handleClickOnResetStudios = () => {
    setStagedSelectedStudios([]);
  };

  const contextValue = {
    modalStates: modalStates,
    selectedCurrency: selectedCurrency,
    categories: categories,
    stagedSelectedStudios: stagedSelectedStudios,
    showAllGames: showAllGames,
    activeCategory: activeCategory,
    studios: studios,
    toggleModalOnClick: toggleModalOnClick,
    handleClickOnCurrency: handleClickOnCurrency,
    handleClickOnCategory: handleClickOnCategory,
    handleClickOnSelectButton: handleClickOnSelectButton,
    handleClickOnSelectStudio: handleClickOnSelectStudio,
    handleClickOnResetStudios: handleClickOnResetStudios,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
