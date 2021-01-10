import React, {useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import Item from '../components/Item'

export default function MovieList(data) {
    // const [filmData, setFilmData] = useState(data)
    // console.log('movieList',data)
      
    return (
        <div>
        { !data ? 
             (
                 <div>no data yet</div>
                 )
         :  (  
             <DataTable value={data.movies}>
                <Column field="title" header="Title"></Column>
                <Column field="episode_id" header="Episode"></Column>
                <Column field="director" header="Director"></Column>
            </DataTable>
            )
        }
            {/* {Object.values(data).map((movie, i) => (
                <Item title={movie.title} key={i} />
                ))} */}
        </div>
    )
}
