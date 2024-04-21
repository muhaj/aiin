interface StockPrice {
  symbol: string;
  price: number;
  delta?: number;  // Assuming delta might not always be present
}

export async function fetchStockPrices(): Promise<StockPrice[]> {
  const response = await fetch('https://api.astrolescent.com/partner/hackathon/prices');
  if (!response.ok) {
    throw new Error('Failed to fetch prices');
  }
  return response.json() as Promise<StockPrice[]>;
}