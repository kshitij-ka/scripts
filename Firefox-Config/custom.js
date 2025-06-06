/** SSL / OCSP **/
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1] // CHANGE IN user.js UPAR UPAR
user_pref("security.OCSP.require", true);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: restore login manager
user_pref("signon.rememberSignons", true);

// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);

// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);

// Search bar
user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);
// user_pref("browser.urlbar.suggest.topsites", false);

// Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]

/* 5018: limit events that can cause a pop-up ***/
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/****************************************************************************

/****************************************************************************
 * HARDENING                                                                *
 ***************************************************************************/

// PREF: disable Firefox Sync
user_pref("identity.fxaccounts.enabled", false);

// PREF: disable the Firefox View tour from popping up
user_pref("browser.firefox-view.feature-tour", '{"screen":"","complete":true}');

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// in both Normal and Private Browsing windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// PREF: disable captive portal detection
// [WARNING] Do NOT use for mobile devices!
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// PREF: set DoH provider
user_pref("network.trr.uri", "https://family.dns.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://family.dns.mullvad.net/dns-query");

// PREF: enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 3);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 2);

/* 1224: enable CRLite [FF73+]
 * 0 = disabled
 * 1 = consult CRLite but only collect telemetry
 * 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
 * 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (default)
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1429800,1670985,1753071
 * [2] https://blog.mozilla.org/security/tag/crlite/ ***/
user_pref("security.remote_settings.crlite_filters.enabled", true); // [DEFAULT: true FF137+]

/* 1244: enable HTTPS-Only mode in all windows
 * When the top-level is HTTPS, insecure subresources are also upgraded (silent fail)
 * [SETTING] to add site exceptions: Padlock>HTTPS-Only mode>On (after "Continue to HTTP Site")
 * [SETTING] Privacy & Security>HTTPS-Only Mode (and manage exceptions)
 * [TEST] http://example.com [upgrade]
 * [TEST] http://httpforever.com/ | http://http.rip [no upgrade] ***/
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]

// PREF: delete all browsing data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);

// PREF: after crashes or restarts, do not save extra session data
// such as form content, scrollbar positions, and POST data
user_pref("browser.sessionstore.privacy_level", 2);

// PREF: disable all DRM content
user_pref("media.eme.enabled", false);

// [SETTING] General>Language>Choose your preferred language for displaying pages>Choose>Request English...
user_pref("privacy.spoof_english", 1);

/** CONTAINERS **/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/** DOM (DOCUMENT OBJECT MODEL) **/
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// Disable UI Tour
user_pref("browser.uitour.url", ""); // Defense-in-depth

// Disable remote debugging
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]

/** disable websites overriding Firefox's keyboard shortcuts [FF58+]
 * 0 (default) or 1=allow, 2=block
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts ***/
   // user_pref("permissions.default.shortcuts", 2);
**/

// PDFJS
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]

// DLP Agents Content Analysis
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]

// Downloads
user_pref("browser.download.always_ask_before_handling_new_types", true);

// Fingerprint Protection
user_pref("privacy.fingerprintingProtection.pbmode", true);
user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);

// Disable WebGL (Web Graphics Library)
// user_pref("webgl.disabled", true);

// Disable IPv6
user_pref("network.dns.disableIPv6", true);

// Enfore Firefox blocklist
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]

// Enfore no referer spoofing
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]

// Security delay on confirmation dialogues
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]

// Enfore no First Party Isolation
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]

// Enfore SmartBlock shims
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]

// Enforce no TLS 1.0/1.1 downgrades
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]

// Enforce disabling of Web Compatibility Reporter [FF56+]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]

// Enforce Quarantined Domains [FF115+]
user_pref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]

/* 7001: disable APIs
 * Location-Aware Browsing, Full Screen
 * [WHY] The API state is easily fingerprintable.
 * Geo is behind a prompt (7002). Full screen requires user interaction ***/
user_pref("geo.enabled", false);
user_pref("full-screen-api.enabled", false);

// DO NOT TRACK HTTP Header
user_pref("privacy.donottrackheader.enabled", true);

// Customize Enhanced Tracking Protection (ETP)
user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5]
user_pref("network.cookie.cookieBehavior.optInPartitioning", true); // [ETP FF132+]
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
user_pref("privacy.bounceTrackingProtection.mode", 1); // [FF131+] [ETP FF133+]
user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
user_pref("privacy.partition.network_state.ocsp_cache", true); // [DEFAULT: true]
user_pref("privacy.query_stripping.enabled", true); // [FF101+]
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);

// Enable GPC (Global Privacy Control) in non-PB windows
user_pref("privacy.globalprivacycontrol.enabled", true);

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS ***/
user_pref("network.proxy.socks_remote_dns", true);

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
user_pref("security.ssl.require_safe_negotiation", true);


/****************************************************************************
 * BEGINNING OF ARKEN FOX                                                   *
 ***************************************************************************/

// Geo-location
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/****************************************************************************
 * END OF ARKEN FOX                                                         *
 ***************************************************************************/
