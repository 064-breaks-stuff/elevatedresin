import ProjectLandingPage from "./ProjectLandingPage";
import { projectPages } from "../data/projectPages";

export default function WalkwaysPathwaysPage() {
  return (
    <ProjectLandingPage page={projectPages["walkways-pathways"]} />
  );
}