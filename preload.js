const ipc = require('electron').ipcRenderer;

window.hudid = "template"

window.lctl = require('./lib/templatectl.js')

console.log("pre-load : " , __dirname);

window.lsh = {}
// ipc to the main process
window.lsh.send = function (channel,data) {
    ipc.send(channel, data)
}

window.fromMain = {}
window.dataUpdate = {}
ipc.on('from_mainProcess', (event, data) => {
    if (fromMain[data.type]){
        fromMain[data.type](data)
    }

})
ipc.on('data_update', (event, data) => {
    if (dataUpdate[data.type]){
        dataUpdate[data.type](data)
    }

})


//-------------- launch control messages-----------------------------------------
lctl.msg.on("somthing", function(vol){
    //handleVolumeUpdate(vol)
    //lsh.send("data_update", { type:"volume_update", data:vol , hudid:hudid} )

})

lctl.msg.on("somthing_else", function(err){
    //handleVolumeError(data)
    //lsh.send("data_update", { type:"volume_error", data:err, hudid:hudid} )
})

window.onload = function() {
    // ??
};
