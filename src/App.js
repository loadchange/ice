import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { AppRouter, AppRoute } from "@ice/stark";
import "./App.css";

function Home() {
  return (
    <>
      <h1>Home</h1> <Link to="/dashboard/invoices">Invoices</Link> | <Link to="/seller">Seller</Link>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard/invoices">Invoices</Link> | <Link to="/dashboard/team">Team</Link>
      </nav>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Team() {
  return <h1>Team</h1>;
}

const FrameworkRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/invoices" exact component={Invoices} />
      <Route path="/dashboard/team" exact component={Team} />
    </Switch>
  );
};
const FrameworkRouterMemo = React.memo(FrameworkRouter);

function App() {
  return (
    <>
      <Link to="/seller">Seller</Link> | <Link to="/dashboard/invoices">Invoices</Link> | <Link to="/">Home</Link> | <Link to="/dashboard/team">team</Link>
      <div className="myApp">
        <AppRouter>
          <AppRoute hashType loadScriptMode="import" activePath="/seller" title="商家平台" entry="http://127.0.0.1:3333" />
          <AppRoute hashType activePath="*" render={() => <FrameworkRouterMemo />} />
        </AppRouter>
      </div>
    </>
  );
}

export default App;
