// Local
import { TechnologyType } from 'services/technologies/types';

export interface ProjectType {
  id?: number;
  logo?: string;
  title?: string;
  description?: string;
  start_date?: Date | null;
  end_date?: Date | null;
  host_link?: string;
  code_link?: string;
}

export interface CompleteProjectType extends ProjectType {
  images?: Array<string>;
  technologies?: Array<TechnologyType>;
}
