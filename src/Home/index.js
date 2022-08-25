import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import TrendingItem from "../TrendingItem";

import {
  Heading,
  HomeContainer,
  InputForm,
  LabelElement,
  SearchContainer,
  TrendingList
} from "./styledComponent";

export default function Home() {
  const [inputText, setInput] = useState("");
  const [searchInput, setSearch] = useState("");
  const [trendingData, setTrendingData] = useState([]);
  const getData = async () => {
    const options = {
      method: "GET"
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=cc39f3563548e0ad9813e4717fce96c3&language=en-US&page=1&",
      options
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const updatedData = data.results.map((each) => ({
        backGroundPath: each.backdrop_path,
        posterPath: each.poster_path,
        id: each.id,
        title: each.title,
        overview: each.overview,
        popularity: each.popularity,
        rating: each.vote_average / 2,
        relaseDate: each.relase_date
      }));
      setTrendingData(updatedData);
    }
  };
  console.log(trendingData);
  useEffect(() => {
    getData();
  }, [searchInput]);

  const onClickSearch = () => {
    setSearch(inputText);
  };
  const filteredData = trendingData.filter((each) =>
    each.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <HomeContainer>
      <SearchContainer>
        <InputForm
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="search"
          value={inputText}
          id="search"
          onAbort={() => setInput("")}
          placeholder="Search Movies"
        />
        <LabelElement onClick={onClickSearch}>
          <BiSearchAlt2 />
        </LabelElement>
      </SearchContainer>
      <Heading>Trending</Heading>
      <TrendingList>
        {filteredData.map((each) => (
          <TrendingItem key={each.id} TrendingDetails={each} />
        ))}
      </TrendingList>
    </HomeContainer>
  );
}
