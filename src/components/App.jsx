class App extends React.Component {
  
  constructor(props) {
    super(props),
    this.state = {
      currentVideo: null, 
      videos: [],
      details: '',
      statistics: ''
    };

  }

  handleClick (newVideo) {

    this.setState({currentVideo: newVideo});

  }

  handleSearch (query, token) {
    
    var resultsSearch = (data) => {

      this.setState({
        currentVideo: data[0],
        videos: data
      });
    };
    var detailsSearch = (data) => {
      console.log(data, 'dfs')
      this.setState({
        details: data[0],
        statistics: data
      });
    };
    // console.log(, 'obj.queryd');
    searchYouTube(query, resultsSearch, token);
    searchDetails(query, detailsSearch);
  }

  componentDidMount() {
    searchYouTube('default', (data) => {

      this.setState({
        currentVideo: data[0],
        videos: data
      });
    
    });
       
    
  }
 
  render () {
    return (
      
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
      
            <Search searchHandler = {this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="video-player">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currentVideo}/>
          </div>
        </div>
        
        <div className='video-list'>
          <div className="col-md-5">
            <VideoList clickHandeler = {this.handleClick.bind(this)} videos = {this.state.videos}/>
          </div>
        </div>
      </div>

    );
  }
}






// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


ReactDOM.render (

  <App />, 
  document.getElementById('app')

);


















