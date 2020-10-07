export default function Header() {
  return (
    <div className="fixed z-30 w-full border-b-2 shadow-md bg-grey-100 border-danger-500">
      <div className="container flex flex-row items-center justify-between mx-auto mt-2 ">
        <img className="h-20" src="logo.png" alt="Logo" />
        <ul className="flex space-x-10">
          <a
            className="text-base font-medium tracking-normal text-gray-100 transition duration-300 ease-in-out hover:text-danger-500 linker"
            href="hero"
          >
            Ínicio
          </a>
          <a
            className="text-base font-medium tracking-normal text-gray-100 transition duration-300 ease-in-out hover:text-danger-500 linker"
            href="equipe"
          >
            Equipe
          </a>
          <a
            className="text-base font-medium tracking-normal text-gray-100 transition duration-300 ease-in-out hover:text-danger-500 linker"
            href="sobre"
          >
            Sobre Nós
          </a>
          <a
            className="text-base font-medium tracking-normal text-gray-100 transition duration-300 ease-in-out hover:text-danger-500 linker"
            href="contato"
          >
            Contato
          </a>
        </ul>
      </div>
    </div>
  );
}
