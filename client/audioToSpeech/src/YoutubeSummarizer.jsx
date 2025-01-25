import React, { useState } from 'react';
import axios from 'axios';

function YouTubeSummarizer() {
  const [videoLink, setVideoLink] = useState('');
  const [summary, setSummary] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSummary('');
    setThumbnail('');
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/summarize', {
        link: videoLink
      });

      setSummary(response.data.summary);
      setThumbnail(response.data.thumbnail);
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Video Summarizer</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input 
            type="text" 
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Enter YouTube Video Link" 
            className="flex-grow p-2 border rounded-l-lg"
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Summarize'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {error}
        </div>
      )}

      {loading && (
        <div className="text-center">
          <p>Generating summary...</p>
        </div>
      )}

      {thumbnail && (
        <div className="mb-6 text-center">
          <img 
            src={thumbnail} 
            alt="Video Thumbnail" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}

      {summary && (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Video Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default YouTubeSummarizer;