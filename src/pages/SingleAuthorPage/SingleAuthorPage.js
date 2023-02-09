import { useParams } from "react-router";

const SingleAuthorPage = () => {
  const { authorid } = useParams();

  return (
    <section className="author">
      <article className="author__container"></article>
    </section>
  );
};

export default SingleAuthorPage;
