export declare var APP_CONFIG: appConfig;
export declare var environment: {
    DEV: {
        envCode: string;
        BASE_URL: string;
    };
    PROD: {
        envCode: string;
        BASE_URL: string;
    };
};
interface appConfig {
    envCode?: 'DEV' | 'PROD';
    BASE_URL?: string;
}
export {};
