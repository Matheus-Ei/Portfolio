// Libraries
import { Dispatch, SetStateAction } from 'react';

export interface ErrorType {
  message: string;
  isError: boolean;
}

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type ElementType = JSX.Element | null;

export type idType = string | number | undefined | null;

export interface IconType {
  name: string;
  library: string;
}
