
        let moduleRoot = 'D:/Program Files/Black Tree Gaming Ltd/Vortex/resources/app.asar.unpacked/node_modules';

        let ipcPath = 'vortex_elevate_symlink';

      
        let main = function remoteCode(ipcClient,req){const RETRY_ERRORS=new Set(["EPERM","EBUSY","EIO","EBADF","UNKNOWN"]);process.noAsar=!0
;const doFS=(op,tries=5)=>op().catch(err=>{return RETRY_ERRORS.has(err.code)&&tries>0?(delay=100,new Promise(resolve=>{setTimeout(resolve,delay)})).then(()=>doFS(op,tries-1)):Promise.reject(err);var delay});return new Promise((resolve,reject)=>{
const fs=req("fs").promises,emit=(message,payload)=>{ipcClient.sendMessage({message:message,payload:payload})},handlers={"link-file":payload=>{const{source:source,destination:destination,num:num}=payload
;return doFS(()=>fs.symlink(source,destination)).catch(err=>"EEXIST"!==err.code?Promise.reject(err):doFS(()=>fs.unlink(destination)).then(()=>doFS(()=>fs.symlink(source,destination)))).then(()=>{emit("log",{level:"debug",message:"installed",meta:{
source:source,destination:destination}}),emit("completed",{err:null,num:num})}).catch(err=>{"EISDIR"===err.code&&emit("report","not-supported"),emit("completed",{err:Object.assign({message:err.message},err),num:num})})},"remove-link":payload=>{
const{destination:destination,num:num}=payload;doFS(()=>fs.lstat(destination)).then(stats=>{if(stats.isSymbolicLink())return doFS(()=>fs.unlink(destination))}).then(()=>{emit("completed",{err:null,num:num})}).catch(err=>{emit("completed",{err:{
code:err.code,message:err.message,stack:err.stack},num:num})})},quit:()=>{resolve(),resolve=void 0}};ipcClient.on("message",data=>{const{message:message,payload:payload}=data;void 0!==handlers[message]?handlers[message](payload):emit("log",{level:"error",
message:`unknown message "${message}", expected one of "${Object.keys(handlers).join(", ")}"`,meta:{got:message}})}),ipcClient.on("disconnect",()=>{void 0!==resolve&&resolve()}),emit("initialised",{pid:process.pid})})};

        const __req = require;const handleError=error=>{
console.error("Elevated code failed",error.stack)};process.on("uncaughtException",handleError),process.on("unhandledRejection",handleError),module.paths.push(moduleRoot);const imp={net:__req("net"),JsonSocket:__req("json-socket"),path:__req("path")
},client=new imp.JsonSocket(new imp.net.Socket);client.connect(imp.path.join("\\\\?\\pipe",ipcPath)),client.on("connect",()=>{const res=main(client,__req);void 0!==(null==res?void 0:res.catch)&&res.catch(error=>{client.emit("error",error.message)
}).finally(()=>{client.end(),process.exit(0)})}).on("close",()=>{process.exit(0)}).on("error",err=>{"EPIPE"!==err.code&&console.error("Connection failed",err.message)})

      