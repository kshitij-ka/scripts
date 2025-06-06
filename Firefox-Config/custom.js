DISABLE IPv6

/** SPECULATIVE LOADING ***/
user_pref("browser.send_pings", false); // [DEFAULT: false]

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.search.separatePrivateDefault", true); // [FF70+]

/** PASSWORDS ***/
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/** CRASH REPORTS ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]

/** MOZILLA UI ***/
user_pref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]

/** URL BAR ***/
user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+]
user_pref("browser.urlbar.clipboard.featureGate", false);

/** SSL / OCSP **/
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1] // CHANGE IN user.js UPAR UPAR
user_pref("security.OCSP.require", true);

****************************************************************************
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
user_pref("network.trr.uri", "https://family.dns.mullvad.net/dns-query"); // Hagezi Light + TIF

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


/****************************************************************************
 * BEGINNING OF ARKEN FOX                                                   *
 ***************************************************************************/

// Geo-location
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

/****************************************************************************
 * END OF ARKEN FOX                                                         *
 ***************************************************************************/



/****************************************************************************************
 * OPTION: SHARPEN SCROLLING                                                           *
 ****************************************************************************************/
// credit: https://github.com/black7375/Firefox-UI-Fix
// only sharpen scrolling
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.min_line_scroll_amount", 10); // adjust this number to your liking; default=5
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 80); // default=50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); // default=.25
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); // default=.4
// Firefox Nightly only:
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1846935
user_pref("general.smoothScroll.msdPhysics.enabled", false); // [FF122+ Nightly]


