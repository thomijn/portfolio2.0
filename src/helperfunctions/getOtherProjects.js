import { projectsCards } from "../Components/Projects/ProjectData"

export const getOtherProjects = (link) => {
    const filtered = projectsCards.filter((project) => {
        return project.link !== link
    })
    return filtered.sort(() => .5 - Math.random()).slice(0, 2)
}