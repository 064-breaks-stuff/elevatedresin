export function getPublishedProjectCaseStudies(projects) {
  return projects.filter(
    (project) =>
      project.publish === true &&
      project.id &&
      project.projectType &&
      project.title &&
      project.challenge &&
      project.solution &&
      project.result &&
      project.image?.src &&
      project.image?.alt &&
      project.relatedProjectRoute
  );
}

export function getAvailableProjectTypes(projects) {
  return [...new Set(projects.map((project) => project.projectType))];
}

export function shouldShowProjectFilters(projects) {
  return getAvailableProjectTypes(projects).length >= 2;
}

export function sortProjectCaseStudies(projects) {
  return [...projects].sort((firstProject, secondProject) => {
    if (firstProject.featured === secondProject.featured) {
      return 0;
    }

    return firstProject.featured ? -1 : 1;
  });
}

export function filterProjectCaseStudies(projects, projectType) {
  if (!projectType || projectType === "all") {
    return projects;
  }

  return projects.filter((project) => project.projectType === projectType);
}