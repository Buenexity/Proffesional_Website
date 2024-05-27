import "./job-showcase.css"; 
function Job(props) {
  return (
    <div className="job-container">
      <div className="job-text-container">
        <div className="job-header">
          <h2 className="job-title">{props.Title}</h2>
          <h2 className="job-date">{props.Date}</h2>
        </div>
        <p className="job-description">{props.Description}</p>
      </div>
    </div>
  );
}

export default Job;
