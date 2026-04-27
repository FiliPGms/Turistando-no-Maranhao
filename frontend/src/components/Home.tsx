
export const Home = () => {
    return (
        // <div className="flex items-center w-full justify-center">
        //     <p typeof = "text">
        //         Olá, seja bem-vindo ao Turistando no Maranhão!
        //     </p>
        //     <p>Hello there.<br />How do you do?</p>
        // </div>

        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css"
  />
  <header>
    <h1 className="cabecalho">Turistando no Maranhão</h1>
  </header>
  <main>
    <section id="search">
      <input type="text" id="searchInput" placeholder="Buscar destino..." />
    </section>
    <section id="destinos">
      {/* Os destinos turísticos serão exibidos aqui */}
    </section>
    <section id="mapa">
      {/* Mapa interativo */}
      <div id="map" />
    </section>
  </main>
  <footer className="rodape">
    <p>Descubra as belezas do Maranhão!</p>
  </footer>
</>

)
}