class WebSocketService {
    constructor(){
        this.ws = null;
        this.connected = false;
        this.listeners = [];
    }

    connect(url){
        this.ws = new WebSocket(url);

        this.ws.onopen = () =>{
            this.connected = true;
            this.listeners.forEach((listener) =>{
                this.ws.addEventListener((listener.addEventListener, listener.callback));
            });
        };

        this.ws.onclose = () =>{
            this.connected = false
        };

        this.ws.onerror = (error) =>{
            console.log("WebSocket error", error)
        };
    }

    sendMessage(message){
        if(ths.ws && this.connected){
            this.ws.send(JSON.stringify(message));
        } 
    }
    addEventListener(event, callback){
        if(this.ws && this.connected){
            this.ws.addEventListener(event, callback)
        } else{
            this.listeners.push({event, callback})
        }
    }

    disconnect(){
        if(this.ws){
            this.ws.close()
        }
    }

}

export default WebSocketService