![alt text](https://github.com/jegamboafuentes/Text-to-Image-Phi2/blob/main/imagenes/phi2Logo.png)
Installation Guide 🛠️
----------------------

### Step 1: Download the Extension

1.  Navigate to the `V_1` folder within the [Text-to-Image Phi2 GitHub repository](https://github.com/jegamboafuentes/Text-to-Image-Phi2/tree/main/V_1).
2.  Download the entire `V_1` folder to your local machine. You can do this by clicking on `Code` > `Download ZIP`, then extracting the ZIP file, and locating the `V_1` folder.

### Step 2: Install the Extension in Your Browser

3.  Open your Chrome browser and go to `chrome://extensions/`.
4.  Enable `Developer mode` by toggling the switch in the top-right corner.
5.  Click on `Load unpacked` and select the `V_1` folder you downloaded from the GitHub repository.

Congratulations! 🎉 The Text-to-Image Phi2 Browser Extension is now installed.

Configuration 🛠️
-----------------

Before you start using the extension, you need to make two important changes in the `background.js` file to ensure the application works correctly:

### Change 1: OpenAI API Key

1.  Open the `background.js` file located in the `V_1` folder.
    
2.  Navigate to line 49 and replace the placeholder OpenAI API key with your own.
    
    javascriptCopy code
    
    `const OPENAI_API_KEY = 'your-openai-api-key-here';`
    
    Ensure you have an API key from OpenAI. If you don't, you can obtain one by signing up at [OpenAI's platform](https://openai.com/).
    

### Change 2: Phi2 Endpoint

1.  In the same `background.js` file, find line 20.
    
2.  Change the instance endpoint to match your setup if you're not using the localhost with port 1234.
    
    javascriptCopy code
    
    `const PHI2_ENDPOINT = 'http://localhost:1234' // Or your custom endpoint`
    
    This step is crucial if your Text-to-Image Phi2 service is running on a different server or port.
    

Usage 🎨
--------

With the extension installed and configured, you're all set to start converting your text prompts into images right from your browser. Simply click on the extension icon, enter your prompt, and watch as your ideas come to life!

Support & Feedback 📬
---------------------

For support, questions, or feedback, please open an issue in the GitHub repository. We love hearing from our users and are constantly looking to improve the extension.

Happy Creating!

![alt text](https://github.com/jegamboafuentes/Text-to-Image-Phi2/blob/main/imagenes/1_LOGO1.png)