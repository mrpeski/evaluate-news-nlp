import server from "./server.js";

const {app, router} = server();

app.use('', router);

app.listen(8081, function(){
    console.log('Listening at port 8081')
})
