import {
  DetailedViewContainer,
  DetailedViewContainerLeft,
  DetailedViewContainerRight,
  DetailedViewDesc,
  DetailedViewImage,
  DetailedViewTitle,
  GoBackButton
} from "./styledComponents";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function DetailedView(props) {
  console.log(props);
  const [ItemData, setData] = useState([]);
  const getData = async () => {
    const { match } = props;
    const { params } = match;
    const { id } = params;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=cc39f3563548e0ad9813e4717fce96c3`;
    const options = {
      method: "GET"
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const updatedData = {
      posterPath: data.poster_path,
      title: data.title,
      overview: data.overview,
      popularity: data.popularity,
      rating: data.vote_average / 2,
      relaseDate: data.relase_date
    };
    setData(updatedData);
  };
  useEffect(() => {
    getData();
  }, []);
  const { posterPath, title, rating, overview } = ItemData;
  const goBack = () => {
    const { history } = props;
    history.push("/");
  };

  return (
    <DetailedViewContainer>
      <DetailedViewContainerLeft>
        <GoBackButton type="button" onClick={goBack}>
          <HiArrowNarrowLeft /> Go Back
        </GoBackButton>
        <DetailedViewTitle>{title}</DetailedViewTitle>
        <DetailedViewDesc>Rating - {rating}</DetailedViewDesc>
        <DetailedViewDesc>{overview}</DetailedViewDesc>
      </DetailedViewContainerLeft>
      <DetailedViewContainerRight>
        <DetailedViewImage
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        />
      </DetailedViewContainerRight>
    </DetailedViewContainer>
  );
}
