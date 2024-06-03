"use strict";
// import User, { IUser } from '../models/user/userModel';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from '../config/config';
// interface RegisterInput {
//   name: string;
//   email: string;
//   password: string;
// }
// const registerUser = async ({ name, email, password }: RegisterInput): Promise<string> => {
//   let user = await User.findOne({ email });
//   if (user) {
//     throw new Error('User already exists');
//   }
//   user = new User({ name, email, password });
//   user.password = await bcrypt.hash(password, 10);
//   await user.save();
//   const payload = {
//     user: {
//       id: user.id,
//     },
//   };
//   return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
// };
// export { registerUser };
