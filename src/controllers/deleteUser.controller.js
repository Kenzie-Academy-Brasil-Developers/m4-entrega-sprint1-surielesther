import deleteUserService from "../services/deleteUser.service";
import jwt from "jsonwebtoken";

const deleteUserController = (request, response) => {
  const token = request.headers.authorization;
  const newToken = token.split(" ")[1];

  jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(400).json({ message: "Ops, bad request" });
    } else if (decoded.isAdm) {
      const { id } = request.params;

      const deletedUser = deleteUserService(id);

      return response.status(200).json(deletedUser);
    } else if (!decoded.isAdm) {
      const id = decoded.uuid;

      console.log("não é um adm");

      const deletedUser = deleteUserService(id);

      return response.status(200).json(deletedUser);
    }
  });
};

export default deleteUserController;
