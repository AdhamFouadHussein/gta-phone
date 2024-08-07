import UserVideoListProps from "./UserVideoListProps";
import './style.css'
import React from "react";

export default function UserVideoList({videos}: UserVideoListProps) {
    return <div className={'user-video-list'}>
        {videos.map(({url}, index) => {
            return (
                <div className={'user-profile-video-wrapper'}>
                    <video className={'user-profile-video'} key={index} loop autoPlay height={"200"} width="120">
                        <source src={url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
        })

        }
    </div>
}