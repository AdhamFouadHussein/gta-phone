import { useEffect } from "react";

type MessageHandler<T> = (payload: T) => void;

export const useHandleNuiMessage = <T>(
    messageType: string,
    handler: MessageHandler<T>
): void => {
    const handleNuiMessage = (event: MessageEvent) => {
        const { data } = event;
        if (data.type === messageType) {
            handler(data.payload);
        }
    };

    useEffect(() => {
        window.addEventListener("message", handleNuiMessage);

        return () => {
            window.removeEventListener("message", handleNuiMessage);
        };
    }, []);
};
