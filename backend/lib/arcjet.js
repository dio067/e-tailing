import arcjet, {tokenBucket, shield, detectBot} from '@arcjet/node';

import 'dotenv/config';

export default arcjet ({
    key: process.env.ARCJET_KEY,
    log: console,
    characteristics: ["ip.src"],
    rules: [
        shield( {mode: 'LIVE'}),
        detectBot( {mode: 'LIVE',
        
            allow: [
            "CATEGORY:SEARCH_ENGINE_BOT"
            ]

}),
        tokenBucket( {
            mode: 'LIVE',
            refillRate: 5,
            interval: 10,
            capacity: 10 
        }) 

    ]
})