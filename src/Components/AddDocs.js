import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';

function AddDocs() {
  const [fileName, setFileName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    // Here you can implement the logic to handle form submission
    console.log('Filename:', fileName);
    console.log('Owner Name:', ownerName);
    console.log('File:', file);
    // Reset form fields after submission
    setFileName('');
    setOwnerName('');
    setFile(null);
  };

  return (
    <div className=''>
    <SidebarComponent/>
    <div className="bg-gray-900 text-text min-h-screen flex justify-center items-center relative overflow-hidden login-section">
      <div className="bg-background bg-opacity-50 backdrop-blur-lg rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-white mb-6">Add Documents</h1>
        <form className="bg-white bg-opacity-10 text-black rounded-lg shadow-md p-8 w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Filename</label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter Filename"
              className="mt-1 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Owner Name</label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Enter Ownername"
              className="mt-1 block w-full border-gray-300 p-4 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full text-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default AddDocs;
