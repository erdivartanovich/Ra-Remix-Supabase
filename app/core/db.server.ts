type User = {
  id: string;
  username: string;
  passwordHash: string;
};

const users: User[] = [
  {
    id: 0,
    username: "erdivartanovich@gmail.com",
    passwordHash:
      "$2a$10$aQR9FSxCHwnFBLmrrQTMMOKf/QAnnT8YHHfxZ2u3kfBaZ0MElzXGq",
  },
];

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
      if (id) {
        return users[Number(id)];
      } else {
        return users.find((user) => user.username === username);
      }
    },
  },
};
