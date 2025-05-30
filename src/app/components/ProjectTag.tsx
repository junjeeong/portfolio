const ProjectTag = ({ tag }: { tag: string }) => {
  return (
    <div className="text-xs text-white rounded-[4px] bg-[#232323] flex justify-center items-center py-1 px-2">
      {tag}
    </div>
  );
};

export default ProjectTag;
