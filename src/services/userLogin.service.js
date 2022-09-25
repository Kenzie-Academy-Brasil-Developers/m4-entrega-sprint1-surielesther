import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    throw new Error("Email ou senha inválidos")
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha inválidos")
  }

  const token = jwt.sign({ email: email, isAdm: user.isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.uuid,
  });

  return{ token: token };
};

export default userLoginService;
