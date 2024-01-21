export interface Car {
  name: string;
  imageSrc: string;
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
