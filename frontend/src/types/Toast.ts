export type ToastType = {
    id?: number;
    type: "default" | "danger" | "success";
    text: string;
    // eslint-disable-next-line no-unused-vars
    onRemoveMessage?: (id: number) => void;
};
