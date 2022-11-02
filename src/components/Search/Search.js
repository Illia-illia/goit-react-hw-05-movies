import { useSearchParams } from 'react-router-dom';
import { Input, Wrap, WrapMain } from './Search.styled';

const Search = ({ onSubmit }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query');

  if (query !== '') {
    onSubmit(query);
  }

  const handleInput = e => {
    onSubmit(query);
    setSearchParam({ query: e.target.value });
  };

  return (
    <WrapMain>
      <Wrap>
        <Input type="text" onChange={handleInput} value={query} />
      </Wrap>
    </WrapMain>
  );
};

export default Search;
