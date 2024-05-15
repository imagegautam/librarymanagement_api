import bcrypt from "bcryptjs";

export const hashPassword = (plainPass) => {
  return bcrypt.hashSync(plainPass);
};
