const cameraVideo =
document.getElementById("cameraVideo");

const screenVideo =
document.getElementById("screenVideo");

let cameraStream;
let screenStream;

async function startCamera() {

    try {

        cameraStream =
        await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });

        cameraVideo.srcObject = cameraStream;

    } catch(error) {

        alert("Camera Access Denied");
    }
}

function stopCamera() {

    if(cameraStream) {

        cameraStream.getTracks().forEach(track => {
            track.stop();
        });

        cameraVideo.srcObject = null;
    }
}

async function shareScreen() {

    try {

        screenStream =
        await navigator.mediaDevices.getDisplayMedia({
            video: true
        });

        screenVideo.srcObject = screenStream;

    } catch(error) {

        alert("Screen Sharing Denied");
    }
}

function stopScreenShare() {

    if(screenStream) {

        screenStream.getTracks().forEach(track => {
            track.stop();
        });

        screenVideo.srcObject = null;
    }
}