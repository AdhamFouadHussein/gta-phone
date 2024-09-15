import { FloatingActionButtonProps } from "./FloatingActionButtonProps";
import ActionButton from "./actionButton/ActionButton";
import useDrawerStore from "../../store/commentsStore/commentsStore";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function FloatingActionButton({
  buttons,
  onUserShow,
  onLike,
}: FloatingActionButtonProps) {
  const { openDrawer } = useDrawerStore();

  return (
    <div className={"floating-action-button"}>
      {buttons.map((item, index) => {
        return (
          <ActionButton
            {...item}
            key={index}
            onClick={(id) => {
              if (id == "user") {
                onUserShow();
              }
              if (id === "message") {
                openDrawer();
              }
              if (id == "like") {
                onLike();
              }
            }}
          />
        );
      })}
    </div>
  );
}
