import updateUserService from "../services/uptadeUser.service";

const updateUserController = (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const updatedUser = updateUserService(id, name, email);

  return response.json(updatedUser);
};

export default updateUserController;
