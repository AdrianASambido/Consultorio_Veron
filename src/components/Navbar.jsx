import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #3985AF;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 2px 8px rgba(26,60,90,0.07);
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
  &:hover {
    color: #B5E9FC;
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/beneficios">Beneficios</NavLink>
      <NavLink to="/importancia">Importancia</NavLink>
      <NavLink to="/recomendaciones">Recomendaciones</NavLink>
      <NavLink to="/infancia">Infancia</NavLink>
      <NavLink to="/reserva">Reserva</NavLink>
    </Nav>
  );
} 