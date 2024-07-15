export interface CountryCard {
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
  flags: { png: string };
}
