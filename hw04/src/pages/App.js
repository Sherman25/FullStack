import React from 'react';
import '../App.css';
import {Header, MainSection, SideBar} from "../";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "user": {},
            "posts": [],
            "popular": [],
            "latest": [],
        }
    }

    render(){
        return (
          <div>
              <Header/>
              <MainSection/>
              <SideBar/>
          </div>
        );
    }
}

export default App;