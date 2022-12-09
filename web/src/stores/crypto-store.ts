import { observable } from "mobx";
import { CryptoCurrency } from "../types";

export class CryptoStore {
  @observable
  cryptoCurrencies: CryptoCurrency[] = [];
}
