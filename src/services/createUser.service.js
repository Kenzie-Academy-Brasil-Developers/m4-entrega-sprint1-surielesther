import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (email, name) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return "This email address is already being used";
  }

  const newUser = {
    id: uuidv4(),
    email,
    name,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
