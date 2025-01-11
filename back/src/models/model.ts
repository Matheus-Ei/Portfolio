// Model of a table in the database

// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';

class ExModel extends Model {
  public id!: number;

  public name?: string;
}

ExModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
    },
  },
  {
    sequelize: connection,
    tableName: 'model',
    timestamps: false,
  },
);

export default ExModel;
