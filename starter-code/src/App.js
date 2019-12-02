import React from 'react'; 
import './App.css';
import './Header.css';
import './MainCover.css';



import Header from './Header';
import MainCover from './MainCover';
import ItemComponent from './ItemComponent';


class App extends React.Component {
 render () {
     return (
            <div className="app">
                
                <Header />
                <MainCover />
                <ItemComponent />

            </div>
     );
 }
}

export default App;