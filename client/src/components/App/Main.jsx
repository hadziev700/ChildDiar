import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Admin from './Admin/Admin';
import Child from './Child';
import Event from './Event';


function Main(props) {
  return (
    <div>
      <Container maxWidth="xl">
        <Switch>
          {/*<Route exact path="/">
            <Home />
          </Route>*/}
          <Route path="/login" exact>
            <SignIn/>
          </Route>
          <Route  path="/registration" exact>
            <SignUp/>
          </Route>
         {/* <Route path="/admin" exact>
            <Admin/>
          </Route>*/}
            <Route path="/notes/all" exact>
              <Child/>
            </Route>
          <Route path="/event" exact>
            <Event/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default Main;