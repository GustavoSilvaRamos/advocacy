export default function Hero() {
  return (
    <div className="relative min-h-screen fundo">
      <div className="absolute z-10 w-full h-full bg-black opacity-75" />
      <div className="container relative z-20 flex flex-col items-center justify-center w-full h-screen mx-auto text-center">
        <h3 className="text-xl tracking-wide text-yellow">
          Bem vindo à maior Firma de Advocacia
        </h3>
        <h1 className="text-6xl text-gray-100">DO PAÍS</h1>
        <p className="text-lg tracking-wide text-gray-200">
          Somos uma equipe de 10 pessoas focadas em trazer a melhor solução para
          seus clientes,
          <br />e tudo no conforto do seu lar.
        </p>
        <div className="pt-5">
          <button className="px-5 py-3 text-gray-100 transition duration-300 ease-in-out border-2 rounded-full bg-danger-500 border-danger-500 hover:text-gray-100 hover:bg-yellow hover:border-yellow">
            Conheça nossa equipe
          </button>
        </div>
      </div>
    </div>
  );
}
