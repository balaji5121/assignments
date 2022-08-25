import { Link } from "react-router-dom";
import {
  TredingItemImage,
  TredingItemLi,
  TredingItemRating,
  TredingItemTitle
} from "./styledComponents";
import { AiFillStar } from "react-icons/ai";
import "../styles.css";

export default function TrendingItem(props) {
  const { TrendingDetails } = props;
  const { title, backGroundPath, id, rating } = TrendingDetails;

  return (
    <TredingItemLi>
      <Link to={`/movies/${id}`} className="link">
        <TredingItemImage
          src={`https://image.tmdb.org/t/p/w500${backGroundPath}`}
        />
        <TredingItemTitle>{title}</TredingItemTitle>
        <TredingItemRating>
          <AiFillStar /> {rating}/5
        </TredingItemRating>
      </Link>{" "}
    </TredingItemLi>
  );
}
