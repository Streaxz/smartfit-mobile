export enum EButtonLinkType {
  PHONE = 'phone',
  TELEGRAM = 'telegram',
  WHATSAPP = 'whatsapp',
}

export type TButtonLinkType = {
  key: EButtonLinkType;
  iconName: string;
} & (
  | {
      url: string;
      onClick?: undefined;
    }
  | {
      url?: undefined;
      onClick: () => void;
    }
);
