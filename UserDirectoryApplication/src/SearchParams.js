import React, { useState, useEffect } from "react";
import Results from "./Results";
import axios from 'axios';


const SearchParams = () => {
  const [pageNo, setPageNo] = useState(1);
  const [users, setUsers] = useState([]);
  const [defaultObject, setObject] = useState({ _page: '1' , _limit: '10', sdfds: null });
  const requestUsers = async (object = defaultObject) => {
    // eslint-disable-next-line no-unused-vars
    let o = Object.fromEntries(Object.entries(object).filter(([_ , v]) => v != null));
     await axios.get('http://localhost:5000/users', { params: o }) .then(response => {
      setUsers(response.data || [])
  })
  .catch(function(error) {
      // eslint-disable-next-line no-console
      console.log(error);
  });
  }

  useEffect(() => {
    setUsers([])
    requestUsers();
  }, [setUsers]);

  return (
    <div className="search-params">
        <label htmlFor="search">
          Page No: {pageNo}
          <input
            id="search"
            placeholder="search by complete full name"
            onChange={e => {
              setObject({ _page: 1 , _limit: '10', ['Full Name']: e.target.value });
              if(e.target.value !== ''){requestUsers({ _page: 1 , _limit: '10', ['Full Name']: e.target.value })}
              else requestUsers({ _page: 1 , _limit: '10'});
              
            }}
          />
        </label>
      <form
        onSubmit={e => {
          if(pageNo !== 1) {
            setPageNo(pageNo - 1);
          e.preventDefault();
          setObject({ _page: pageNo - 1 , _limit: '10' });
          requestUsers({ _page: pageNo - 1 , _limit: '10' });
        }
      }}
      >
        <button>Previous</button>
      </form>
      <form
        onSubmit={e => {
          setPageNo(pageNo + 1)
          e.preventDefault();
          setObject({ _page: pageNo + 1 , _limit: '10' });
          requestUsers({ _page: pageNo + 1 , _limit: '10'});
        }}
      >
        <button>Next</button>
      </form>
      <Results users={users} />
    </div>
  );
};

export default SearchParams;
