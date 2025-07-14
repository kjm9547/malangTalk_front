import { create } from 'zustand';

type User = {
  nickname: string;
  email: string;
  imgUrl: string;
};

type UserStore = {
  user: User;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  updateUser: (user: Partial<User>) => void;
  clearUser: () => void;
};

export const useStore = create<UserStore>((set) => ({
  user: {
    nickname: '',
    email: '',
    imgUrl: '',
  },
  isLoggedIn: false,

  setUser: (user) => set({ user, isLoggedIn: true }),

  updateUser: (partialUser) =>
    set((state) => ({
      user: { ...state.user, ...partialUser },
    })),

  clearUser: () =>
    set({
      user: { nickname: '', email: '', imgUrl: '' },
      isLoggedIn: false,
    }),
}));
