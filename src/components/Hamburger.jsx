export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger w-10 h-10">
        <div className="hamburger__line burger1"></div>
        <div className="hamburger__line burger2"></div>
        <div className="hamburger__line burger3"></div>
      </div>
      <style jsx>{`
        .burger1 {
          transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
        }
        .burger2 {
          transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </>
  );
}
