
import {Home} from './components/home';
import AddStudent from './containers/add-student';
import {NotFound} from './components/not-found';
import StudentDetails from './containers/student-details';
import {useState} from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'
import promiseMW from 'redux-promise';
const createStoreWithMW = applyMiddleware(promiseMW)(createStore)



export const App = ()=> {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Provider store={createStoreWithMW(reducers)}>
        <BrowserRouter>
          <div className="conatainer">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-dark bg-dark fixed-top ">
                  <ul className="navbar-nav">
                    <li className="navbar-brand">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-outline-light my-2 my-sm-0"
                    onClick={handleShow}
                  >
                    Add Student
                  </button>

                  {/* bootstrap modal */}
                  <AddStudent show={show} handleClose={handleClose} />
                </nav>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/student/:id" component={StudentDetails} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
