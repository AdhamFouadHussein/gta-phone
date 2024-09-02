import style from "./style.module.css";
import line from "../../../assets/icons/iphoneCamera/Line 3.svg";
import deleteIcon from "../../../assets/icons/iphoneCamera/delete.png";

import { useMediaStore } from "../../store/captruedMedia/captruedMediaStor";
import { useNavigate } from "react-router-dom";

export default function CapturedVideoPage() {
  const { videoPreview, setVideoPreview } = useMediaStore();
  const navigator = useNavigate();
  return (
    <div className={style.container}>
      <video
        src={videoPreview ?? ""}
        controls
        style={{
          width: "100%",
          height: "75%",
        }}
      />
      <div className={style.actionbar}>
        <img
          onClick={() => {
            setVideoPreview(null);
            navigator("/iphone-camera");
          }}
          className={style.deleteIcon}
          width={20}
          height={20}
          src={deleteIcon}
        />
      </div>
      <div className={style.footer}>
        <img src={line} />
      </div>
    </div>
  );
}
