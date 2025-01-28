// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';
import TechnologyModel from './technology';

class ProjectTechnologyModel extends Model {
  public project_id!: number;
  public technology_id!: number;
}

ProjectTechnologyModel.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: ProjectModel,
        key: 'id',
      },
    },

    technology_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: TechnologyModel,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    tableName: 'project_technology',
    timestamps: false,
  },
);

export default ProjectTechnologyModel;
