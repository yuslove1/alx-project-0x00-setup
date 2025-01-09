export interface PillProps {
    title: string;
  }

export interface BtnProps extends PillProps{
   styles?: string;
   onClick?: () => void;
}