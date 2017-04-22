import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import TweetBox from './TweetBox';


function Main(){
  return (
    <div id="main">
    <LeftSide />
    <TweetBox />
    <RightSide />
    </div>
    );
}
export default Main;