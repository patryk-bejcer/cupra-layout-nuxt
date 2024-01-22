export interface Car {
  name: string;
  image: string;
  leasingInfo: string;
  monthlyRate: string;
  totalPrice: string;
}

export type Cars = Car[];

export interface CarOption {
  name: string;
  image: string;
}

export interface CarOptions {
  [key: string]: CarOption;
}
