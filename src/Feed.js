import React from "react"
import { Avatar} from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import "./css/feed.css"
import Post from "./Post"

function Feed(){
    return(
        <div className = "feed">
            <div className="feed_input">
                <div className="feed_form">
                    <Avatar />
                    <form>
                        <input type = "text" placeholder="Start a post"/>
                        <input type="submit" />
                    </form>
                </div>
            

            <div className="feed_options">
                <div className="option">
                <InsertPhotoIcon style={{color:'#70b5f9'}}/>
                    <span>Photo</span>
                </div>

                <div className="option">
                <MovieIcon style={{color:'7fc15e'}}/>
                    <span>Video</span>
                </div>

                <div className="option">
                <CalendarMonthIcon style={{color:'e7a33e'}}/>
                    <span>Event</span>
                </div>

                <div className="option">
                <DriveFileRenameOutlineIcon style={{color:'fc9295'}}/>
                    <span>Write Article</span>
                </div>
            </div>
            </div>

            <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/>
            <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/>
            <Post name="Shridutt" description="ReactJS" message="This is a test." photoURL=""/>
        </div>
    )
}

export default Feed;