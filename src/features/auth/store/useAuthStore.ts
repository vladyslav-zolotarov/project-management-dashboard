import { create } from 'zustand';
import type { Session } from '@supabase/supabase-js';

export type SessionState = {
  session: Session | null;
  isLoading: boolean;
};

export type SessionAction = {
  setSession: (nextUserSession: SessionState['session']) => void;
};

export type UserSessions = SessionState & SessionAction;

export const useAuthStore = create<UserSessions>()(set => ({
  isLoading: true,
  session: null,
  setSession: nextUserSession =>
    set(() => ({
      session: nextUserSession,
      isLoading: false,
    })),
}));
