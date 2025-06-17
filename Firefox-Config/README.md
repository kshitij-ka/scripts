# Firefox-Config

This configuration is a culmination of [Betterfox](https://github.com/yokoffing/Betterfox) and [arkenfox](https://github.com/arkenfox/user.js), designed to optimize Firefox and other Firefox-based browsers for enhanced security and performance. The result is a clean, distraction-free browsing experience that minimizes the risk of site breakage.

---

## Setup

1. Backup your Firefox profile:

	i. In Firefox, navigate to `about:profiles`.

	ii. Open the _root directory_ of profile in use.

	iii. Copy all the contents of this directory in a new location.

> [!NOTE]
> It is advisable to have a backup in case you need to roll back!

2. Download the [`user.js`](user.js) file.
3. Open the file and review the overrides at the bottom to make any necessary changes.
4. Move the `user.js` file into the _root directory_ of the profile currently in use.
5. Restart Firefox.

> [!TIP]
> After restarting, I recommend using the following extensions:
> - [uBlock Origin](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/) - Content blocker
> - [CanvasBlocker](https://addons.mozilla.org/en-GB/firefox/addon/canvasblocker/) - Alters some JS APIs to prevent fingerprinting
> - [Decentraleyes](https://addons.mozilla.org/en-GB/firefox/addon/decentraleyes/) - Protects you against tracking through "free", centralised, content delivery.

---

## Key Benefits

1. Protect your online privacy without any site breakage.
2. Improve Firefox's performance.
3. Disable Firefox's telemetry.
4. Implement tracking protection.
5. Prevent insecure SSL/TLS connections
6. Provide a clean, distraction-free browser experience.
7. Enables HTTPS-only mode.
8. Enforces DNS-over-HTTPS (DoH) for encrypting DNS queries (utilizes [Mullvad DNS](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/))
9. Performs sanitization on shutdown.
10. Customizes Enhanced Tracking Protection (ETP)

> [!WARNING]
> This configuration disables Google's Safe Browsing, DRM and WebRTC. These settings can be modified in the "**MY OVERRIDES**" section.

> [!TIP]
> Refer [Betterfox's Smoothfox configuration](https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js) to adjust scrolling preference.

## Performance Evaulation

To assess the effectiveness of the `user.js` configurations, conduct a before-and-after test:

1. [EFF's Cover Your Tracks](https://coveryourtracks.eff.org/) - Test your browser to see how well you are protected from tracking and fingerprinting.
2. [Browserleaks](https://browserleaks.com/) - BrowserLeaks is a suite of tools that offers a range of tests to evaluate the security and privacy of your web browser. These tests focus on identifying ways in which websites may leak your real IP address, collect information about your device, and perform a browser fingerprinting.

---

## Compatibility Information

This configuration file has been tested on Firefox and Zen Browser, but it is compatible with any Firefox-based browser.

---
