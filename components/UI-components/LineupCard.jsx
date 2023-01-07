import React from "react";

function LineupCard({ name, genre }) {
  return (
    <article className="lineup-card">
      <div className="lineup-card-titles">
        <h3>{name}</h3>
        {/* <h4>{genre}</h4> */}
      </div>
    </article>
  );
}

export default LineupCard;
