import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlatedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Juan", text: "lalalala" },
  { id: "q2", author: "Juan", text: "lolololo" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Not Found</p>;
  }

  return (
    <Fragment>
      <HighlatedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/` + params.quoteId + `/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
