import Article from "./Article";
function ArticleList(props) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
      {props.articles.map((article) => (
          <Article content={article.content} header={article.header}/>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
