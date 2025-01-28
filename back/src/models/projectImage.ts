// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';

class ProjectImageModel extends Model {
  public id!: number;

  public src!: string;
  public alt?: string;

  public project_id!: number;
}

ProjectImageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    src: {
      type: DataTypes.TEXT,
    },

    alt: {
      type: DataTypes.STRING(255),
    },

    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ProjectModel,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    tableName: 'project_image',
    timestamps: false,
  },
);

export default ProjectImageModel;
