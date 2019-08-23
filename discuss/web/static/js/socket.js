import {Socket} from "phoenix"

let socket = new Socket("/socket", {params: {token: window.userToken}});

socket.connect();

const createSocket = (topicId) => {
    let channel = socket.channel(`comments:${topicId}`, {});
    channel.join()
        .receive("ok", resp => {
            console.log("Joined Successfully", resp)
        })
        .receive("error", resp => {
            console.log("Unable to Join", resp)
        });
};

window.createSocket = createSocket;