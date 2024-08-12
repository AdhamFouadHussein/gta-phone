import './showUploadedVideoPageStyle.css'
import useUploadedVideoStore from "../../store/uplaodedVideoStore/uplaodedVideoStore";
import React from "react";
import MainLayout from "../../components/mainLayout/MainLayout";
import {getBackgroundImageStyle} from "../../helpers/getBackgroundImageStyle";

export default function ShowUploadedVideoPage() {
    const {uploadedVideo} = useUploadedVideoStore()
    return (
        <MainLayout
            mode={"dark"}
            footer
            styles={{
                backgroundColor:"black"
            }}>
            <div className={'uploaded-video-page'}>
                <video
                    key={uploadedVideo?.videoUrl}
                    loop
                    autoPlay
                >
                    <source src={uploadedVideo?.videoUrl} type="video/mp4"/>
                </video>
            </div>
            <div className={'show-uploaded-video-action-bar'}>
                <button className={'show-uploaded-next-button'}>Next</button>
            </div>

        </MainLayout>
    )


}