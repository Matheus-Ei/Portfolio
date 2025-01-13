// Local
import { ProgrammingLanguageType } from 'services/ProgrammingLanguage/types';

export interface ProjectType {
  logo: string;
  title: string;
  description: string;
  start_date: Date;
  end_date?: Date | null;
  host_link?: string;
  code_link?: string;
}

export interface CompleteProjectType extends ProjectType {
  images?: Array<string>;
  programming_languages?: Array<ProgrammingLanguageType>;
}
