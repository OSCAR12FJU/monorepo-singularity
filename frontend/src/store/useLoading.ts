import {create} from "zustand";

interface LoadingState{
    loading: boolean | null;
    setLoading: (loading: boolean | null) => void;
    // clearToken: () => void;
}

export const useLoading = create<LoadingState>((set) =>({
    loading: false,
    setLoading: (loading) => set({loading}),
    // clearToken: () => set({token: null})
}))