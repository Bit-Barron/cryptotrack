export interface CryptoCurrencyApiResponse {
  data: Data;
  status: Status;
}

export interface Data {
  cryptoCurrencyList: CryptoCurrency[];
  totalCount: string;
}

export interface CryptoCurrency {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  tags: string[];
  cmcRank: number;
  marketPairCount: number;
  circulatingSupply: number;
  selfReportedCirculatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  isActive: number;
  lastUpdated: Date;
  dateAdded: Date;
  quotes: Quote[];
  platform: Platform;
  isAudited: boolean;
  auditInfoList?: AuditInfo[];
}

export interface AuditInfo {
  coinId: string;
  auditor: string;
  auditStatus: number;
  score: string;
  auditTime: Date;
  reportUrl: string;
}

export interface Platform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export interface Quote {
  name: string;
  price: number;
  volume24h: number;
  marketCap: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  lastUpdated: Date;
  percentChange30d: number;
  percentChange60d: number;
  percentChange90d: number;
  fullyDilluttedMarketCap: number;
  marketCapByTotalSupply: number;
  dominance: number;
  turnover: number;
  ytdPriceChangePercentage: number;
  tvl?: number;
}

export interface Status {
  timestamp: Date;
  error_code: string;
  error_message: string;
  elapsed: string;
  credit_count: number;
}
