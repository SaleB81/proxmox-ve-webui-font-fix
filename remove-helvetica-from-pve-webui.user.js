// ==UserScript==
// @name         Remove Helvetica Font from Proxmox VE webUI
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Removal of the Helvetica font without interfering with the interference to icon fonts.
// @author       SaleB
//
// NOTE:
// Adjust the @match rules below to match your own Proxmox host IP or hostname.
// Examples:
//   https://192.168.1.10/*
//   https://pve.local/*
//
// @match        https://192.168.*/*
// @match        http://192.168.*/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    const css = `
        /* === OVERRIDE HELVETICA NA NIVOU FONT-FACE === */
        @font-face {
            font-family: "Helvetica";
            src: local("Arial"), local("Liberation Sans"), local("Segoe UI");
            //src: local("Segoe UI"), local("Inter"), local("Arial"), local("Liberation Sans");

            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: "Helvetica Neue";
            src: local("Arial"), local("Liberation Sans"), local("Segoe UI");
            font-weight: normal;
            font-style: normal;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.documentElement.appendChild(style);
})();
