import {FloatingActionButtonProps} from "./FloatingActionButtonProps";
import ActionButton from "./actionButton/ActionButton";
import useDrawerStore from "../../store/commentsStore/commentsStore";
import {useNavigate} from "react-router-dom";
import './style.css'

export default function FloatingActionButton({
                                                 buttons
                                             }: FloatingActionButtonProps) {
    const {openDrawer} = useDrawerStore();
    const navigator = useNavigate();
    return (
        <div className={'floating-action-button'}>
            {
                buttons.map((item, index) => {
                    return <ActionButton {...item}
                                         key={index}
                                         onClick={(id) => {
                                             if (id == "user") {
                                                 navigator("/tiktok-profile")
                                             }
                                             if (id === "message") {
                                                 openDrawer()
                                             }
                                         }}/>
                })
            }
        </div>
    )
}