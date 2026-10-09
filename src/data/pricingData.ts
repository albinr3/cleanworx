export type VehicleSizePrice = {
  vehicle: string;
  price: number;
};

export type PricingPackage = {
  name: string;
  detail?: string;
  prices: VehicleSizePrice[];
};

export type AddOnPrice = {
  name: string;
  addOn?: string;
  standalone?: string;
  note?: string;
};

const vehicleSizes = [
  "Two Door Coupe",
  "Four Seater Sedan/Coupe",
  "Crossover/Small SUV",
  "Two Row SUV/Mid-Size Pickup",
  "Full Size SUV/Full Size Pickup",
] as const;

function packagePrices(name: string, prices: readonly number[], detail?: string): PricingPackage {
  return {
    name,
    detail,
    prices: vehicleSizes.map((vehicle, index) => ({ vehicle, price: prices[index] })),
  };
}

export const DETAILING_PACKAGES: PricingPackage[] = [
  packagePrices("Interior Detail", [225, 255, 275, 295, 310]),
  packagePrices("Exterior Detail", [205, 225, 245, 265, 285]),
  packagePrices("Full Detail: Interior + Mini Exterior", [305, 335, 365, 395, 415]),
  packagePrices("Full Detail: Exterior + Mini Interior", [275, 305, 335, 365, 395]),
  packagePrices("Full Detail", [400, 425, 450, 475, 500]),
  packagePrices("Mini Detail", [95, 105, 115, 125, 135]),
];

export const CERAMIC_PACKAGES: PricingPackage[] = [
  packagePrices("1 Year Ceramic Coating", [325, 350, 375, 400, 425], "No 1-step polish"),
  packagePrices("3 Year Ceramic Coating", [899, 999, 1099, 1199, 1299], "Includes 1-step polish"),
  packagePrices("6 Year Ceramic Coating", [1099, 1199, 1299, 1399, 1499], "Includes 1-step polish"),
];

export const ADD_ON_PRICES: AddOnPrice[] = [
  { name: "Headlight Restoration", addOn: "$75 add-on", standalone: "$125 standalone" },
  { name: "Engine Bay Detail", addOn: "$75 add-on", standalone: "$125 standalone" },
  { name: "Pet Hair, Sand, or Excessive Soiling", note: "$75 per hour additional charge may apply." },
];
