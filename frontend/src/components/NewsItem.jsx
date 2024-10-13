function NewsItem({ item }) {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("z", "");

  return (
    <div className="article-container">
      <a href={item.url} className="article">
        <div className="article-image">
          <img src={item.urlToImage} alt="" />
        </div>
        <div className="article-info">
          <div className="article-source">
            {/* <img src="" alt="" /> */}
            <span>{item.source.name}</span>
          </div>

          <div className="article-title">
            <h2>{item.title}</h2>
          </div>

          <p className="article-description">{item.description}</p>

          <div className="article-details">
            <p>
              <span>
                {" "}
                <b> Published At :</b>
                {formatTime}
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsItem;
