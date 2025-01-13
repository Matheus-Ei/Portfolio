// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';

class ProgrammingLanguageModel extends Model {
  public id!: number;

  public name!: string;
  public description!: string;
  public logo!: string;
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
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    tableName: 'programming_language',
    timestamps: false,
  },
);

export default ProgrammingLanguageModel;
