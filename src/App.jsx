import news_feed from './sample_news_stories.json';
import Story from './components/story';
import "./index.css";

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    
    <div className="App">
      <h1>Random News Feed</h1>
      {
        stories.map((story) =>(
          <Story
            title = {story.title}
            link = {story.link}
            description = {story.description}
            creator = {story.creator}
            image_url = {story.image_url}
        
          />

        ) 
        )
      }
     




    </div>
  );
}

export default App;
