import { Btn, Search } from './BackBtn.styled';

export default function GoBackBtn({ data }) {
  return (
    <Btn>
      <Search to={data}>Go back</Search>
    </Btn>
  );
}
