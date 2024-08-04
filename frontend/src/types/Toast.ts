export type ToastType = {
    id?: number;
    type: "default" | "danger" | "success";
    text: string;
    duration: number;
    // eslint-disable-next-line no-unused-vars
    onRemoveMessage?: (id: number) => void;
};
