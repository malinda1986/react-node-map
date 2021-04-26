export type ITruck = {
  id: number;
  location: { lat: number; lng: number };
  type: string;
  address: string;
  foodItem: string;
  name: string;
  status: string;
};

export type IFilter = {
  address?: string;
  status?: [string];
};
