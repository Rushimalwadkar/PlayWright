interface vehicle {
    start(): void;
    stop(): void;
}

class car implements vehicle{
    start(): void {
        console.log("Car is starting");
    }
    stop(): void {
        console.log("Car is stopping");
    }   
}
let c = new car();
c.start();
c.stop();
