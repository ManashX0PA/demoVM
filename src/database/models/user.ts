import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
  userId: number;
  username?: string;
  age?: number;
  isFemale?: boolean;
}

export type UserPk = "userId";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "userId" | "username" | "age" | "isFemale";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  userId!: number;
  username?: string;
  age?: number;
  isFemale?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    User.init({
    userId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    isFemale: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'hris',
    timestamps: false,
    indexes: [
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  return User;
  }
}
