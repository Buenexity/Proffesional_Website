import "./skillscheck.css";

function Lists(props) 
{
  return (
    <div className="List-Items">
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index} className="item-container">{item}</li>;
        })}
      </ul>
    </div>


  );
}

export default Lists;
