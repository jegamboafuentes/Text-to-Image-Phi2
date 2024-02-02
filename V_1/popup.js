document.addEventListener('DOMContentLoaded', () => {
    // Fetch summarized text and image URL from local storage
    chrome.storage.local.get(['summarizedText', 'imageUrl'], function (result) {
        document.getElementById('summary').innerText = result.summarizedText;
        if (result.imageUrl) {
            // If there's an image URL, create an img element to display it
            let img = new Image();
            img.src = result.imageUrl;
            img.style.maxWidth = '100%'; // Ensure the image fits in the popup
            document.body.appendChild(img); // Append the image to the popup's body
        }
    });
});
