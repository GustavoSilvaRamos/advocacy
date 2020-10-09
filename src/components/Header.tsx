export default function Header() {
  return (
    <div className="fixed z-30 w-full bg-opacity-50 shadow-md bg-secondary-500 ">
      <div className="container flex flex-row items-center justify-between mx-auto mt-2 ">
        <img className="h-20" src="logo.png" alt="Logo" />
        <ul className="flex space-x-10">
          <a
            className="text-sm font-normal tracking-wide text-gray-100 transition duration-300 ease-in-out hover:text-yellow linker"
            href="hero"
          >
            INÍCIO
          </a>
          <a
            className="text-sm font-normal tracking-wide text-gray-100 transition duration-300 ease-in-out hover:text-yellow linker"
            href="equipe"
          >
            EQUIPE
          </a>
          <a
            className="text-sm font-normal tracking-wide text-gray-100 transition duration-300 ease-in-out hover:text-yellow linker"
            href="sobre"
          >
            SOBRE NÓS
          </a>
          <a
            className="text-sm font-normal tracking-wide text-gray-100 transition duration-300 ease-in-out hover:text-yellow linker"
            href="depoimentos"
          >
            DEPOIMENTOS
            </a>
          <a
            className="text-sm font-normal tracking-wide text-gray-100 transition duration-300 ease-in-out hover:text-yellow linker"
            href="contato"
          >
            CONTATO
          </a>
        </ul>
      </div>
    </div>
  );
}
