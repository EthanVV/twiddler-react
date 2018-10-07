class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="tweet">
        <div class="username">{this.props.tweet.user}</div>
        <div class="timeStamp">timeStamp goes here</div>
        <div class="message">{this.props.tweet.message}</div>
      </div>
    )
  }
}

var Tweets = (props) => {
  return (
    <ul>
      {props.tweets.map(tweet =>
        <Tweet tweet={tweet}/>
      )}
    </ul>
  )
}

var testData = window.streams.home;//[{user: "douglascalhoun", message: "just debugged a new form of mind #magic"}];
const newLocal = this;
console.log();

ReactDOM.render(<Tweets tweets = {testData} />, document.getElementById('app'));