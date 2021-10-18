import type { Sequelize, Model } from "sequelize";
import { User } from "./user";
import type { UserAttributes, UserCreationAttributes } from "./user";

export {
  User,
};

export type {
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  User.initModel(sequelize);


  return {
    User: User,
  };
}
