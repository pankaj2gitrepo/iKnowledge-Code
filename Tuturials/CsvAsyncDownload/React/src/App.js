import "./App.css";
import { getData } from "./service";
import { tutorial } from "./models/cricketbook";

function App() {
  const handleHelloCricket = async () => {
    fetch("http://localhost:5100/HelloCricket")
      .then((response) => response.json())
      .then((myJson) => {
        console.log(myJson);
      });
  };

  const handleDownloadCricketBook = async () => {
    fetch("http://localhost:5100/DownloadCricketBook")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        console.log(url);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `CricketBook.csv`);
        document.body.appendChild(link);
        link.click();
      });
  };

  const handleGetCricketBookViaProto = async () => {
    getData(
      "GET",
      "http://localhost:5100/GetCricketBookViaProto",
      {},
      tutorial.CricketBook,
      tutorial.CricketBook
    ).then((response) => {
      console.log("response");
      console.log(response);
      return response;
    });
  };

  const handleDownloadCricketBookViaProto = async () => {
    getData(
      "GET",
      "http://localhost:5100/DownloadCricketBookViaProto",
      {},
      tutorial.CricketBook,
      tutorial.CricketBook
    ).then((response) => {
      console.log("response");
      console.log(response);

      const url = window.URL.createObjectURL(new Blob([response.fileCsv]));
      console.log(url);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `CricketBook.csv`);
      document.body.appendChild(link);
      link.click();

      return response;
    });
  };

  return (
    <div>
      <button onClick={handleHelloCricket}>Hello Cricket</button>
      <button onClick={handleDownloadCricketBook}>Download Cricket Book</button>
      <button onClick={handleGetCricketBookViaProto}>
        Get Cricket Book via Proto
      </button>
      <button onClick={handleDownloadCricketBookViaProto}>
        Download Cricket Book via Proto
      </button>
    </div>
  );
}

export default App;
