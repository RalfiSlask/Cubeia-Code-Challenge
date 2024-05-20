import { createContext, ReactNode, useState } from 'react';
import { IModalStates } from '../utils/types/types';

import axios from 'axios';

interface IContext {
  modalStates: IModalStates;
  selectedCurrency: string;
  toggleModalOnClick: (modalKey: keyof IModalStates) => void;
  handleClickOnCurrency: (currency: string) => void;
}

interface IChildren {
  children: ReactNode;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
  const [modalStates, setModalStates] = useState<IModalStates>({ currencies: false, studios: false });
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
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

  const handleClickOnCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setModalStates(prev => ({ ...prev, currencies: false }));
  };

  const contextValue = {
    modalStates: modalStates,
    selectedCurrency: selectedCurrency,
    toggleModalOnClick: toggleModalOnClick,
    handleClickOnCurrency: handleClickOnCurrency,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
