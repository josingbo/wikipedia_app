import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Result from './Result'

export default ({data, isLoading, isError}) => {
  const resultList = data.map(result => {
    return (
      <CSSTransition key={result.pageid} timeout={500} classNames="move">
        {<Result info={result}/>}
      </CSSTransition>
    )
  })
  return (
    <div className="result-list">
      <TransitionGroup className="result-list-transition">
        {resultList}
      </TransitionGroup>
    </div>
  );
}