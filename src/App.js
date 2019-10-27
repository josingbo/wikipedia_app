import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'
import Search from './components/Search';

import fetchDataApi from './hooks/api/fetchDataApi'
import WikiPage from './components/WikiPage'

const renderSearch = (data, term, handleChange, isLoading, isError) =>    
    <Search 
      term={term}
      handleChange={handleChange}
      data={data}
      isLoading={isLoading}
      isError={isError}
    />

export default () => {
  const [term, setTerm] = useState('');
  
  const handleChange = e => {
    setTerm(e.target.value)
  }
  
  const [{ data, isLoading, isError }] = fetchDataApi(term, []);

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" render={() => 
            <Search 
              term={term}
              handleChange={handleChange}
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
            }           
          />
          <Route path="/:title" component={WikiPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}