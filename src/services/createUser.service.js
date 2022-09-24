import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    email,
    name,
    isAdm,
    password: hashedPassword,
  };

  const user = {
    id: uuidv4(),
    email,
    name,
    isAdm,
  };

  users.push(newUser);

  return user;
};

export default createUserService;
