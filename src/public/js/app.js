const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("✅ connected to server.");
});

socket.addEventListener("message", (message) => {
    console.log("📨 just got this: ", message.data);
});

socket.addEventListener("close", () => {
    console.log("⛔️ disconnected from server.");    
});

setTimeout(() => {
    socket.send("hello from the browser!"); 
}, 10000);