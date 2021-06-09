const videoElement = document.getElementById('video')
const button = document.getElementById('button')

const selectMediaStream = async () => {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    }
    catch(error){
        console.log("bruhh -.-", error)
    }
}

button.addEventListener('click', async () => {
    await videoElement.requestPictureInPicture();
})

selectMediaStream()