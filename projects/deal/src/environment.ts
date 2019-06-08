export interface envConfigI {
    //interface exported to resolve build issue => projects/deal/src/lib/deal.component.ts(19,3): error TS4029: Public property 'environment' of exported class has or is using name 'envConfigI'
    //from external module "D:/dev/deal-lib/projects/deal/src/environment" but cannot be named.
    /** 'DEV'|'PROD' etc */
    envCode?: string,
    BASE_URL?: string,
}

export var environment: envConfigI = {};//will be updated to environment val from below 
export var environments = {
    DEV: {
        envCode: 'DEV',
        BASE_URL: 'http://deal.dev.com'
    },
    PROD: {
        envCode: 'PROD',
        BASE_URL: 'http://deal.prod.com'
    }
}