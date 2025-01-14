// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';
import TechnologiesModel from './technologies';

class ProjectTechnologiesModel extends Model {
  public project_id!: number;
  public language_id!: number;
}

ProjectTechnologiesModel.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: ProjectModel,
        key: 'id',
      },
    },

    tech_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: TechnologiesModel,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    tableName: 'project_technologies',
    timestamps: false,
  },
);

export default ProjectTechnologiesModel;
