const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,
    onConnect(session, callback) {
        console.log('onConnect',session.id);
        callback(); // Call the callback to allow the connection
    },
    onMailFrom(adress,session,callback){
        console.log('onMailForm',adress.address,session.id);
        callback()
    },
    onRcptTo(adress,session,callback){
        console.log('onRcptForm',adress.address,session.id);
        callback()
    },
    onData(stream,session,callback){
        stream.on('data',(data)=>console.log('onData ${data.toString()}'))
        stream.on('end',callback)
    }
});

server.listen(25, () => console.log('Server running on port 25'));
