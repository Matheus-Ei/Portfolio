// Library
import { createContext } from 'react';

// Local
import { SetStateType } from 'types/global';

export interface DashboardContextType {
  currentPage: string;
  setCurrentPage: SetStateType<string>;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);
