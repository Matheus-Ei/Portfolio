// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';

class TechnologyModel extends Model {
  public id!: number;

  public icon!: string;
  public title!: string;
  public description?: string;
}

TechnologyModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    icon: {
      type: DataTypes.STRING(100),
    },

    title: {
      type: DataTypes.STRING(255),
    },

    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    tableName: 'technology',
    timestamps: false,
  },
);

export default TechnologyModel;
