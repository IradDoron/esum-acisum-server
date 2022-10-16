interface ENV {
    PORT: number | undefined;
    HOST: string | undefined;
}
export declare const sanitizedConfig: Required<ENV>;
export declare type Config = Required<ENV>;
export {};
