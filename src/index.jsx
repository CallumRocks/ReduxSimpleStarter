import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/search_bar';


const apiKey = "337da68a2d6b2f2679d08eba30d9eec6";
const dm = "dm6000";
const baseUrl = "https://dm1.dmdevplatform.com/api/v2/index.php/";
const myHeaders = {headers: {'api-key': apiKey, 'dm': dm, 'cache-control': 'no-cache'}};

axios.get('https://dm1.dmdevplatform.com/api/v2/index.php/', myHeaders).then(function (response) {
    console.log(JSON.stringify(response));
    console.log('DAYUMMMM');
  })
  .catch(function (error) {
    console.log('BRUH');
  });
// const API_KEY = 'AIzaSyAMgGKIuzHAxehv0qXBnc1bb0ODM6qHsJg';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

// axios({	
//     method: 'get',
//     url: "https://jsonplaceholder.typicode.com/posts", 
//     auth:
//         {
//             username: 'dm6000',
//             password: '337da68a2d6b2f2679d08eba30d9eec6'
//         }
// }).then(function(response){console.log(JSON.stringify(response))})
// Take this compenent's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));