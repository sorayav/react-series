import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../scss/main.scss';
import fetchShows from '../services/FetchData';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import FilterStatus from './FilterStatus';
import FilterSearch from './FilterSearch';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderShowDetails = this.renderShowDetails.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSearchShow = this.handleSearchShow.bind(this);
    this.state = {
      data: [],
      isRunning: false,
      searchShow: ''
    }
  }

  componentDidMount(){
    fetchShows()
    .then(data => {
      this.setState({
        data: data,
      })
    })
  }

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    })
  }

  handleSearchShow(value) {
    this.setState({
      searchShow:value
      }
    )
  }

  renderShowDetails(props){
    const urlId = props.match.params.id;
    const shows = this.state.data;
    for (let showEl of shows) {
      if (showEl.show.id === parseInt(urlId)) {
       return <ShowDetails show={showEl}/>
      }
    }
  }

  render() {
    const {data, isRunning, searchShow} = this.state;
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <header>
                <h1>Girls shows.</h1>
                <div className="filters">
                <FilterSearch handleSearchShow={this.handleSearchShow} searchShow={searchShow} />
                <FilterStatus handleCheckbox={this.handleCheckbox} isRunning={isRunning}/>
                </div>
              </header>
          {!data ? "Cargando series" :
          <ShowList isRunning={isRunning} searchShow={searchShow} dataList={data} />
        }
          </Route>
          <Route exact path="/show/:id" render={this.renderShowDetails}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
