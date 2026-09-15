// JobCard.jsx

function JobCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.company}</p>
      <p>{props.location}</p>

      {props.isNew && <span>New</span>}
    </div>
  );
}

export default JobCard;