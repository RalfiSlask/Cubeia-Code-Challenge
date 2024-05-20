import { createContext, ReactNode } from 'react';

import axios from 'axios';

interface IContext {}

interface IChildren {
  children: ReactNode;
}

export const Context = createContext<IContext | undefined>(undefined);

export const ContextProvider: React.FC<IChildren> = ({ children }) => {
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

  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
