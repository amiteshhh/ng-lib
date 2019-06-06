export var APP_CONFIG: appConfig = {};//will be updated to environment val from below  
export var environment = {
    DEV: {
        envCode: 'DEV',
        BASE_URL: 'http://deal.dev.com'
    },
    PROD: {
        envCode: 'PROD',
        BASE_URL: 'http://deal.prod.com'
    }
}

interface appConfig {
    envCode?: 'DEV'|'PROD',
    BASE_URL?: string,
}