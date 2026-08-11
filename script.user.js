// ==UserScript==
// @name         Reddit Direct Raw Image Viewer
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Bypasses Reddit media wrapper page and renders pure raw image
// @author       https://reddit.com/u/hv33y
// @match        https://www.reddit.com/media*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const params = new URLSearchParams(window.location.search);
    const rawImageUrl = params.get('url');

    if (!rawImageUrl) return;

    // Stop Reddit's layout and scripts from loading
    window.stop();

    const filename = rawImageUrl.split('/').pop().split('?')[0];

    document.documentElement.innerHTML = `
        <head>
            <title>${filename}</title>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #0e0e0e;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: auto;
                }
                img {
                    max-width: 100%;
                    max-height: 100vh;
                    object-fit: contain;
                    cursor: zoom-in;
                    user-select: none;
                }
                img.zoomed {
                    max-width: none;
                    max-height: none;
                    cursor: zoom-out;
                }
            </style>
        </head>
        <body>
            <img id="raw-image" src="${rawImageUrl}" alt="${filename}" />
        </body>
    `;

    document.addEventListener('DOMContentLoaded', () => {
        const img = document.getElementById('raw-image');
        if (img) {
            img.addEventListener('click', () => {
                img.classList.toggle('zoomed');
            });
        }
    });
})();
