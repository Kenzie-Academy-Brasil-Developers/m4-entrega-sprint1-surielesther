// import users from "../database";
import jwt from "jsonwebtoken";
import userProfileService from "../services/userProfile.service";

const userProfileController = (request, response) => {
  const users = userProfileService();

  let token = request.headers.authorization;
  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(400).json({ message: "Ops, bad request" });
    }
    request.user = { id: decoded.subject };

    // const userIndex = users.findIndex((element) => element.id === request.user);

    // if (userIndex === -1) {
    //   return "User not found";
    // }

    return request.user;
  });

  //   return response.json(user);
};

export default userProfileController;
