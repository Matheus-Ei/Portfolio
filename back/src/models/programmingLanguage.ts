// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import ProjectModel from './project';

class ProgrammingLanguageModel extends Model {
  public id!: number;

  public name!: string;
  public description!: string;
  public logo!: Buffer;

  public project_id!: number;
}

ProgrammingLanguageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(255),
    },

    description: {
      type: DataTypes.TEXT,
    },

    logo: {
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
    tableName: 'programming_language',
    timestamps: false,
  },
);

export default ProgrammingLanguageModel;
