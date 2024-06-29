type Props = {
    counter: number;
    className?: string;
};
function Count({ counter, className }: Props) {
    return (
        <div
            className={`bg-[#00ac81] text-[#0f1c24] text-xs font-[500] w-[18px] h-[18px] rounded-full text-center ${className}`}>
            {counter}
        </div>
    );
}

export default Count;
