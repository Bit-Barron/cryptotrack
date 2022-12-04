export type CryptoList = {
  status: {
    timestamp: string;
    error_code: number;
    error_message: any;
    elapsed: number;
    credit_count: number;
    notice: string;
    total_count: number;
  };
  data: Array<{
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string;
    tags: Array<string>;
    max_supply?: number;
    circulating_supply: number;
    total_supply: number;
    platform?: {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      token_address: string;
    };
    cmc_rank: number;
    self_reported_circulating_supply?: number;
    self_reported_market_cap?: number;
    tvl_ratio?: number;
    last_updated: string;
    quote: {
      USD: {
        price: number;
        volume_24h: number;
        volume_change_24h: number;
        percent_change_1h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_60d: number;
        percent_change_90d: number;
        market_cap: number;
        market_cap_dominance: number;
        fully_diluted_market_cap: number;
        tvl?: number;
        last_updated: string;
      };
    };
  }>;
};

export type CryptoDetails = {
  [x: string]: SetStateAction<CryptoDetails | undefined>;
  status: {
    timestamp: string;
    error_code: number;
    error_message: any;
    elapsed: number;
    credit_count: number;
    notice: string;
  };
  data: {
    [key: string]: {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      num_market_pairs: number;
      date_added: string;
      tags: Array<string>;
      max_supply: number;
      circulating_supply: number;
      total_supply: number;
      is_active: number;
      platform: any;
      cmc_rank: number;
      is_fiat: number;
      self_reported_circulating_supply: any;
      self_reported_market_cap: any;
      tvl_ratio: any;
      last_updated: string;
      quote: {
        USD: {
          price: number;
          volume_24h: number;
          volume_change_24h: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          percent_change_30d: number;
          percent_change_60d: number;
          percent_change_90d: number;
          market_cap: number;
          market_cap_dominance: number;
          fully_diluted_market_cap: number;
          tvl: any;
          last_updated: string;
        };
      };
    };
  };
};
