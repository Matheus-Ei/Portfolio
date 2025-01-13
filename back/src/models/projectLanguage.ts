// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';
import ProgrammingLanguageModel from './programmingLanguage';

class ProjectLanguageModel extends Model {
  public project_id!: number;
  public language_id!: number;
}

ProjectLanguageModel.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: ProjectModel,
        key: 'id',
      },
    },

    language_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: ProgrammingLanguageModel,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    tableName: 'project_language',
    timestamps: false,
  },
);

export default ProjectLanguageModel;
