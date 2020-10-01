import React from 'react';
import { Content } from './home.style';
import Select from '../../select/select';
/**
 * This is the Home component
 * @returns {React.Component}
 */

const arr = ['banana', 'maça', 'abacate']
const Home = () => (
  <>
    <Content>Pagina Home</Content>
    <Select options={arr} small  />
  </>
);

export default Home;
