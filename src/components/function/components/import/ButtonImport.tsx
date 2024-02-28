import ModalImport from "./ModalImport";

export default function ButtonImport() {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
      <button
        className="btn btn-outline border-slate-300 bg-white mx-2"
        onClick={() => {
          openModal();
        }}
      >
        + Import
      </button>
      <ModalImport id="my_modal_4" />
    </>
  );
}
