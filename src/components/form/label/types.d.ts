import { LabelHTMLAttributes } from 'react';

export interface CustomLabelAttributes extends LabelHTMLAttributes<HTMLLabelElement> {
  position?: Position;
}
