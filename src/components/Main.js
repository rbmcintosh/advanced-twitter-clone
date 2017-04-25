import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import TweetBox from './TweetBox';
import TweetFeed from './TweetFeed';


function Main(){
  return (
    <div id="main">
    <LeftSide />
    <TweetBox />
    <RightSide />
    <TweetFeed />
    </div>
    );
}
export default Main;