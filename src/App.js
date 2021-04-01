import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./component/login";
import SignUp from "./component/signup";
import editProfile from "./component/editProfile";
import mainApp from "./page/MainApp";
import alertPage from "./page/AlertPage"
import card from "./page/CardPage"
import task from "./page/TaskPage"

function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/profile" component={editProfile} />
        <Route path="/main-app" component={mainApp} />
        <Route path="/alert" component={alertPage} />
        <Route path="/card" component={card} />
        <Route path="/task" component={task} />
      </Switch>
    </Route>
  );
}

export default App;
