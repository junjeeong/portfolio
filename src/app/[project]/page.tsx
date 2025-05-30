interface Params {
  project: string;
}

const ProjectPage = ({ params }: { params: Params }) => {
  const { project } = params;
  return <div> 나 {project}</div>;
};

export default ProjectPage;
