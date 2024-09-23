export interface IColor {
  id: number;
  key: string;
  value: {
    id: number;
    label: string;
  }[];
}

export interface IColors {
  colors: IColor[];
  active: number | any;
  setActive: any;
  name: string;
  index: number;
  atributErr: any;
  setAtributErr?: any;
}
