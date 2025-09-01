import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  const [showPosts, setShowPosts] = useState(true);

  // Use React Query to fetch posts with advanced configuration
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000, // Data becomes stale after 5 seconds
    cacheTime: 60000, // Cache data for 1 minute (60000ms)
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (isError) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="posts-container">
      <h1>React Query Demo - Posts from JSONPlaceholder</h1>
      
      <div className="controls">
        <button onClick={() => setShowPosts(!showPosts)}>
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
        <button onClick={() => refetch()} className="refetch-btn">
          Refetch Data
        </button>
      </div>

      {showPosts && (
        <div className="posts-list">
          <h2>Posts ({data?.length || 0})</h2>
          <div className="posts-grid">
            {data?.slice(0, 12).map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}...</p>
                <small>Post ID: {post.id} | User ID: {post.userId}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="cache-info">
        <p>
          <strong>Caching Demo:</strong> Toggle the posts visibility to see React Query's caching in action. 
          When you show posts again, they should load instantly from cache unless the data is stale.
        </p>
      </div>
    </div>
  );
}

export default PostsComponent;