


fromMain.start_realtime_data = function(data){
    console.log("start_realtime_data");
    STATE.realtime = true

}
fromMain.stop_realtime_data = function(data){
    console.log("stop_realtime_data");
    STATE.realtime = false

}
fromMain.config_definition = function(data){
    console.log("config_definition");
    config = data.data
}

/*
fromMain.position_size_update_pass = function(data){
    console.log("position_size_update_pass",data);
}
*/

//-----------------------window buttons----------------------------------------
// menu and main button listeners
let window_buttons = document.getElementsByClassName("window_btn");
for (var i = 0; i < window_buttons.length; i++) {
    window_buttons[i].addEventListener("click", handleWindowButton);
}


// minimum/maximize/close
function handleWindowButton(event) {
    let btn_id
    if (typeof(event) === "string") {
        btn_id = event
    } else {
        btn_id = event.target.id
    }
    console.log("win-button", btn_id);
    lsh.send("hud_window",{type:"window_button", button:btn_id , hudid: hudid})
}
