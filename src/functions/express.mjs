import server from "../server/server.js";
import serverless from "serverless-http";

const {app, router} = server();
const routerBasePath = process.env.NODE_ENV === 'dev' ? `/express` : `/.netlify/functions/express/`

app.use(routerBasePath, router);

export async function handler(event, context){
    const handler = serverless(app);
    return await handler(event, context)
}
