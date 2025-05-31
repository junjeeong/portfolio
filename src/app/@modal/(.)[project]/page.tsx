import ProjectPage from "@/app/[project]/page";
import Modal from "@/container/modal/Modal";

type Props = {
  params: { project: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const ModalPage = (props: Props) => {
  return (
    <Modal>
      <ProjectPage {...props} />
    </Modal>
  );
};

export default ModalPage;
