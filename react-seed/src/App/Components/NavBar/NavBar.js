import React from 'react';
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';


const NavBar = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const NavBarContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.div`
  font-size: 2.7rem;
  color: #fff;
`

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
`

const NavLink = styled.li`
  font-size: 1.8rem;
  color: #fff;
  margin-right: 3rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: #00477d;
  }
`

const index = () => {
  return (
    <div>
    <NavBar>
      <NavBarContainer>
        <Brand>React Digital Experience</Brand>
        <NavLinks>
          <NavLink>Menu-1</NavLink>
          <NavLink>Menu-2</NavLink>
          <NavLink>
            <Grid item lg={12} >
              <ExitToAppIcon />
            </Grid>
          </NavLink>
        </NavLinks>
      </NavBarContainer>
    </NavBar>
    </div>
  )
}

export default index
