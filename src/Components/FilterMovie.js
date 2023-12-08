import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';
const FilterMovie=({setSearch})=>{
    return(
        <div>
            <input onChange={(e)=> setSearch(e.target.value)} type="text"/>
            <Rating/>
            <Button>Reset</Button>
        </div>
    )
}

export default FilterMovie