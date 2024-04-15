import { PropsWithChildren } from 'react';

export interface HeaderTitleProps extends PropsWithChildren {
  align: 'left' | 'center';
  customTitle?: string;
}
