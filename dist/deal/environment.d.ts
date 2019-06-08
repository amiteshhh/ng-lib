export interface envConfigI {
    /** 'DEV'|'PROD' etc */
    envCode?: string;
    BASE_URL?: string;
}
export declare var environment: envConfigI;
export declare var environments: {
    DEV: {
        envCode: string;
        BASE_URL: string;
    };
    PROD: {
        envCode: string;
        BASE_URL: string;
    };
};
