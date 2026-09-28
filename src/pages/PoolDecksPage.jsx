import ProjectLandingPage from "./ProjectLandingPage";
import { projectPages } from "../data/projectPages";

export default function PoolDecksPage() {
  return <ProjectLandingPage page={projectPages["pool-decks"]} />;
}