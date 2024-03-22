import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';

function Retreive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for demonstration
  const documents = [
    { id: 1, title: 'Document 1', content: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Document 2', content: 'Consectetur adipiscing elit' },
    { id: 3, title: 'Document 3', content: 'Sed do eiusmod tempor incididunt' },
    { id: 4, title: 'Document 4', content: 'Ut labore et dolore magna aliqua' },
    { id: 5, title: 'Document 5', content: 'Ut enim ad minim veniam' },
  ];

  const handleSearch = () => {
    // Perform search logic here (e.g., filter documents based on searchQuery)
    const results = documents.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="flex">
      <SidebarComponent />
      <div className="ml-8 bg-background h-screen flex flex-col items-center pt-20 w-full">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search documents"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid gap-4 w-full max-w-md">
          {searchResults.map(doc => (
            <div key={doc.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">{doc.title}</h2>
              <p className="text-gray-700">{doc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Retreive;
