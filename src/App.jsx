import "./App.css";
import Liste from "./Liste";
import Arama from "./Arama";
import InputWithLabel from "./InputWithLabel";
import React from "react";
function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(true);
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "Web"
  );

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }
  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncPosts()
      .then((result) => {
        setYazilar(result.data.yazilar);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      yazar: "Sinan",
      yorumSayisi: 3,
      puan: 5,
      id: 0,
    },
    {
      baslik: "Web Öğreniyorum",
      yazar: "Ahmet",
      yorumSayisi: 1,
      puan: 3,
      id: 1,
    },
  ];
  function handleRemovePost(tiklananYazi) {
    const yeniYazilar = yazilar.filter((yazi) => tiklananYazi.id != yazi.id);
    setYazilar(yeniYazilar);
  }
  function getAsyncPosts() {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: { yazilar: yaziListesi } }), 2000)
    );
  }
  const [yazilar, setYazilar] = React.useState([]);
  const arananYazilar = yazilar.filter(function (yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
  });
  const karsilama = {
    selamlama: "Merhaba",
    baslik: "Ali",
  };

  function selamla(karsilama, baslik) {
    return karsilama + " ," + baslik;
  }
  return (
    <div>
      <h1>{karsilama.selamlama + "," + karsilama.baslik}</h1>
      <p>{selamla("Selam", "Ayşe")}</p>
      <InputWithLabel
        type="text"
        id="arama"
        value={aramaMetni}
        onInputChange={handleSearch}
        label="Arama:"
      />
      <hr />
      {isError ? (
        <p>Bir hata oluştu...</p>
      ) : isLoading ? (
        <p>Yükleniyoor...</p>
      ) : (
        <Liste yazilar={arananYazilar} onRemovePost={handleRemovePost} />
      )}
    </div>
  );
}
export default App;
