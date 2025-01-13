// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';

class ImageModel extends Model {
  public id!: number;

  public data!: string;

  public project_id!: number;
}

ImageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    data: {
      type: DataTypes.TEXT,
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
    tableName: 'image',
    timestamps: false,
  },
);

export default ImageModel;
