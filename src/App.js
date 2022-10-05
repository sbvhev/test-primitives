import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import "./App.css";
import NFT from "./components/NFT";

const PRIMITIVE_GET_NFTS_API =
  "https://staging-server-hp31.onrender.com/api/interview/tokens";

const filterNFTs = async (searchTerm) => {
  await axios({
    method: "post",
    url: "https://staging-server-hp31.onrender.com/api/interview/searchTokens",
    data: {
      query: searchTerm,
    },
  });
};

const res = {
  tokens: {
    list: [
      {
        name: "Magic Summer Box",
        imageURL: "https://vvdny.io/img/main.jpg",
        address: "HqAaeLKgmyDWozxNLqz1ndtnmFFQYdJHME8wgesbc17V",
      },
      {
        name: "Degen Degen #2606",
        imageURL:
          "https://bafybeiftvmvo77gav2mepimiiderjy5x5rpurfciabisskgw65jzj3q2ne.ipfs.nftstorage.link/2606.png?ext=png",
        address: "Cg3yqDmj25ia1yeikQX9h9q1tSeEmsfsH4stLDY94nMT",
      },
      {
        name: "Cliffs 22 Laws Group",
        imageURL:
          "https://dw2h1frcjb7pw.cloudfront.net/4a371c247a9627d94facb32f51f5cd0990d38fbc66efc5a11bdb51031c585989",
        address: "6LnW3zFLgKBWmTZaviuUmNaU88r4gomm82p6VDCjh8oY",
      },
      {
        name: "nehemiah",
        imageURL:
          "https://dw2h1frcjb7pw.cloudfront.net/29e4d53e27cbd3693f791f456c4281b7ac1cc2280555106412a0cfd01c7756da",
        address: "9ynTG9CNxeTPjNxTY59frAkTaUDnJRV2ffDDV7e8wN7a",
      },
      {
        name: "Alpha Turtles #614",
        imageURL:
          "https://bafybeig4wgo36ne3og223tvtyvkjhdu7sxvvag6iax6f3pdzscbklgnjm4.ipfs.nftstorage.link/2906.png",
        address: "FCZbS7Dar2b7avojCUuBek4vnbyFpGpEHHsUcrvM5EkK",
      },
      {
        name: "Not Bored Apes Gen2 #4689",
        imageURL:
          "https://xmla7uewhfbaljjcwmvs3jargipm3ndxf77fazaaoofab2gnuzkq.arweave.net/uxYP0JY5QgWlIrMrLaQRMh7NtHcv_lBkAHOKAOjNplU?ext=png",
        address: "8sTcL7QF5o4UhYPbZZFq2MF7AL1amoQ4UtHasA8KrcCg",
      },
      {
        name: "Not Bored Apes Gen2 #9676",
        imageURL:
          "https://iz4karqrlrsr7eoucw7miia3wszum4qmmmsotb65u4uufgqtb6zq.arweave.net/RnigRhFcZR-R1BW-xCAbtLNGcgxjJOmH3acpQpoTD7M?ext=png",
        address: "2ZwHjKjT4F86j4HkA32j94mJEzfMNCi9asVsKwcsqTuz",
      },
    ],
    count: 7,
  },
};

function App() {
  const [nfts, setNFTs] = useState(res.tokens.list);
  useEffect(() => {
    const fetchNFTs = async () => {
      const json = await axios({
        method: "get",
        url: PRIMITIVE_GET_NFTS_API,
        withCredentials: false,
      });

      console.log(json);
    };

    fetchNFTs();
  }, []);

  const handleChange = (e) => {
    filterNFTs(e.target.value);
  };

  const debounceResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  return (
    <div className="App">
      <input onChange={debounceResults} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {nfts.map((nft, index) => {
          return <NFT {...nft} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
