import create from 'zustand'

export const [useStore] = create(set => ({
    finished: false,
    setFinished: bool => {
        set({ finished: bool })
    },
    selectedProject: {},
    setselectedProject: project => {
        set({ project: project })
    },
}))
