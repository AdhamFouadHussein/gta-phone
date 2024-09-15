import ActionButtonProps from "./actionButton/ActionButtonProps";

export interface FloatingActionButtonProps {
  buttons: Omit<ActionButtonProps, "onClick">[];
  onLike: () => void;
  onUserShow: () => void;
}
