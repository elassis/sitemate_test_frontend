import React from "react";
import axios from "axios";

function Home() {

  const readUrl = "http://127.0.0.1:8000/api/";
  const http = axios.create({
    baseURL:readUrl,
    headers:{
      'X-Requested-With': 'XMLHttpRequest', 
    },
  });

  const issue = {
    id:1,
    title:"keyboad not working",
    description:"user claims keyboard is damaged",
  }

  const readRequest = async () => {
    await http
      .get(readUrl)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const createRequest = async () => {
    await http
      .post(readUrl, issue)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const updateRequest = async () => {
    await http
      .put(readUrl, issue)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteRequest = async () => {
    await http
      .delete(readUrl, issue.id)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Issues submission, please select one option:</p>
        <button onClick={createRequest}>create Issue</button>
        <button onClick={readRequest}>read Issue</button>
        <button onClick={updateRequest}>update Issue</button>
        <button onClick={deleteRequest}>destroy Issue</button>        
      </header>
    </div>
  );
}

export default Home;
