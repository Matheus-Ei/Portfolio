// Library
import { createContext } from 'react';

// Local
import { ErrorType, SetStateType } from 'types/global';

interface AddTechContextType {
  logo: { value: string; set: SetStateType<string> };
  name: { value: string; set: SetStateType<string> };
  description: { value: string; set: SetStateType<string> };
  password: { value: string; set: SetStateType<string> };

  error: { value: ErrorType; set: SetStateType<ErrorType> };
  modal: { show: boolean; toggle: (value?: boolean | undefined) => void };
}

export const AddTechContext = createContext<
  AddTechContextType | undefined
>(undefined);
