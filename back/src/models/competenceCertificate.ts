// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';
import CompetenceModel from './competence';

class CompetenceCertificateModel extends Model {
  public id!: number;

  public title!: string;
  public description!: string;
  public duration!: number;
  public data!: string;

  public competence_id!: number;
}

CompetenceCertificateModel.init(
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

    duration: {
      type: DataTypes.NUMBER,
    },

    data: {
      type: DataTypes.TEXT,
    },

    competence_id: {
      type: DataTypes.INTEGER,
      references: {
        model: CompetenceModel,
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    tableName: 'competente_certificate',
    timestamps: false,
  },
);

export default CompetenceCertificateModel;
