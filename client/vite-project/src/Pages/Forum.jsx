import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Forum.css";
import initialScenarios from '../Scenarios/scenarios.js';

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [threadImage, setThreadImage] = useState(null);
  const [sortOption, setSortOption] = useState('likesDesc');
  const navigate = useNavigate();
  const maxDescriptionLength = 240;

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem('threads'));
    if (savedThreads) {
      setThreads(savedThreads);
    } else {
      localStorage.setItem('threads', JSON.stringify(initialScenarios));
      setThreads(initialScenarios);
    }
  }, []);

  const saveThreadsToLocalStorage = (updatedThreads) => {
    localStorage.setItem('threads', JSON.stringify(updatedThreads));
    setThreads(updatedThreads);
  };

  const handleAddThread = () => {
    if (newThread.trim() && newDescription.trim()) {
      const newScenario = {
        id: threads.length + 1,
        title: newThread,
        description: newDescription,
        likes: 0,
        image: threadImage ? URL.createObjectURL(threadImage) : "/default-image.png",
        comments: []
      };

      const updatedThreads = [...threads, newScenario];
      saveThreadsToLocalStorage(updatedThreads);
      setNewThread('');
      setNewDescription('');
      setThreadImage(null);
    }
  };

  const handleOpenThread = (thread) => {
    navigate(`/thread/${thread.id}`, { state: { thread } });
  };

  const handleSort = () => {
    const sortedThreads = [...threads];
    switch (sortOption) {
      case 'likesDesc':
        sortedThreads.sort((a, b) => b.likes - a.likes);
        break;
      case 'likesAsc':
        sortedThreads.sort((a, b) => a.likes - b.likes);
        break;
      case 'titleAsc':
        sortedThreads.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        sortedThreads.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    setThreads(sortedThreads);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThreadImage(file);
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Handles a change in the image upload input field. If a file is selected, it is stored in the state.
   * @param {Event} event - The event containing the selected file.
   */
/******  8d9d8492-d5c2-409f-9c5a-72b8e30f77fc  *******/    }
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <div className="forum-header">
      <input
        type="text"
        value={newThread}
        onChange={(e) => setNewThread(e.target.value)}
        placeholder="Füge ein neues Thema hinzu"
        className="new-thread-input"
        id='threadTitle'
      />
      <textarea
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value.slice(0, maxDescriptionLength))}
        placeholder="Füge eine Beschreibung hinzu (max. 240 Zeichen)"
        maxLength={maxDescriptionLength}
        className="new-thread-textarea"
        id='desc'
      />
      <div id="char-counter" className="char-counter comment-count">
        {maxDescriptionLength - newDescription.length} / {maxDescriptionLength} Zeichen übrig
      </div>
        <label htmlFor="imageUpload" className="upload-label " id='threadLabel'>Bild</label>
      
      </div>
      <button onClick={handleAddThread} id='addThreadBtn'>Hinzufügen</button><input 
          id="imageUpload"
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      <div className="sort-controls">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="likesDesc">Nach Likes absteigend</option>
          <option value="likesAsc">Nach Likes aufsteigend</option>
          <option value="titleAsc">Titel alphabetisch aufsteigend</option>
          <option value="titleDesc">Titel alphabetisch absteigend</option>
        </select>
        <button onClick={handleSort}>Sortieren</button>
      </div>
      
      <ul>
        {threads.map((thread) => (
          <li
            className="thread-title"
            key={thread.id}
            onClick={() => handleOpenThread(thread)}
            style={{ backgroundImage: `url(${thread.image})` }}
          >
            <h3>{thread.title}</h3>
            <p>{thread.description}</p>
            <span>{thread.likes} Likes</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
