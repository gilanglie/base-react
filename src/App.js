import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Route, Switch } from 'react-router' // react-router v4/v5

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo( 
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  let routes = (
    <Switch>
      <Route exact path="/" render={() => (<div>Match</div>)} />
      <Route render={() => (<div>404 Page Not Found</div>)} />
    </Switch>
  )
  return (
    <ThemeProvider theme={theme}>
      {routes}
    </ThemeProvider>
  );
}
