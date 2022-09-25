import jwt, { decode } from "jsonwebtoken";

const verifyIsAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization;
  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Unauthorized" });
    }
    request.user = { id: decoded.subject, isAdm: decoded.isAdm };

    if (!request.user.isAdm) {
      return response.status(401).json({ message: "Unauthorized" });
    }

    next();
  });
};

export default verifyIsAdmMiddleware;
