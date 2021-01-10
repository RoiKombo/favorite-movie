import React from 'react';
import Styled from 'styled-components';

const FavoriteMovies = Styled.div`
    color:#495057;
    margin-left: 15px;

`

export default function Favorites(data) {
    return (
        <FavoriteMovies>
        <h2>Favorite Movies</h2>
            {!data.favorites ? 
            <div>No favorites selected yet</div>
            :
            <div>
                {data.favorites.map(item => <li key={item.episode_id}>{item.title }</li>)}
            </div>}
        </FavoriteMovies>
    )
}
