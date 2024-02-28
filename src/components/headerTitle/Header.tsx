import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className={`flex justify-between items-center sticky top-0  ${!isScrolled ?"px-20 py-10": "z-50 shadow-lg shadow-slate-300 px-20 bg-white "} py-5`}>
      <p className="font-bold text-xl">Create a new study set</p>
      <button className="btn btn-primary" onClick={openModal}>
        Create
      </button>
    </div>
  );
}
