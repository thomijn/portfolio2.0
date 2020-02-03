import create from 'zustand'

export const [useStore] = create(set => ({
    selectedProject: {},
    setselectedProject: project => {
        set({ project: project })
    },
}))
