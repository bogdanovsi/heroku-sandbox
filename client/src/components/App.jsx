import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MongoInput from './MongoInput';
import Menu from './Menu';
import RouterList from './RouterList';

const styles = {
   
}

export default class App extends Component {
   render() {
      return (
         <>
            <div className="container main" style={styles.main} >
               <RouterList />
            </div>
         </>
      );
   }
}