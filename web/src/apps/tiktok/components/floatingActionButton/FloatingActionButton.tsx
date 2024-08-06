import {FloatingActionButtonProps} from "./FloatingActionButtonProps";
import ActionButton from "./actionButton/ActionButton";
import useDrawerStore from "../../store/commentsStore/commentsStore";
import './style.css'

export default function FloatingActionButton({
                                                 buttons
                                             }: FloatingActionButtonProps) {
    const {openDrawer} = useDrawerStore();
    return (<div className={'floating-action-button'}>
        {
            buttons.map((item, index) => {
                return <ActionButton {...item} key={index} onClick={(id) => {
                    // alert("id")
                    console.log(id)
                    openDrawer()
                    // if (id === "message") {
                    //     openDrawer()
                    // }

                }}/>
            })
        }
    </div>)
}