function getTimeStatement(tweet) {
  var secondsSince = (new Date().getTime() - tweet.created_at.getTime()) / 1000;
  var justNowThreshold = 10;
  var minuteInSeconds = 60;
  var hourInSeconds = minuteInSeconds*60
  var dayInSeconds = hourInSeconds*24;
  
  if (secondsSince < justNowThreshold) {
    return 'just now';
  } else if (secondsSince < minuteInSeconds) {
    return `${Math.floor(secondsSince)} seconds ago`;
  } else if (secondsSince < hourInSeconds) {
    return `${Math.floor(secondsSince / minuteInSeconds)} minutes ago`;
  } else if (secondsSince < dayInSeconds) {
    return `${Math.floor(secondsSince / hourInSeconds)} hours ago`;
  } else {
    return tweet.created_at.toDateString();
  }
};