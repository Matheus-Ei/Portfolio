// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';

class CompetenceModel extends Model {
  public id!: number;

  public icon!: string;
  public title!: string;
  public description!: string;
}

CompetenceModel.init(
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
    tableName: 'competence',
    timestamps: false,
  },
);

export default CompetenceModel;
