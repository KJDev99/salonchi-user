import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import queryString from 'query-string';

const fetchPokemon = async (pageParam = 0) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=100`
  );
  return data;
};

export default function InfinityScreen() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(['poke'], ({ pageParam }) => fetchPokemon(pageParam), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.next) {
          const parsed = queryString.parseUrl(lastPage.next);
          return parsed.query.offset;
        }

        return null;
      },
    });

  return status === 'loading' ? (
    <p>loading...</p>
  ) : status === 'error' ? (
    <p>error...</p>
  ) : (
    <div className="App">
      <h1>Infinite Query</h1>
      {data.pages.map((page, idx) => {
        return (
          <React.Fragment key={idx}>
            {page.results.map((poke: any) => (
              <p key={poke.name}>{poke.name}</p>
            ))}
          </React.Fragment>
        );
      })}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
    </div>
  );
}
