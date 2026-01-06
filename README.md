## Remove Helvetica Font from Proxmox (Tampermonkey)

This Tampermonkey userscript removes the Helvetica / Helvetica Neue font from the Proxmox VE web interface by overriding it at the @font-face level and replacing it with system-safe fallback fonts — without breaking Font Awesome icons.

### 🎯 Motivation

Some Proxmox VE installations rely on Helvetica or Helvetica Neue, which can:

Render poorly on certain systems

Cause visual inconsistencies

Lead to missing or broken icons if removed incorrectly (e.g. via global font-family overrides)

This script solves the problem cleanly and safely.

### ✅ What this script does

Overrides Helvetica and Helvetica Neue only at the @font-face level

Redirects them to locally available system fonts:

Arial

Liberation Sans

Segoe UI

Preserves Font Awesome icons (no empty squares, no missing glyphs)

Works without modifying Proxmox source files

### ❌ What this script does NOT do

Does not globally override font-family via * { font-family: ... }

Does not touch icon fonts (Font Awesome, fa-*)

Does not inject JavaScript logic — CSS only

### 🧠 Technical approach

Instead of forcing a different font everywhere, the script:

Redefines the @font-face declarations for:

"Helvetica"

"Helvetica Neue"

Maps them to safe local fonts already installed on most systems

This avoids breaking icon fonts, which commonly happens when using aggressive CSS overrides.

### 📜 Script metadata

Type: Tampermonkey userscript

Run at: document-end

Scope: Proxmox VE Web UI

CSS injection method: <style> element

### 🛠 Installation

Install Tampermonkey (or compatible userscript manager)

Create a new userscript

Paste the script code

Adjust the @match line if needed (see below)

Save and refresh the Proxmox UI

### 🌍 URL matching

Note: 

The default @match rule targets the 192.168.x.x private network.

Users should adjust it to match their own Proxmox host IP or hostname.

You can generalize it, for example:

// @match https://*/pve/*


#### ⚠️ Be careful when broadening the scope — this script is intended for Proxmox VE UI only.

You can target the IP address of your Proxmox instance as specifically as you like.


### 🧪 Tested on

Proxmox VE 8.4.16
Chrome version 143.0.7499.170
Windows 10

### 📄 License

GPL v3 License

### 🤝 Contributions

Issues, suggestions, and improvements are welcome.
