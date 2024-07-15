import { Technologies } from "./helpersTypes"

export function listTechnologies(technologies: Technologies[]) {
    const list = technologies
    .filter(p => p.poweredByNodejs)
    .map((p)=>`<li>${p.name}-${p.type}</li>`);
    return `<ul>${list.join('')}</ul>`;
}