import {useState,useEffect} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SingleEmoji = ({singleEmoji}) => {

    const [isCopied,setCopied] = useState(false);

    useEffect(() => {
        if(isCopied)
        {
            setTimeout(() =>{
                setCopied(false);
            },3000);
        }
    },[isCopied])
    // console.log(isCopied)

    return(
        <CopyToClipboard text={singleEmoji.emoji} onCopy={ _ => setCopied(true)}>
        <div className={`item ${isCopied?'copied':''}`}>
         <p className="emoji">{isCopied?"✅":(singleEmoji.emoji)}</p>
         <p className="text">{singleEmoji.description}</p>
        </div>
        </CopyToClipboard>
    )
}

export default SingleEmoji;