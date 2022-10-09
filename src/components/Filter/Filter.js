import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { Label, Input, FilterText } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <Label>
      <FilterText>Find contacts by name</FilterText>
      <Input onChange={onChangeFilter} type="text" name="filter" />
    </Label>
  );
};

export default Filter;
