import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Answers from '../pages/Answers';
import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Ranking from '../pages/Ranking';
import RankingTest from '../pages/RankingTest';
import Menu from '../pages/Menu';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/menu" isPrivate exact component={Menu} />
    <Route path="/ranking" isPrivate exact component={Ranking} />
    <Route path="/ranking-test" isPrivate exact component={RankingTest} />
    <Route path="/questions" isPrivate exact component={Questions} />
    <Route path="/answers" isPrivate exact component={Answers} />
  </Switch>
);

export default Routes;
