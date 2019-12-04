import React from 'react';
import {CustomizedMeme} from './mememuc';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface HisotryProps {
  // TODO: props use to pass savedMemes
    // TODO: props use to pass savedMemes
    historyMemes: CustomizedMeme[]

    //callback that allow child components update properties selectedBaseImage and caption in the history component
    changeShownMeme:
}

//TODO: Change selectedBaseImage and caption from the meme show in preview window
const showMeme = (history:CustomizedMeme[]) => {

};

const deleteFromHistory = (history:CustomizedMeme[], meme: CustomizedMeme) => {
    var index = history.indexOf(meme);
    delete history[index];
};

// The MemeMUCHistoryComponent is a horizontal bar located 
// at the webpage bottom
const OmmMemeMUCHistory: React.FC<HisotryProps> = (props) => {
  // TODO: this property should contain all saved memes, which already 
  // exists in the same-named parent component's property.

  return (
    <div className="history-container">
      <h4>My Favorite Memes</h4>
      <div className="meme-history">
        {/* 
        TODO: this container should contain the saved memes.
        TODO: each saved meme should be rendered as div container 
              containing an img tag (the meme itself) and a mat-icon 
              tag (delete icon)
        TODO: use the css class a-meme-history-item for a meme's 
              container in order to apply the provided styling */

            props.historyMemes.map((meme) => {
                return (
                    <div className="a-meme-history-item">
                        <img src={meme.link.toString()} onClick={() => {showMeme(props.historyMemes) }} />
                        <DeleteForeverIcon onClick={()=>{deleteFromHistory(props.historyMemes, meme)}}></DeleteForeverIcon >
                    </div>
                );
            })

        }
      </div>
    </div>
  )
};

export default OmmMemeMUCHistory;
