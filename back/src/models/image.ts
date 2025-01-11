// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';

class ImageModel extends Model {
  public id!: number;

  public title!: string;
  public description!: string;
  public data!: Buffer;

  public project_id!: number;
}

ImageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING(255),
    },

    description: {
      type: DataTypes.TEXT,
    },

    data: {
      type: DataTypes.BLOB,
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
