type ProductDetail = {
  name: string;
  detail: string;
  _id: string;
};

type Colour = {
  for: string;
  name: string;
  image: string | null;
  swatch: string[];
  colours: string[];
  _id: string;
};

type SupplierText = {
  name: string;
  detail: string;
  _id: string;
};

type ProductType = {
  typeId: string;
  typeName: string;
  typeGroupId: string;
  typeNameText: string;
  typeGroupName: string;
};

type Categorisation = {
  productType: ProductType;
  appaAttributes: Record<string, unknown>;
  appaProductType: Record<string, string[]>;
  supplierCategory: string;
  supplierSubCategory: string;
};

type Colours = {
  list: Colour[];
  supplierText: SupplierText[];
};

export type BasePrice = {
  currency: string;
  description: string;
  indent: string;
  key: string;
  leadTime: string | null;
  setup: string;
  type: number;
  tags: any[];
  priceBreaks: { price: number; qty: number; _id: string };
  undecorated: boolean;
};

type PriceGroup = {
  additions: any[];
  basePrice: BasePrice;
};

type Prices = {
  addons: any[];
  priceTags: Record<string, unknown>;
  priceGroups: PriceGroup[];
  currencyOptions: string;
};

type Overview = {
  name: string;
  code: string;
  supplier: string;
  heroImage: string;
  minQty: number;
  displayPrices: Record<string, unknown>;
};

type Meta = {
  id: number;
  country: string;
  dataSource: string;
  discontinued: boolean;
  firstListedAt: string;
  lastChangedAt: string;
  priceCurrencies: string[];
  pricesChangedAt: string;
  discontinuedReason: string;
};

type Category = {
  _id: string;
  name: string;
  supplier: string;
  __v: number;
  isActive: boolean;
  status: string;
  totalProducts: number;
};

type SubCategory = {
  _id: string;
  category: string;
  name: string;
  __v: number;
  isActive: boolean;
  status: string;
};

type Supplier = {
  _id: string;
  supplierId: string;
  __v: number;
  appaMemberNumber: string;
  country: string;
  createdAt: string;
  isActive: boolean;
  name: string;
  status: string;
  updatedAt: string;
};

type Product = {
  code: string;
  name: string;
  details: ProductDetail[];
  description: string;
  discontinued: boolean;
  supplierBrand: string | null;
  supplierLabel: string | null;
  supplierCatalogue: string | null;
  supplierWebsitePage: string;
  images: string[];
  prices: Prices;
  videos: any[];
  lineArt: any[];
  colours: Colours;
  categorisation: Categorisation;
};

export type ProductObject = {
  _id: string;
  meta: Meta;
  __v: number;
  category: Category;
  labels: string[];
  createdAt: string;
  overview: Overview;
  product: Product;
  subCategory: SubCategory;
  supplier: Supplier;
  updatedAt: string;
  globalProductCategory: string;
  globalProductSubCategory: string;
  isActive: boolean;
  isHot: boolean;
  price: { min: number; max: number };
  quantity: { min: number; max: number };
  status: string;
  slug: string;
  baseprices: any[];
};

export type ProductRes = {
  docs: ProductObject[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  prevPage: number;
  totalItems: number;
  totalPages: number;
};
