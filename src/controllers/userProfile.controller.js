// import users from "../database";
import jwt from "jsonwebtoken";
import userProfileService from "../services/userProfile.service";

const userProfileController = (request, response) => {
  const users = userProfileService();

  let token = request.headers.authorization;
  const newToken = token.split(" ")[1];

  jwt.verify(newToken, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(400).json({ message: "Ops, bad request" });
    }
    const userId = { uuid: decoded.uuid };

    const userProfile = users.find((element) => element.uuid === userId.uuid);

    return response.status(200).json(userProfile);
  });
};

export default userProfileController;
