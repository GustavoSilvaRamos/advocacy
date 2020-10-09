export default function Hero() {
  return (
    <div className="relative min-h-screen fundo">
      <div className="absolute z-10 w-full h-full bg-black opacity-75" />
      <div className="container relative z-20 flex flex-col items-center justify-center w-full h-screen mx-auto text-center">
        <h3 className="pt-10 text-xl font-normal tracking-wide text-gray-100">
          BEM VINDO À <span className="font-bold text-yellow">MAIOR</span> FIRMA DE ADVOCACIA
        </h3>
        <h1 className="relative text-6xl text-gray-100 title-header">
          DO PAÍS
        </h1>
        <p className="pt-12 text-lg font-light tracking-wide text-gray-200">
          Somos uma equipe de 10 pessoas focadas em trazer a melhor solução para
          seus clientes,
          <br />e tudo no conforto do seu lar. Entre em contato conosco.
        </p>
        <div className="pt-8 mx-auto space-x-5 ">
          <button className="px-4 py-3 font-normal text-gray-100 transition duration-300 ease-in-out border-2 border-white rounded-sm hover:text-gray-100 hover:bg-secondary-500 hover:border-secondary-500">
            Conheça nossa equipe
          </button>
          <button className="px-5 py-3 font-normal text-gray-100 transition duration-300 ease-in-out border-2 border-white rounded-sm hover:text-gray-100 hover:bg-secondary-500 hover:border-secondary-500">
            Agende sua Consulta
          </button>
        </div>
      </div>
    </div>
  );
}
