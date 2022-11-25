import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/сontactSlice';

export const Filter = () => {

   const filter = useSelector(state => state.contacts.filter);
   const dispatch = useDispatch();

    function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={filterName}
      />
    </Label>
  );
};


