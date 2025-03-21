// ==UserScript==
// @name	Temu Link Cleaner
// @description	Simplify Temu links. Cleans up temu.com links into temu.com/g-[PRODUCTID].html format and updates the address bar.
// @version	1.0
// @author	Springer
// @homepageURL	https://github.com/Springers
// @homepageURL	https://gist.github.com/Springers
// @downloadURL	https://gist.github.com/Springers/47f00ad974e2fc68cbece012670c101d
// @updateURL	https://gist.github.com/Springers/47f00ad974e2fc68cbece012670c101d/raw/Temu_Link_Cleaner.user.js

// @icon	https://www.google.com/s2/favicons?sz=64&domain=temu.com
// @icon	https://aimg.kwcdn.com/upload_aimg/web/c9653751-0a91-46f1-806a-b639dd32931b.png
// @icon	https://aimg.kwcdn.com/upload_aimg/web/c9653751-0a91-46f1-806a-b639dd32931b.png.slim.png
// @match	*://*.temu.com/*
// @grant	none
// @run-at
// @license	Non-Commercial Use Only
// ==/UserScript==

(function() {
    'use strict';

    // Function to extract the product ID from Temu URLs
    function getProductID(url) {
        const match = url.match(/g-(\d+)\.html/); // Match the product ID in the format "g-12345.html"
        return match ? match[1] : null;
    }

    // Function to create the cleaned-up URL
    function createCleanURL(productID) {
        return `https://www.temu.com/g-${productID}.html`;
    }

    // Main logic
    const currentURL = window.location.href;

    // Check if the URL already contains "g-[ProductID].html"
    const productID = getProductID(currentURL);

    if (productID) {
        const cleanURL = createCleanURL(productID);

        // Replace the current URL in the browser's address bar
        if (currentURL !== cleanURL) {
            window.history.replaceState(null, null, cleanURL);
        }
    }
})();
