import { changeFilter } from '../../redux/filterSlice';
import { Label, Div } from './filter.styled';
import { useDispatch} from 'react-redux';






export const Filter = () => {
  const dispatch = useDispatch();

    return (
        <Label>
            <Div>Find contacts by names</Div>
            <input
                type="text"
                name="filter"                
               
				onChange={(e) => {dispatch(changeFilter(e.target.value))}}
            ></input>
           
        </Label>
    ) 
}