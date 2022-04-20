(() => {
    async function poll() {
        // This succeeds
        const devices = await navigator.usb.getDevices();
        postMessage(
            devices.map((device) => [
                device.manufacturerName,
                device.serialNumber,
            ])
        );
    }

    // This fails: requestDevice is not available inside WebWorkers since
    // it must be called in response to a UI gesture
    // navigator.usb.requestDevice({ filters: [] });

    setInterval(poll, 1000);
})();
