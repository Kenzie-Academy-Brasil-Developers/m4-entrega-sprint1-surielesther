import jwt, { decode } from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "missing authorization token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "invalid token" });
    }
    request.user = { uuid: decoded.uuid };
    next();
  });
};

export default verifyAuthTokenMiddleware;
