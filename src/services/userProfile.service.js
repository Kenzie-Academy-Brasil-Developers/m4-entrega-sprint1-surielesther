import users from "../database";

const userProfileService = () => {
  
    const userIndex = users.findIndex((element) => element.id === id);

   if (userIndex === -1) {
      return "User not found";
    }

  return userIndex;
};

export default userProfileService;
