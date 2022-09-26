import updateUserService from "../services/uptadeUser.service";
import jwt from "jsonwebtoken";

const updateUserController = (request, response) => {
  const token = request.headers.authorization;
  const newToken = token.split(" ")[1];

  jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(400).json({ message: "Ops, bad request" });
    } else if (decoded.isAdm) {
      const { id } = request.params;
      const { name, email } = request.body;

      const updatedUser = updateUserService(id, name, email);

      return response.status(200).json(updatedUser);
    } else if (!decoded.isAdm) {
      const id = decoded.uuid;
      const { name, email } = request.body;

      const updatedUser = updateUserService(id, name, email);

      return response.status(200).json(updatedUser);
    }
  });
};

export default updateUserController;
