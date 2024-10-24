/*
    Custom Firefox settings for disabling all telemetry/tracking and custom optimizations
    Created by Jeremy Neale (remy1)

    Installation:

    -> Go to about:support in Firefox URL and open the profile directory
    -> Place this (or another) user.js file in this directory and restart Firefox

    Designed to be simple and customizable.
*/


// -------------------------------------------------------------------------------

// General Preferences

user_pref("browser.newtabpage.enabled", true); // true=Firefox Home, false=blank pages

// See README for installing custom background image, that is loaded to Firefox Home by default

user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Pocket > Sponsored Stories

user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts

user_pref("browser.newtabpage.activity-stream.default.sites", ""); // blocks default start sites

user_pref("browser.aboutConfig.showWarning", false); // blocks warning when trying to change about:config

// 0 = blank, 1 = home, 2 = last visited page, 3 = resume previous session
user_pref("browser.startup.page", 1);

user_pref("browser.newtabpage.activity-stream.showSponsored", false);

user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

user_pref("browser.newtabpage.activity-stream.default.sites", "");


// -------------------------------------------------------------------------------

// Disable Pocket

user_pref("extensions.pocket.enabled", false);

user_pref("extensions.pocket.onSaveRecs", false);

user_pref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);

user_pref("browser.urlbar.suggest.pocket", false);

user_pref("browser.urlbar.pocket.featureGate", false);

user_pref("extensions.pocket.showHome", false);


// -------------------------------------------------------------------------------

// Enhance User Experience

user_pref("layout.frame_rate", 160);

user_pref("media.navigator.video.default_fps", 160);

user_pref("general.smoothScroll.currentVelocityWeighting", 0);

user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);

user_pref("mousewheel.min_line_scroll_amount", 25);


// -------------------------------------------------------------------------------

// Telemetry

// General Telemetry

user_pref("datareporting.policy.dataSubmissionEnabled", false);

user_pref("toolkit.telemetry.unified", false);

user_pref("toolkit.telemetry.enabled", false);

user_pref("toolkit.telemetry.server", "data:,");

user_pref("toolkit.telemetry.archive.enabled", false);

user_pref("toolkit.telemetry.newProfilePing.enabled", false);

user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);

user_pref("toolkit.telemetry.updatePing.enabled", false);

user_pref("toolkit.telemetry.bhrPing.enabled", false);

user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

user_pref("toolkit.telemetry.coverage.opt-out", true);

user_pref("toolkit.coverage.opt-out", true);

user_pref("toolkit.coverage.endpoint.base", "");

user_pref("browser.ping-centre.telemetry", false);

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

user_pref("browser.newtabpage.activity-stream.telemetry", false);

user_pref("datareporting.healthreport.uploadEnabled", false);


// Telemetry Studies

user_pref("app.shield.optoutstudies.enabled", false);

user_pref("app.normandy.enabled", false);

user_pref("app.normandy.api_url", "");


// Telemetry Crash Reports

user_pref("breakpad.reportURL", "");

user_pref("browser.tabs.crashReporting.sendReport", false);

user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);


// -------------------------------------------------------------------------------

// Enhanced Browsing Protection

// user_pref("browser.contentblocking.category", "strict"); // [HIDDEN PREF]

user_pref("privacy.donottrackheader.enabled", true);

user_pref("privacy.fingerprintingProtection", true);

user_pref("privacy.globalprivacycontrol.enabled", true);


// -------------------------------------------------------------------------------

// Change Location Services

// Uses mozilla's location services instead of google's (if available)
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX] [HIDDEN PREF]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
