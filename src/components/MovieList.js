import React, {useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
// import Item from '../components/Item'

export default function MovieList(data) {
    const [selectedFilm, setselectedFilm] = useState(null);
    console.log(selectedFilm)
      
    return (
        <div>
        { !data ? 
             (
                 <div>no data yet</div>
                 )
         :  (  
            <DataTable value={data.movies} selection={selectedFilm} onSelectionChange={e => setselectedFilm(e.value)} dataKey="episode_id">
            
                <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                <Column field="title" header="Title"></Column>
                <Column field="episode_id" header="Episode"></Column>
                <Column field="director" header="Director"></Column>
            </DataTable>
            )
        }
        </div>
    )
}
