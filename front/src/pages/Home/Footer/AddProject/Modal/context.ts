// Library
import { createContext } from 'react';

// Local
import { ErrorType, SetStateType } from 'types/global';

interface CreateProjectContextType {
  logo: { value: string[]; set: SetStateType<string[]> };
  title: { value: string; set: SetStateType<string> };
  description: { value: string; set: SetStateType<string> };
  password: { value: string; set: SetStateType<string> };

  technologies: { value: string[]; set: SetStateType<string[]> };
  images: { value: string[]; set: SetStateType<string[]> };

  hostLink: {
    value: string | undefined;
    set: SetStateType<string>;
  };
  codeLink: {
    value: string;
    set: SetStateType<string>;
  };

  startDate: {
    value: Date | null | undefined;
    set: SetStateType<Date | null | undefined>;
  };
  endDate: {
    value: Date | null | undefined;
    set: SetStateType<Date | null | undefined>;
  };

  error: { value: ErrorType; set: SetStateType<ErrorType> };
  modal: { show: boolean; toggle: (value?: boolean | undefined) => void };
}

export const CreateProjectContext = createContext<
  CreateProjectContextType | undefined
>(undefined);
