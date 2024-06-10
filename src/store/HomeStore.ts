import { Immer } from "immer";
import { CryptoCurrency } from "../types";

interface HomeStore {
  page: number;
  setPage: (page: number) => void;

  query: string;
  setQuery: (query: string) => void;

  results: CryptoCurrency[];
  setResults: (results: CryptoCurrency[]) => void;

  exchange: string;
  setExchange: (exchange: string) => void;

  result: CryptoCurrency[];
  setResult: (result: CryptoCurrency[]) => void;
}
