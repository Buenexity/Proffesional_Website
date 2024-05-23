
import "./info-block.css"

function InfoBlock(props) 
{
    return(
      <>
       <div className="Container-Block">
            <h2>{props.Title}</h2>
            <h2>{props.Role}</h2>
            <p><strong>{props.Position}</strong></p>
            <img src={props.Image} alt="School Image" />
       </div>
      
      </>
    );
}

export default InfoBlock;
