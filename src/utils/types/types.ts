export interface ICasinoData {
  games: IGame[];
  studios: IStudio[];
  tags: ICategory[];
}

export interface IGame {
  id: number;
  name: string;
  mobile: boolean;
  desktop: boolean;
  playForFun: boolean;
  externalId: string;
  mobileExternalId: string;
  display: string;
  imageUrl: string;
  gameType: string;
  aspectRatio: string;
  integration: string;
  studioId: number;
  translations: ITranslation[];
  releaseDate: number;
  gameTags: number[];
  backgroundImageUrl?: string;
  description?: string;
}

export interface IStudio {
  id: number;
  name: string;
  externalId: string;
  integration: string;
  enabled: boolean;
  imageUrl: string;
  blockedCountries?: string;
  allowedCountries?: string;
  blockedCurrencies?: string;
  lobbyOrder: number;
  icon: string;
  popular: boolean;
}

export interface ITranslation {
  id: number;
  language: string;
  name: string;
  imageUrl: string;
}

export interface ICategory {
  display: boolean;
  id: number | null;
  name: string;
  nameId: string;
  translations: ICategoryTranslations;
}

export interface ICategoryTranslations {
  sv?: string;
}

export interface IModalStates {
  currencies: boolean;
  studios: boolean;
}
