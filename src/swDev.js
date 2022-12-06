export default function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/Sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.log('response', response);
    })
}

