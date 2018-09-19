// this is a basic TypeScript program
// to ensure that the type defs in index.d.ts
// allow the TS compiler to successfully import
// and interact with the JS client

import { Client } from '..';
const client = new Client('API_KEYYY')
client.notify(new Error('flop'))
client.setUser('123', 'B. Nag', 'bugs.nag@bugsnag.com')
