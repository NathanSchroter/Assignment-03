 import news from "../assets/news.png"
 function Story (props) {
    function handleDelete(e) {
        if ( e.target === e.currentTarget) {
          // you clicked on the tile itself
          return;
        }
    
        if (e.target.tagName !== 'SPAN') {
          return;
        }
    
        e.currentTarget.remove();
      }
    return(
         <>
        
        
        <div class="story" onClick={handleDelete}>
            <span class="delete">x </span>
                 <div class="story_header">
                    <div class="story_image">
                        {props.image_url == null ? 
                             <img src={news}></img>
                        :
                        <img src={props.image_url}></img>
                    }

                     </div>
                    <div>
              <h1><a href={props.link} target="_blank">{props.title}</a></h1>
                 <p class="story_creator">by:{props.creator}</p>
            </div>
                </div>
                    <p class="description">{props.description}</p>
         </div>
        
        
        
        
        </>
    )
}


export default Story;

function Tile(props) {
    const background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  
    
  
    return (
      <div className="tile" style={{ backgroundColor: background }} onClick={handleDelete}>
        <p>{props.name}</p>
        <span>x</span>
      </div>
    );
  }