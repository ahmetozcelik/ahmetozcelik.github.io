import Head from "next/head";
import Link from "next/link"

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Ahmet Özçelik</title>
        <meta charset="UTF-8" />
        <meta http-equiv="refresh" content="0;URL=https://ahmetozcelik.github.io/out/index.html"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      {/* Page Content */}
      <div className="w3-padding-large">
        {/* Header/Home */}
        <header className="w3-container w3-padding-32 w3-center w3-black">
          <h1 className="w3-jumbo">
            <span className="w3-hide-small">Ben</span> Ahmet Özçelik.
          </h1>
          <p>Yazılım Geliştiricisi</p>
        </header>

        {/* About Section */}
        <div className="w3-content w3-justify w3-text-grey w3-padding-32 w3-center">
          <h2 className="w3-text-light-grey"></h2>
          <p>
            Şu an için mobil olarak iOS üzerine yazılım geliştirmekle vakit
            geçiriyorum. Geçirdiğim bu vakitten memmunum. İlerleyen zamanlarda
            öğrendiğim bilgileri yazarak yayınlayacağım. Buralar zamanla blog
            haline gelecek :)
          </p>
        </div>

        {/* Footer */}
        <footer className="w3-content w3-padding-32 w3-text-grey w3-xlarge w3-center">
          <a href="mailto:ahmetozcelik07@gmail.com" target="_blank">
            <i className="fa fa-at w3-hover-opacity"></i>
          </a>
          <a href="https://github.com/ahmetozcelik" target="_blank">
            <i className="fa fa-github w3-hover-opacity"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmetozcelik07/" target="_blank">
            <i className="fa fa-linkedin w3-hover-opacity"></i>
          </a>
          <a href="https://twitter.com/halkprogramcisi" target="_blank">
            <i className="fa fa-twitter w3-hover-opacity"></i>
          </a>
          {/* End footer */}
        </footer>

        {/* END PAGE CONTENT */}
      </div>
      <style jsx>{`
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Montserrat", sans-serif;
        }
        footer a {
          margin: 15px;
        }
      `}</style>
      <style jsx global>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}
