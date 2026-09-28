import ProjectLandingPage from "./ProjectLandingPage";
import { projectPages } from "../data/projectPages";

export default function LandscapeAreasPage() {
  return (
    <ProjectLandingPage page={projectPages["landscape-areas"]} />
  );
}