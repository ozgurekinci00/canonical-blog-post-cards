import './App.scss';
import { useState, useEffect} from "react";
import fetchPosts from './fetchPosts';
import { PostComponent } from './PostComponent';

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  return (
    <div className="row u-equal-height">
      {posts != null && posts.map((item) => <PostComponent key={item.id} item={item} />)}
    </div>
  );
}

export default App;
