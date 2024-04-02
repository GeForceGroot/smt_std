import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Benifits from './components/Benifits';
import AssigementProvideType from './components/AssigementProvideType';
import Writer from './components/Writer';
import SubjectType from './components/SubjectType';
import Feedback from './components/Feedback';
import AcademicImpact from './components/AcademicImpact';
import Footer from './components/Footer';
import WhatApp from './components/WhatApp';

function App() {
  return (
    <>
      <Navbar />
      <WhatApp />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Carousel />
            <Benifits />
            <Writer />
            <AssigementProvideType />
            <Feedback />
            <AcademicImpact />
          </Route>
          <Route exact path='/all-subject'>
            <SubjectType />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
