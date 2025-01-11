// Libraries
import { DataTypes, Model } from 'sequelize';

// Local
import connection from '../database/connection';

class ProjectModel extends Model {
  public id!: number;

  public logo!: Buffer;
  public title!: string;
  public description!: string;

  public host_link?: string;
  public code_link?: string;

  public start_date!: Date;
  public end_date?: Date;
}

ProjectModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    logo: {
      type: DataTypes.BLOB,
    },

    title: {
      type: DataTypes.STRING(255),
    },

    description: {
      type: DataTypes.TEXT,
    },

    host_link: {
      type: DataTypes.STRING(500),
    },

    code_link: {
      type: DataTypes.STRING(500),
    },

    start_date: {
      type: DataTypes.DATE,
    },

    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    tableName: 'project',
    timestamps: false,
  },
);

export default ProjectModel;
