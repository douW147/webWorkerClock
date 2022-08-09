const clockWorker = new Worker("./built/workers/clockWorker.js");

clockWorker.onmessage = (message) => {
    const outputElement = document.getElementById("clock");
    const time = message.data;

    outputElement.innerHTML = time
}