import { IUser } from "./models/User";

const users = (global as any).users as IUser[];
export const db = {
  user: {
    create: async (payload: {
      data: { username: string; passwordHash: string };
    }) => {
      const newUser = { id: String(users.length++), ...payload.data };
      users.push(newUser);
      return newUser;
    },

    findUnique: async (findOpts: {
      where: { id?: string; username?: string };
      select?: { id: boolean; username: boolean };
    }) => {
      const { id, username } = findOpts.where;
      console.log("users ==========", users);
      if (id) {
        return users[Number(id)];
      } else {
        return users.find((user) => user.username === username);
      }
    },
  },
};
