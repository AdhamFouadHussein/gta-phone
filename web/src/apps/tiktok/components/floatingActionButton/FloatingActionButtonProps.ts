import ActionButtonProps from "./actionButton/ActionButtonProps";

export interface FloatingActionButtonProps {
    buttons: Omit<ActionButtonProps, "onClick">[]
}