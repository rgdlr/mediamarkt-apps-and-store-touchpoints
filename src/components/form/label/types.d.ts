import { LabelHTMLAttributes } from 'react';

export interface LabelAttributes extends LabelHTMLAttributes<HTMLLabelElement> {
  position?: Position;
}
