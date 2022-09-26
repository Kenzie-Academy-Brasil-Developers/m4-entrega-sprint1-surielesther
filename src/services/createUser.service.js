import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    uuid: uuidv4(),
    email,
    name,
    isAdm,
    password: hashedPassword,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  const user = {
    uuid: newUser.uuid,
    email: newUser.email,
    name: newUser.name,
    isAdm: newUser.isAdm,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
  };

  users.push(newUser);

  return user;
};

export default createUserService;
