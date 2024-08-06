import ActionButtonProps from "./ActionButtonProps";
import './style.css'

export default function ActionButton({
                                         label,
                                         iconSrc,
                                         onClick,
                                         id
                                     }: ActionButtonProps) {
    return (<div className={'action-button'} onClick={() => onClick(id)}>
        <img src={iconSrc} alt={label}/>
        <div className={'action-button-label'}>{label}</div>
    </div>)
}