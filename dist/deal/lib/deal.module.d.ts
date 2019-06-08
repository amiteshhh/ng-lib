export declare class DealModule {
    /**Intializes environment specific api end points and other configurable items.
     * @param envCode Typically DEV, PROD etc. Refer environment.ts of Deal library project.
     * @param defaults Optional object to be passed to merge in the env config.
     * @example
     * 1. DealModule.configEnv('DEV')
     * 2. DealModule.configEnv('DEV', {COMMON_API: 'https://someurl.com'})
     */
    static configEnv(envCode: string, defaults?: Object): void;
}
