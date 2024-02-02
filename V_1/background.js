chrome.runtime.onInstalled.addListener(function () {
    // Create context menu
    chrome.contextMenus.create({
        id: "text-to-image",
        title: "Text to Image",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "text-to-image") {
        let selectedText = info.selectionText;
        let prePrompt = `
Based on the text below generate a Prompt of max 11 words for a text to image AI model, that highlight the subject of the text into one illustration. Make the prompt to include the illustration in the style of a cartoon.

Text: `;

        // Call to the new API for prompt generation
        console.log(selectedText);
        fetch("http://localhost:1234/v1/chat/completions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // Include other headers required by the new API
            },
            body: JSON.stringify({
                messages: [
                    { "role": "system", "content": "You are a helpful assistant that creates prompts for Dalle 3" },
                    { "role": "user", "content": prePrompt + selectedText }
                ],
                temperature: 0.5,
                max_tokens: 2048,
                stream: false
            })
        })
            .then(response => response.json())
            // Part of the chrome.contextMenus.onClicked listener
            .then(data => {
                //console.log(data);
                let generatedText = data.choices ? data.choices[0].message.content : ''; // Using the generated text as prompt
                //let generatedText = "A cute puppy!"
                console.log(generatedText);

                // Now make a request to DALL·E 3 for image generation
                fetch("https://api.openai.com/v1/images/generations", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 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'
                    },
                    body: JSON.stringify({
                        "model": "dall-e-3",
                        "prompt": generatedText,
                        "n": 1,
                        "size": "1024x1024"
                    })
                })
                    .then(response => {
                        //console.log(response);
                        return response.json(); // Make sure to return the promise here
                    })
                    .then(imageData => {
                        console.log(imageData);
                        let imageUrl = imageData.data ? imageData.data[0].url : '';
                        console.log(imageUrl);
                        chrome.storage.local.set({ summarizedText: generatedText, imageUrl: imageUrl });
                    })

                    .catch(error => {
                        console.error('Error:', error);
                        chrome.storage.local.set({ summarizedText: "DALL·E 3 API ERROR: " + error.message });
                    });
            })
    }
});
