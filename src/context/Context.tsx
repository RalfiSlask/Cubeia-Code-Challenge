import { createContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { IModalStates, ICategory, IStudio, IGame, ICasinoData } from '../utils/types/types';
import axios from 'axios';

interface IContext {
  activeCategory: number | null;
  modalStates: IModalStates;
  selectedCurrency: string;
  numberOfGamesVisible: number;
  filteredGames: IGame[];
  categories: ICategory[];
  studios: IStudio[];
  stagedSelectedStudios: number[];
  toggleModalOnClick: (modalKey: keyof IModalStates) => void;
  handleClickOnCurrency: (currency: string) => void;
  handleClickOnSelectStudio: (studioId: number) => void;
  handleClickOnCategory: (categoryId: number | null) => void;
  handleClickOnLoadMoreGames: (load: boolean) => void;
  handleClickOnSelectButton: () => void;
  handleClickOnResetStudios: () => void;
}

interface IChildren {
  children: ReactNode;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
  const [studios, setStudios] = useState<IStudio[]>([]);
  const [modalStates, setModalStates] = useState<IModalStates>({ currencies: false, studios: false });
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [stagedSelectedStudios, setStagedSelectedStudios] = useState<number[]>([]);
  const [games, setGames] = useState<IGame[]>([]);
  const [selectedStudios, setSelectedStudios] = useState<number[]>([]);
  const [numberOfGamesVisible, setNumberOfGamesVisible] = useState(50);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCasinoData = async () => {
      try {
        const response = await axios.get<ICasinoData>(apiUrl);
        const { games, studios, tags } = response.data;
        setGames(games);
        setStudios(studios); // Could sort by studio names here with localCompare();
        const categoryAll: ICategory = { id: null, name: 'All', display: true, nameId: '', translations: {} };
        const filteredCategories = tags.filter(
          tag => tag.id !== null && games.some(game => game.gameTags.includes(tag.id as number))
        );
        setCategories([categoryAll, ...filteredCategories]);
      } catch (error) {
        console.error('Error fetching casino data', error);
      }
    };

    fetchCasinoData();
  }, []);

  const filteredGames = useMemo(() => {
    return [...games].filter(game => {
      const categorySelected = activeCategory === null || game.gameTags.includes(activeCategory);
      const selectedStudiosSelected = selectedStudios.length === 0 || selectedStudios.includes(game.studioId);

      const studio = studios.find(studio => studio.id === game.studioId);
      const currencyIsAllowed = studio ? !studio?.blockedCurrencies?.split(',').includes(selectedCurrency) : true;

      return categorySelected && selectedStudiosSelected && currencyIsAllowed;
    });
  }, [activeCategory, selectedStudios, selectedCurrency, studios]);

  const toggleModalOnClick = (modalKey: keyof IModalStates) => {
    setModalStates(prev => ({ ...prev, [modalKey]: !prev[modalKey] }));
  };

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

  const handleClickOnCategory = (categoryId: number | null) => {
    setActiveCategory(categoryId);
  };

  const handleClickOnCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setModalStates(prev => ({ ...prev, currencies: false }));
  };

  const handleClickOnResetStudios = () => {
    setStagedSelectedStudios([]);
  };

  const handleClickOnLoadMoreGames = (load: boolean) => {
    if (load) {
      setNumberOfGamesVisible(prev => prev + 50);
    } else {
      setNumberOfGamesVisible(50);
    }
  };

  const contextValue = {
    modalStates: modalStates,
    selectedCurrency: selectedCurrency,
    categories: categories,
    filteredGames: filteredGames,
    stagedSelectedStudios: stagedSelectedStudios,
    activeCategory: activeCategory,
    studios: studios,
    numberOfGamesVisible: numberOfGamesVisible,
    toggleModalOnClick: toggleModalOnClick,
    handleClickOnCurrency: handleClickOnCurrency,
    handleClickOnCategory: handleClickOnCategory,
    handleClickOnSelectButton: handleClickOnSelectButton,
    handleClickOnSelectStudio: handleClickOnSelectStudio,
    handleClickOnResetStudios: handleClickOnResetStudios,
    handleClickOnLoadMoreGames: handleClickOnLoadMoreGames,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
