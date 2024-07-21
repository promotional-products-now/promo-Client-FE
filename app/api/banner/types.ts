export enum PopupPosition {
  TOP = "top",
  TOP_CENTER = "top-center",
  CENTER = "center",
  BOTTOM = "bottom",
}

export interface IPopup {
  isActive: boolean;
  image: string;
  message: string;
  urlLink: string;
  position: (typeof PopupPosition)[keyof typeof PopupPosition];
}

export interface IBanner {
  message: string;
  isActive: boolean;
}

export interface settingsBanner {
  banner: IBanner;
  popupModal: IPopup;
}
