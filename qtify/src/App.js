import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
//@ts-ignore
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums } from "./components/api/api";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
      {/* <div className="cardContainer">
      {topAlbumData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> */}
    </div>
  );
}

export default App;