import { useMediaStore } from "../../store/captruedMedia/captruedMediaStor";
import style from "./style.module.css";
import line from "../../../assets/icons/iphoneCamera/Line 3.svg";
import deleteIcon from "../../../assets/icons/iphoneCamera/delete.png";
import { useNavigate } from "react-router-dom";
export default function CapturedImagePage() {
  const { imagePreview, setImagePreview } = useMediaStore();
  const navigator = useNavigate();
  return (
    <div className={style.container}>
      <div></div>
      <img src={imagePreview ?? ""} className={style.image} />
      <div className={style.actionbar}>
        <img
          onClick={() => {
            setImagePreview(null);
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
