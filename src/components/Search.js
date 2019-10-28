import React from 'react';
import ResultList from './ResultList'

export default ({term, handleChange, data, isLoading, isError}) => {
    return (
      <>
        <h1>Wikipedia App</h1>
        <div className="input">
          <input
            type="text"
            value={term}
            onChange={handleChange}
            placeholder='Search wikipedia'
          />
        </div>
        <ResultList data={data} isLoading={isLoading} isError={isError} />
      </>
  );
}