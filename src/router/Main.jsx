import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {mainAction} from '../action/mainAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {Menu} from '../components/Menu';
import { Products } from '../components/Products';

export const Main = (props) => {
  const dispatch = useDispatch()
  const mainData = useSelector(state => state.main.mainState)
  React.useEffect(() => {
    console.log(mainData);
    dispatch(mainAction())
  },[])
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Furniture Finder
          </Typography>
        </Toolbar>
        <Container >
          <Menu />
        </Container>
      </AppBar>
      <Container>
        <Products/>
      </Container>
    </>
  );
}
