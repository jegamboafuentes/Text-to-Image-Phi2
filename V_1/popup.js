document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['summarizedText', 'imageUrl'], function (result) {
        let summaryElement = document.getElementById('summary');
        let container = summaryElement.closest('.container'); // Find the nearest container

        if (result.imageUrl) {
            let img = new Image();
            img.src = result.imageUrl;
            img.style.maxWidth = '100%';
            img.style.marginBottom = '10px'; // Add some space between the image and the text

            // Insert the image at the start of the container
            container.insertBefore(img, container.firstChild); // Insert as the first child of the container

            // Create and insert download button after the image
            let downloadButton = document.createElement('button');
            downloadButton.innerText = 'Download Image';
            downloadButton.style.marginTop = '10px';
            downloadButton.onclick = function() {
                let link = document.createElement('a');
                link.href = result.imageUrl;
                link.download = 'downloadedImage.png'; // Provide a file name here
                link.style.display = 'none'; // Hide the link
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Clean up
            };

            // Insert the download button after the image inside the container
            container.insertBefore(downloadButton, img.nextSibling); // Insert after the image
        }

        // Now set the text content of the summary
        summaryElement.innerText = result.summarizedText;
    });
});
