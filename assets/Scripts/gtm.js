// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    }
    ;
}
)(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "80",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieDomain", "value", "auto"], ["map", "fieldName", "allowLinker", "value", "true"]],
                "vtp_useHashAutoLink": false,
                "vtp_autoLinkDomains": "secure.2checkout.com, gumroad.com, coreui.io",
                "vtp_decorateFormsAutoLink": true,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-118965717-1",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 8], 8, 16], ".parentElement.getAttribute(\"id\")})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currencyCode"
            }, {
                "function": "__j",
                "vtp_name": "window.top.$GLOBAL_VARS.cart.completed"
            }, {
                "function": "__j",
                "vtp_name": "window.parent.$GLOBAL_VARS.cart.price.currency"
            }, {
                "function": "__j",
                "vtp_name": "window.parent.$GLOBAL_VARS.cart.price.netDiscounted"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 4
            }, {
                "function": "__cvt_32072467_10",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "667090843876081",
                "vtp_disableAutoConfig": false,
                "vtp_eecEventName": "eec",
                "vtp_enhancedEcommerce": true,
                "vtp_dpoLDU": false,
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 12
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "New pricing",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "Buy Init",
                "vtp_eventLabel": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 26
            }, {
                "function": "__cvt_32072467_10",
                "metadata": ["map"],
                "once_per_load": true,
                "vtp_disablePushState": false,
                "vtp_pixelId": "667090843876081",
                "vtp_standardEventName": "PageView",
                "vtp_disableAutoConfig": false,
                "vtp_enhancedEcommerce": false,
                "vtp_dpoLDU": false,
                "vtp_eventName": "standard",
                "vtp_objectPropertiesFromVariable": false,
                "vtp_consent": true,
                "vtp_advancedMatching": false,
                "tag_id": 27
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 1],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 29
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_productReportingDataSource": "DATA_LAYER",
                "vtp_enableNewCustomerReporting": true,
                "vtp_enableConversionLinker": true,
                "vtp_newCustomerReportingDataSource": "DATA_LAYER",
                "vtp_enableProductReporting": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "992011983",
                "vtp_conversionLabel": "tlGvCMKV698BEM_Ng9kD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 6],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 30
            }, {
                "function": "__gclidw",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableCrossDomain": true,
                "vtp_acceptIncoming": true,
                "vtp_linkerDomains": "secure.2checkout.com, gumroad.com, coreui.io",
                "vtp_formDecoration": false,
                "vtp_urlPosition": "query",
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 31
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_measurementId": "G-6RN1VRRKRM",
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 34
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "begin_checkout",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 7]]],
                "vtp_measurementId": "G-6RN1VRRKRM",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 36
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 7]]],
                "vtp_measurementId": "G-6RN1VRRKRM",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 37
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "First Visit Modal",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "Init",
                "vtp_eventLabel": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 39
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "First Visit Modal",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "Show",
                "vtp_eventLabel": ["macro", 2],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 41
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Download",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 1],
                "vtp_eventAction": "Click download",
                "vtp_eventLabel": ["macro", 9],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 44
            }, {
                "function": "__hl",
                "tag_id": 45
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "32072467_25",
                "tag_id": 46
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "32072467_42",
                "tag_id": 47
            }, {
                "function": "__cl",
                "tag_id": 48
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "2checkout event"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "buy-"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "hexagon-btn"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)32072467_25($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 3],
                "arg1": "buy-coreui-pro-"
            }, {
                "function": "_re",
                "arg0": ["macro", 4],
                "arg1": "(^$|((^|,)32072467_42($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 5],
                "arg1": "2checkout"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "first-visit-discount"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "first-visit-modal-show"
            }, {
                "function": "_css",
                "arg0": ["macro", 8],
                "arg1": ".download-product \u003E *"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }],
            "rules": [[["if", 0], ["add", 0, 3, 6, 7, 13, 14, 15, 16]], [["if", 1], ["add", 1, 4, 5, 8, 9]], [["if", 2, 3, 4, 5], ["add", 2]], [["if", 4, 6, 7], ["add", 2]], [["if", 9], ["add", 10]], [["if", 10], ["add", 11]], [["if", 11, 12], ["add", 12]], [["if", 0, 8], ["block", 3]]]
        },
        "runtime": [[50, "__cvt_32072467_10", [46, "a"], [52, "b", ["require", "createQueue"]], [52, "c", ["require", "callInWindow"]], [52, "d", ["require", "aliasInWindow"]], [52, "e", ["require", "copyFromWindow"]], [52, "f", ["require", "setInWindow"]], [52, "g", ["require", "injectScript"]], [52, "h", ["require", "makeTableMap"]], [52, "i", ["require", "makeNumber"]], [52, "j", ["require", "getType"]], [52, "k", ["require", "copyFromDataLayer"]], [52, "l", ["require", "Math"]], [52, "m", ["require", "logToConsole"]], [52, "n", [30, ["e", "_fbq_gtm_ids"], [7]]], [52, "o", [17, [15, "a"], "pixelId"]], [52, "p", [7, "AddPaymentInfo", "AddToCart", "AddToWishlist", "CompleteRegistration", "Contact", "CustomizeProduct", "Donate", "FindLocation", "InitiateCheckout", "Lead", "PageView", "Purchase", "Schedule", "Search", "StartTrial", "SubmitApplication", "Subscribe", "ViewContent"]], [52, "q", ["k", "ecommerce", 1]], [52, "r", [51, "", [7, "bi"], ["m", [15, "bi"]], [2, [15, "a"], "gtmOnFailure", [7]]]], [52, "s", [51, "", [7, "bi", "bj"], [55, "bk", [15, "bj"], [46, [22, [2, [15, "bj"], "hasOwnProperty", [7, [15, "bk"]]], [46, [43, [15, "bi"], [15, "bk"], [16, [15, "bj"], [15, "bk"]]]]]]], [36, [15, "bi"]]]], [52, "t", [51, "", [7, "bi"], [36, [8, "id", [17, [15, "bi"], "id"], "quantity", [17, [15, "bi"], "quantity"]]]]], [41, "u", "v", "w"], [22, [17, [15, "a"], "enhancedEcommerce"], [46, [22, [28, [15, "q"]], [46, [36, ["r", "Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]], [22, [17, [15, "q"], "detail"], [46, [3, "u", "ViewContent"], [3, "v", "detail"]], [46, [22, [17, [15, "q"], "add"], [46, [3, "u", "AddToCart"], [3, "v", "add"]], [46, [22, [17, [15, "q"], "checkout"], [46, [3, "u", "InitiateCheckout"], [3, "v", "checkout"]], [46, [22, [17, [15, "q"], "purchase"], [46, [3, "u", "Purchase"], [3, "v", "purchase"]], [46, [36, ["r", "Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]]]]]]]], [22, [30, [28, [17, [16, [15, "q"], [15, "v"]], "products"]], [21, ["j", [17, [16, [15, "q"], [15, "v"]], "products"]], "array"]], [46, [36, ["r", "Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]], [3, "w", [8, "content_type", "product", "contents", [2, [17, [16, [15, "q"], [15, "v"]], "products"], "map", [7, [15, "t"]]], "value", [2, [17, [16, [15, "q"], [15, "v"]], "products"], "reduce", [7, [51, "", [7, "bi", "bj"], [52, "bk", [10, [2, [15, "l"], "round", [7, [26, [26, ["i", [30, [17, [15, "bj"], "price"], 0]], [30, [17, [15, "bj"], "quantity"], 1]], 100]]], 100]], [36, [0, [15, "bi"], [15, "bk"]]]], 0]], "currency", [30, [17, [15, "q"], "currencyCode"], "USD"]]], [22, [18, [2, [7, "InitiateCheckout", "Purchase"], "indexOf", [7, [15, "u"]]], [27, 1]], [46, [43, [15, "w"], "num_items", [2, [17, [16, [15, "q"], [15, "v"]], "products"], "reduce", [7, [51, "", [7, "bi", "bj"], [36, [0, [15, "bi"], ["i", [30, [17, [15, "bj"], "quantity"], 1]]]]], 0]]]]]]], [52, "x", [39, [1, [17, [15, "a"], "advancedMatchingList"], [17, [17, [15, "a"], "advancedMatchingList"], "length"]], ["h", [17, [15, "a"], "advancedMatchingList"], "name", "value"], [8]]], [52, "y", [39, [1, [17, [15, "a"], "objectPropertyList"], [17, [17, [15, "a"], "objectPropertyList"], "length"]], ["h", [17, [15, "a"], "objectPropertyList"], "name", "value"], [8]]], [52, "z", [39, [20, ["j", [17, [15, "a"], "objectPropertiesFromVariable"]], "object"], [17, [15, "a"], "objectPropertiesFromVariable"], [8]]], [52, "ba", ["s", [15, "z"], [15, "y"]]], [52, "bb", ["s", [30, [15, "w"], [8]], [15, "ba"]]], [3, "u", [30, [15, "u"], [39, [20, [17, [15, "a"], "eventName"], "custom"], [17, [15, "a"], "customEventName"], [39, [20, [17, [15, "a"], "eventName"], "variable"], [17, [15, "a"], "variableEventName"], [17, [15, "a"], "standardEventName"]]]]], [52, "bc", [39, [20, [2, [15, "p"], "indexOf", [7, [15, "u"]]], [27, 1]], "trackSingleCustom", "trackSingle"]], [52, "bd", [39, [17, [15, "a"], "userId"], [8, "uid", [17, [15, "a"], "userId"]], [8]]], [52, "be", ["s", [15, "bd"], [15, "x"]]], [52, "bf", [39, [20, [17, [15, "a"], "consent"], false], "revoke", "grant"]], [52, "bg", [51, "", [7], [41, "bi"], [3, "bi", ["e", "fbq"]], [22, [15, "bi"], [46, [36, [15, "bi"]]]], ["f", "fbq", [51, "", [7], [52, "bj", ["e", "fbq.callMethod.apply"]], [22, [15, "bj"], [46, ["c", "fbq.callMethod.apply", [45], [15, "arguments"]]], [46, ["c", "fbq.queue.push", [15, "arguments"]]]]]], ["d", "_fbq", "fbq"], ["b", "fbq.queue"], [36, ["e", "fbq"]]]], [52, "bh", ["bg"]], ["bh", "consent", [15, "bf"]], [22, [17, [15, "a"], "dpoLDU"], [46, ["bh", "dataProcessingOptions", [7, "LDU"], ["i", [17, [15, "a"], "dpoCountry"]], ["i", [17, [15, "a"], "dpoState"]]]], [46, ["bh", "dataProcessingOptions", [7]]]], [2, [2, [15, "o"], "split", [7, ","]], "forEach", [7, [51, "", [7, "bi"], [22, [20, [2, [15, "n"], "indexOf", [7, [15, "bi"]]], [27, 1]], [46, [22, [17, [15, "a"], "disableAutoConfig"], [46, ["bh", "set", "autoConfig", false, [15, "bi"]]]], [22, [17, [15, "a"], "disablePushState"], [46, ["f", "fbq.disablePushState", true]]], ["bh", "init", [15, "bi"], [15, "be"]], [2, [15, "n"], "push", [7, [15, "bi"]]], ["f", "_fbq_gtm_ids", [15, "n"], true]]], ["bh", [15, "bc"], [15, "bi"], [15, "u"], [15, "bb"]]]]], ["g", "https://connect.facebook.net/en_US/fbevents.js", [17, [15, "a"], "gtmOnSuccess"], [17, [15, "a"], "gtmOnFailure"], "fbPixel"]]],
        "permissions": {
            "__cvt_32072467_10": {
                "access_globals": {
                    "keys": [{
                        "key": "fbq",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq",
                        "read": false,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_fbq_gtm_ids",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.callMethod.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "fbq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "fbq.disablePushState",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]
                },
                "logging": {
                    "environments": "debug"
                },
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            }
        },
        "sandboxed_scripts": ["__cvt_32072467_10"]

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa, ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, da = function(a) {
        return a.raw = a
    }, ea = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , fa;
    if ("function" == typeof Object.setPrototypeOf)
        fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                a: !0
            }
              , ka = {};
            try {
                ka.__proto__ = ia;
                ha = ka.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ma = fa
      , na = function(a, b) {
        a.prototype = ea(b.prototype);
        a.prototype.constructor = a;
        if (ma)
            ma(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.ul = b.prototype
    }
      , oa = this || self
      , pa = function(a) {
        return a
    };
    var qa = function(a, b) {
        this.h = a;
        this.B = b
    };
    var ra = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }
      , sa = function() {
        this.D = {};
        this.F = !1;
        this.I = {}
    }
      , ta = function(a, b) {
        var c = [], d;
        for (d in a.D)
            if (a.D.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    sa.prototype.get = function(a) {
        return this.D["dust." + a]
    }
    ;
    sa.prototype.set = function(a, b) {
        this.F || (a = "dust." + a,
        this.I.hasOwnProperty(a) || (this.D[a] = b))
    }
    ;
    sa.prototype.has = function(a) {
        return this.D.hasOwnProperty("dust." + a)
    }
    ;
    var ua = function(a, b) {
        b = "dust." + b;
        a.F || a.I.hasOwnProperty(b) || delete a.D[b]
    };
    sa.prototype.Mb = function() {
        this.F = !0
    }
    ;
    sa.prototype.Oe = function() {
        return this.F
    }
    ;
    var va = function(a) {
        this.B = new sa;
        this.h = [];
        this.D = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (ra(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    aa = va.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    }
    ;
    aa.set = function(a, b) {
        if (!this.D)
            if ("length" === a) {
                if (!ra(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                ra(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    }
    ;
    aa.get = function(a) {
        return "length" === a ? this.length() : ra(a) ? this.h[Number(a)] : this.B.get(a)
    }
    ;
    aa.length = function() {
        return this.h.length
    }
    ;
    aa.Lb = function() {
        for (var a = ta(this.B, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new va(a)
    }
    ;
    var wa = function(a, b) {
        ra(b) ? delete a.h[Number(b)] : ua(a.B, b)
    };
    aa = va.prototype;
    aa.pop = function() {
        return this.h.pop()
    }
    ;
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.shift = function() {
        return this.h.shift()
    }
    ;
    aa.splice = function(a, b, c) {
        return new va(this.h.splice.apply(this.h, arguments))
    }
    ;
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    aa.has = function(a) {
        return ra(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    }
    ;
    aa.Mb = function() {
        this.D = !0;
        Object.freeze(this.h);
        this.B.Mb()
    }
    ;
    aa.Oe = function() {
        return this.D
    }
    ;
    var xa = function() {
        this.quota = {}
    };
    xa.prototype.reset = function() {
        this.quota = {}
    }
    ;
    var ya = function(a, b) {
        this.T = a;
        this.I = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.D = b;
        this.B = new sa;
        this.h = this.F = void 0
    };
    ya.prototype.add = function(a, b) {
        za(this, a, b, !1)
    }
    ;
    var za = function(a, b, c, d) {
        if (!a.B.Oe())
            if (d) {
                var e = a.B;
                e.set(b, c);
                e.I["dust." + b] = !0
            } else
                a.B.set(b, c)
    };
    ya.prototype.set = function(a, b) {
        this.B.Oe() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b))
    }
    ;
    ya.prototype.get = function(a) {
        return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0
    }
    ;
    ya.prototype.has = function(a) {
        return !!this.B.has(a) || !(!this.D || !this.D.has(a))
    }
    ;
    var Aa = function(a) {
        var b = new ya(a.T,a);
        a.F && (b.F = a.F);
        b.I = a.I;
        b.h = a.h;
        return b
    };
    var Ba = function() {}
      , Ca = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , Da = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ea = Array.isArray
      , Ha = function(a, b) {
        if (a && Ea(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , Ja = function(a, b) {
        if (!Da(a) || !Da(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , La = function(a, b) {
        for (var c = new Ka, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , Ma = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Na = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Oa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Pa = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Qa = function(a) {
        var b = [];
        if (Ea(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Ra = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Sa = function() {
        return new Date(Date.now())
    }
      , Ta = function() {
        return Sa().getTime()
    }
      , Ka = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Ua = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Va = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Wa = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Xa = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , Ya = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , ab = function(a, b) {
        var c = m;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , bb = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , cb = /^\w{1,9}$/
      , db = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        Ma(a, function(d, e) {
            cb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , eb = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    var fb = function(a, b) {
        sa.call(this);
        this.T = a;
        this.Ca = b
    };
    na(fb, sa);
    fb.prototype.toString = function() {
        return this.T
    }
    ;
    fb.prototype.Lb = function() {
        return new va(ta(this, 1))
    }
    ;
    fb.prototype.h = function(a, b) {
        return this.Ca.apply(new gb(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    fb.prototype.B = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var ib = function(a, b) {
        for (var c, d = 0; d < b.length && !(c = hb(a, b[d]),
        c instanceof qa); d++)
            ;
        return c
    }
      , hb = function(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof fb))
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.h.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
      , gb = function(a, b) {
        this.B = a;
        this.h = b
    }
      , z = function(a, b) {
        return Ea(b) ? hb(a.h, b) : b
    }
      , F = function(a) {
        return a.B.T
    };
    var jb = function() {
        sa.call(this)
    };
    na(jb, sa);
    jb.prototype.Lb = function() {
        return new va(ta(this, 1))
    }
    ;
    var kb = {
        map: function(a) {
            for (var b = new jb, c = 0; c < arguments.length - 1; c += 2) {
                var d = z(this, arguments[c]) + ""
                  , e = z(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new va, c = 0; c < arguments.length; c++) {
                var d = z(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h
              , e = z(this, b);
            if (!(e instanceof va))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new fb(a,function() {
                return function(g) {
                    var h = Aa(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = z(this, l[n]),
                        l[n]instanceof qa)
                            return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new va(l));
                    var r = ib(h, f);
                    if (r instanceof qa)
                        return "return" === r.h ? r.B : r
                }
            }())
        },
        control: function(a, b) {
            return new qa(a,z(this, b))
        },
        undefined: function() {}
    };
    var lb = function() {
        this.D = new xa;
        this.h = new ya(this.D)
    }
      , mb = function(a, b, c) {
        var d = new fb(b,c);
        d.Mb();
        a.h.set(b, d)
    }
      , nb = function(a, b, c) {
        kb.hasOwnProperty(b) && mb(a, c || b, kb[b])
    };
    lb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    }
    ;
    lb.prototype.B = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = hb(this.h, arguments[c]);
        return b
    }
    ;
    lb.prototype.F = function(a, b) {
        var c = Aa(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = d = hb(c, arguments[e]);
        return d
    }
    ;
    function ob() {
        for (var a = pb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function qb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var pb, rb;
    function sb(a) {
        pb = pb || qb();
        rb = rb || ob();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , l = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(pb[l], pb[n], pb[p], pb[q])
        }
        return b.join("")
    }
    function tb(a) {
        function b(l) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = rb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        pb = pb || qb();
        rb = rb || ob();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var ub = {}
      , vb = function(a, b) {
        ub[a] = ub[a] || [];
        ub[a][b] = !0
    }
      , wb = function() {
        delete ub.GA4_EVENT
    }
      , xb = function(a) {
        var b = ub[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return sb(c.join("")).replace(/\.+$/, "")
    };
    var yb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var zb, Ab = function() {
        if (void 0 === zb) {
            var a = null
              , b = oa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: pa,
                        createScript: pa,
                        createScriptURL: pa
                    })
                } catch (c) {
                    oa.console && oa.console.error(c.message)
                }
                zb = a
            } else
                zb = a
        }
        return zb
    };
    var Cb = function(a, b) {
        this.h = b === Bb ? a : ""
    };
    Cb.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var Db = function(a) {
        return a instanceof Cb && a.constructor === Cb ? a.h : "type_error:TrustedResourceUrl"
    }
      , Bb = {}
      , Eb = function(a) {
        var b = a
          , c = Ab()
          , d = c ? c.createScriptURL(b) : b;
        return new Cb(d,Bb)
    };
    var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Gb() {
        var a = oa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    function Hb(a) {
        return -1 != Gb().indexOf(a)
    }
    ;function Ib() {
        return Hb("Firefox") || Hb("FxiOS")
    }
    function Jb() {
        return (Hb("Chrome") || Hb("CriOS")) && !Hb("Edge") || Hb("Silk")
    }
    ;var Kb = {}
      , Lb = function(a, b) {
        this.h = b === Kb ? a : ""
    };
    Lb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    var Mb = function(a) {
        return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeHtml"
    }
      , Nb = function(a) {
        var b = a
          , c = Ab()
          , d = c ? c.createHTML(b) : b;
        return new Lb(d,Kb)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Ob = {};
    var Pb = function() {}
      , Qb = function(a) {
        this.h = a
    };
    na(Qb, Pb);
    Qb.prototype.toString = function() {
        return this.h
    }
    ;
    function Rb(a, b) {
        var c = [new Qb(Sb[0].toLowerCase(),Ob)];
        if (0 === c.length)
            throw Error("No prefixes are provided");
        var d = c.map(function(f) {
            var g;
            if (f instanceof Qb)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    function Tb(a) {
        if ("script" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase())
            throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    ;var m = window
      , G = document
      , Ub = navigator
      , Vb = G.currentScript && G.currentScript.src
      , Wb = function(a, b) {
        var c = m[a];
        m[a] = void 0 === c ? b : c;
        return m[a]
    }
      , Xb = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , Yb = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , Zb = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function $b(a, b, c) {
        b && Ma(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var ac = function(a, b, c, d, e) {
        var f = G.createElement("script");
        $b(f, d, Yb);
        f.type = "text/javascript";
        f.async = !0;
        var g = Eb(a);
        f.src = Db(g);
        var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        Xb(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = G.getElementsByTagName("script")[0] || G.body || G.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , bc = function() {
        if (Vb) {
            var a = Vb.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , cc = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = G.createElement("iframe"),
        h = !0);
        $b(g, c, Zb);
        d && Ma(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var l = G.body && G.body.lastChild || G.body || G.head;
            l.parentNode.insertBefore(g, l)
        }
        Xb(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , dc = function(a, b, c) {
        var d = new Image(1,1);
        d.onload = function() {
            d.onload = null;
            b && b()
        }
        ;
        d.onerror = function() {
            d.onerror = null;
            c && c()
        }
        ;
        d.src = a
    }
      , ec = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , fc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , I = function(a) {
        m.setTimeout(a, 0)
    }
      , gc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , hc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , ic = function(a) {
        var b = G.createElement("div")
          , c = b
          , d = Nb("A<div>" + a + "</div>");
        void 0 !== c.tagName && Tb(c);
        c.innerHTML = Mb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild; )
            e.push(b.removeChild(b.firstChild));
        return e
    }
      , jc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , kc = function(a) {
        var b;
        try {
            b = Ub.sendBeacon && Ub.sendBeacon(a)
        } catch (c) {
            vb("TAGGING", 15)
        }
        b || dc(a)
    }
      , lc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , mc = function() {
        var a = m.performance;
        if (a && Ca(a.now))
            return a.now()
    };
    var nc = function(a, b) {
        return z(this, a) && z(this, b)
    }
      , oc = function(a, b) {
        return z(this, a) === z(this, b)
    }
      , pc = function(a, b) {
        return z(this, a) || z(this, b)
    }
      , rc = function(a, b) {
        a = z(this, a);
        b = z(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , sc = function(a, b) {
        a = String(z(this, a));
        b = String(z(this, b));
        return a.substring(0, b.length) === b
    }
      , tc = function(a, b) {
        a = z(this, a);
        b = z(this, b);
        switch (a) {
        case "pageLocation":
            var c = m.location.href;
            b instanceof jb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var vc = function() {
        this.h = new lb;
        uc(this)
    };
    vc.prototype.execute = function(a) {
        return this.h.B(a)
    }
    ;
    var uc = function(a) {
        nb(a.h, "map");
        var b = function(c, d) {
            mb(a.h, c, d)
        };
        b("and", nc);
        b("contains", rc);
        b("equals", oc);
        b("or", pc);
        b("startsWith", sc);
        b("variable", tc)
    };
    var wc = function(a) {
        if (a instanceof wc)
            return a;
        this.Ya = a
    };
    wc.prototype.toString = function() {
        return String(this.Ya)
    }
    ;
    var yc = function(a) {
        sa.call(this);
        this.h = a;
        this.set("then", xc(this));
        this.set("catch", xc(this, !0));
        this.set("finally", xc(this, !1, !0))
    };
    na(yc, jb);
    var xc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new fb("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof fb || (d = void 0);
            e instanceof fb || (e = void 0);
            var f = Aa(this.h)
              , g = function(l) {
                return function(n) {
                    return c ? (l.h(f),
                    a.h) : l.h(f, n)
                }
            }
              , h = a.h.then(d && g(d), e && g(e));
            return new yc(h)
        }
        )
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var zc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Ac = function(a) {
        if (null == a)
            return String(a);
        var b = zc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Bc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Cc = function(a) {
        if (!a || "object" != Ac(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Bc(a, "constructor") && !Bc(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Bc(a, b)
    }
      , J = function(a, b) {
        var c = b || ("array" == Ac(a) ? [] : {}), d;
        for (d in a)
            if (Bc(a, d)) {
                var e = a[d];
                "array" == Ac(e) ? ("array" != Ac(c[d]) && (c[d] = []),
                c[d] = J(e, c[d])) : Cc(e) ? (Cc(c[d]) || (c[d] = {}),
                c[d] = J(e, c[d])) : c[d] = e
            }
        return c
    };
    var Ec = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, l) {
            for (var n = ta(h, 1), p = 0; p < n.length; p++)
                l[n[p]] = g(h.get(n[p]))
        }
          , g = function(h) {
            var l = d.indexOf(h);
            if (-1 < l)
                return e[l];
            if (h instanceof va) {
                var n = [];
                d.push(h);
                e.push(n);
                for (var p = h.Lb(), q = 0; q < p.length(); q++)
                    n[p.get(q)] = g(h.get(p.get(q)));
                return n
            }
            if (h instanceof yc)
                return h.h;
            if (h instanceof jb) {
                var r = {};
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            if (h instanceof fb) {
                var t = function() {
                    for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++)
                        v[w] = Dc(v[w], b, c);
                    var x = new ya(b ? b.T : new xa);
                    b && (x.h = b.h);
                    return g(h.h.apply(h, [x].concat(v)))
                };
                d.push(h);
                e.push(t);
                f(h, t);
                return t
            }
            var u = !1;
            switch (c) {
            case 1:
                u = !0;
                break;
            case 2:
                u = !1;
                break;
            case 3:
                u = !1;
                break;
            default:
            }
            if (h instanceof wc && u)
                return h.Ya;
            switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return h;
            case "object":
                if (null === h)
                    return null
            }
        };
        return g(a)
    }
      , Dc = function(a, b, c) {
        var d = []
          , e = []
          , f = function(h, l) {
            for (var n in h)
                h.hasOwnProperty(n) && l.set(n, g(h[n]))
        }
          , g = function(h) {
            var l = d.indexOf(h);
            if (-1 < l)
                return e[l];
            if (Ea(h) || Na(h)) {
                var n = new va([]);
                d.push(h);
                e.push(n);
                for (var p in h)
                    h.hasOwnProperty(p) && n.set(p, g(h[p]));
                return n
            }
            if (Cc(h)) {
                var q = new jb;
                d.push(h);
                e.push(q);
                f(h, q);
                return q
            }
            if ("function" === typeof h) {
                var r = new fb("",function(y) {
                    for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++)
                        A[B] = Ec(z(this, A[B]), b, c);
                    return g((0,
                    this.h.I)(h, h, A))
                }
                );
                d.push(h);
                e.push(r);
                f(h, r);
                return r
            }
            var w = typeof h;
            if (null === h || "string" === w || "number" === w || "boolean" === w)
                return h;
            var x = !1;
            switch (c) {
            case 1:
                x = !0;
                break;
            case 2:
                x = !1;
                break;
            default:
            }
            if (void 0 !== h && x)
                return new wc(h)
        };
        return g(a)
    };
    var Fc = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , Gc = function(a) {
        if (void 0 === a || Ea(a) || Cc(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Hc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof va)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new va(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new va(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new va(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Fc(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new va(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Fc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Ic = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" ")
      , Jc = new qa("break")
      , Kc = new qa("continue")
      , Lc = function(a, b) {
        return z(this, a) + z(this, b)
    }
      , Mc = function(a, b) {
        return z(this, a) && z(this, b)
    }
      , Nc = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        if (!(c instanceof va))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = Ec(c.get(0));
                    try {
                        return a.toString(e)
                    } catch (q) {}
                }
                return a.toString()
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if (0 <= Ic.indexOf(b)) {
                var f = Ec(c);
                return Dc(a[b].apply(a, f), this.h)
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof va) {
            if (a.has(b)) {
                var g = a.get(b);
                if (g instanceof fb) {
                    var h = Fc(c);
                    h.unshift(this.h);
                    return g.h.apply(g, h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= Hc.supportedMethods.indexOf(b)) {
                var l = Fc(c);
                l.unshift(this.h);
                return Hc[b].apply(a, l)
            }
        }
        if (a instanceof fb || a instanceof jb) {
            if (a.has(b)) {
                var n = a.get(b);
                if (n instanceof fb) {
                    var p = Fc(c);
                    p.unshift(this.h);
                    return n.h.apply(n, p)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof fb ? a.T : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, Fc(c))
        }
        if (a instanceof wc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    }
      , Oc = function(a, b) {
        a = z(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = z(this, b);
        c.set(a, d);
        return d
    }
      , Pc = function(a) {
        var b = Aa(this.h)
          , c = ib(b, Array.prototype.slice.apply(arguments));
        if (c instanceof qa)
            return c
    }
      , Qc = function() {
        return Jc
    }
      , Rc = function(a) {
        for (var b = z(this, a), c = 0; c < b.length; c++) {
            var d = z(this, b[c]);
            if (d instanceof qa)
                return d
        }
    }
      , Sc = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = z(this, arguments[c + 1]);
                za(b, d, e, !0)
            }
        }
    }
      , Tc = function() {
        return Kc
    }
      , Uc = function(a, b, c) {
        var d = new va;
        b = z(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, z(this, f))
    }
      , Vc = function(a, b) {
        return z(this, a) / z(this, b)
    }
      , Wc = function(a, b) {
        a = z(this, a);
        b = z(this, b);
        var c = a instanceof wc
          , d = b instanceof wc;
        return c || d ? c && d ? a.Ya == b.Ya : !1 : a == b
    }
      , Xc = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = z(this, arguments[c]);
        return b
    };
    function Yc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = ib(f, d);
            if (g instanceof qa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function Zc(a, b, c) {
        if ("string" === typeof b)
            return Yc(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof jb || b instanceof va || b instanceof fb) {
            var d = b.Lb()
              , e = d.length();
            return Yc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var $c = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return Zc(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , ad = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return Zc(function(e) {
            var f = Aa(d);
            za(f, a, e, !0);
            return f
        }, b, c)
    }
      , bd = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return Zc(function(e) {
            var f = Aa(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , dd = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return cd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , ed = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return cd(function(e) {
            var f = Aa(d);
            za(f, a, e, !0);
            return f
        }, b, c)
    }
      , fd = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        var d = this.h;
        return cd(function(e) {
            var f = Aa(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function cd(a, b, c) {
        if ("string" === typeof b)
            return Yc(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof va)
            return Yc(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var gd = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = z(this, a);
        if (!(f instanceof va))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = z(this, d);
        var h = Aa(g);
        for (e(g, h); hb(h, b); ) {
            var l = ib(h, d);
            if (l instanceof qa) {
                if ("break" === l.h)
                    break;
                if ("return" === l.h)
                    return l
            }
            var n = Aa(g);
            e(h, n);
            hb(n, c);
            h = n
        }
    }
      , hd = function(a) {
        a = z(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , id = function(a, b) {
        var c;
        a = z(this, a);
        b = z(this, b);
        if (void 0 === a || null === a)
            throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof jb || a instanceof va || a instanceof fb)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : ra(b) && (c = a[b]);
        else if (a instanceof wc)
            return;
        return c
    }
      , jd = function(a, b) {
        return z(this, a) > z(this, b)
    }
      , kd = function(a, b) {
        return z(this, a) >= z(this, b)
    }
      , ld = function(a, b) {
        a = z(this, a);
        b = z(this, b);
        a instanceof wc && (a = a.Ya);
        b instanceof wc && (b = b.Ya);
        return a === b
    }
      , md = function(a, b) {
        return !ld.call(this, a, b)
    }
      , nd = function(a, b, c) {
        var d = [];
        z(this, a) ? d = z(this, b) : c && (d = z(this, c));
        var e = ib(this.h, d);
        if (e instanceof qa)
            return e
    }
      , od = function(a, b) {
        return z(this, a) < z(this, b)
    }
      , pd = function(a, b) {
        return z(this, a) <= z(this, b)
    }
      , qd = function(a, b) {
        return z(this, a) % z(this, b)
    }
      , rd = function(a, b) {
        return z(this, a) * z(this, b)
    }
      , sd = function(a) {
        return -z(this, a)
    }
      , td = function(a) {
        return !z(this, a)
    }
      , ud = function(a, b) {
        return !Wc.call(this, a, b)
    }
      , vd = function() {
        return null
    }
      , wd = function(a, b) {
        return z(this, a) || z(this, b)
    }
      , xd = function(a, b) {
        var c = z(this, a);
        z(this, b);
        return c
    }
      , yd = function(a) {
        return z(this, a)
    }
      , zd = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , Ad = function(a) {
        return new qa("return",z(this, a))
    }
      , Bd = function(a, b, c) {
        a = z(this, a);
        b = z(this, b);
        c = z(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof fb || a instanceof va || a instanceof jb) && a.set(b, c);
        return c
    }
      , Cd = function(a, b) {
        return z(this, a) - z(this, b)
    }
      , Dd = function(a, b, c) {
        a = z(this, a);
        var d = z(this, b)
          , e = z(this, c);
        if (!Ea(d) || !Ea(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === z(this, d[h]))
                if (f = z(this, e[h]),
                f instanceof qa) {
                    var l = f.h;
                    if ("break" === l)
                        return;
                    if ("return" === l || "continue" === l)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]),
        f instanceof qa && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , Ed = function(a, b, c) {
        return z(this, a) ? z(this, b) : z(this, c)
    }
      , Fd = function(a) {
        a = z(this, a);
        return a instanceof fb ? "function" : typeof a
    }
      , Jd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , Kd = function(a, b, c, d) {
        var e = z(this, d);
        if (z(this, c)) {
            var f = ib(this.h, e);
            if (f instanceof qa) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; z(this, a); ) {
            var g = ib(this.h, e);
            if (g instanceof qa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            z(this, b)
        }
    }
      , Ld = function(a) {
        return ~Number(z(this, a))
    }
      , Md = function(a, b) {
        return Number(z(this, a)) << Number(z(this, b))
    }
      , Nd = function(a, b) {
        return Number(z(this, a)) >> Number(z(this, b))
    }
      , Od = function(a, b) {
        return Number(z(this, a)) >>> Number(z(this, b))
    }
      , Pd = function(a, b) {
        return Number(z(this, a)) & Number(z(this, b))
    }
      , Qd = function(a, b) {
        return Number(z(this, a)) ^ Number(z(this, b))
    }
      , Rd = function(a, b) {
        return Number(z(this, a)) | Number(z(this, b))
    };
    var Td = function() {
        this.h = new lb;
        Sd(this)
    };
    Td.prototype.execute = function(a) {
        return Ud(this.h.B(a))
    }
    ;
    var Vd = function(a, b, c) {
        return Ud(a.h.F(b, c))
    }
      , Sd = function(a) {
        var b = function(d, e) {
            nb(a.h, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function(d, e) {
            mb(a.h, String(d), e)
        };
        c(0, Lc);
        c(1, Mc);
        c(2, Nc);
        c(3, Oc);
        c(53, Pc);
        c(4, Qc);
        c(5, Rc);
        c(52, Sc);
        c(6, Tc);
        c(9, Rc);
        c(50, Uc);
        c(10, Vc);
        c(12, Wc);
        c(13, Xc);
        c(47, $c);
        c(54, ad);
        c(55, bd);
        c(63, gd);
        c(64, dd);
        c(65, ed);
        c(66, fd);
        c(15, hd);
        c(16, id);
        c(17, id);
        c(18, jd);
        c(19, kd);
        c(20, ld);
        c(21, md);
        c(22, nd);
        c(23, od);
        c(24, pd);
        c(25, qd);
        c(26, rd);
        c(27, sd);
        c(28, td);
        c(29, ud);
        c(45, vd);
        c(30, wd);
        c(32, xd);
        c(33, xd);
        c(34, yd);
        c(35, yd);
        c(46, zd);
        c(36, Ad);
        c(43, Bd);
        c(37, Cd);
        c(38, Dd);
        c(39, Ed);
        c(40, Fd);
        c(41, Jd);
        c(42, Kd);
        c(58, Ld);
        c(57, Md);
        c(60, Nd);
        c(61, Od);
        c(56, Pd);
        c(62, Qd);
        c(59, Rd)
    };
    function Ud(a) {
        if (a instanceof qa || a instanceof fb || a instanceof va || a instanceof jb || a instanceof wc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var Wd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            zi: a("consent"),
            Ag: a("convert_case_to"),
            Bg: a("convert_false_to"),
            Cg: a("convert_null_to"),
            Dg: a("convert_true_to"),
            Eg: a("convert_undefined_to"),
            il: a("debug_mode_metadata"),
            cb: a("function"),
            Bf: a("instance_name"),
            nj: a("live_only"),
            oj: a("malware_disabled"),
            pj: a("metadata"),
            sj: a("original_activity_id"),
            nl: a("original_vendor_template_id"),
            ml: a("once_on_load"),
            rj: a("once_per_event"),
            Gh: a("once_per_load"),
            ol: a("priority_override"),
            pl: a("respected_consent_types"),
            Kh: a("setup_tags"),
            gd: a("tag_id"),
            Lh: a("teardown_tags")
        }
    }();
    var Xd = []
      , Yd = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    }
      , Zd = function(a) {
        return Yd[a]
    }
      , $d = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var de = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g
      , ee = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        "&": "\\x26",
        "'": "\\x27",
        "/": "\\/",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "\\": "\\\\",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        $: "\\x24",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        ":": "\\x3a",
        "?": "\\x3f",
        "[": "\\x5b",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d"
    }
      , fe = function(a) {
        return ee[a]
    };
    Xd[8] = function(a) {
        if (null == a)
            return " null ";
        switch (typeof a) {
        case "boolean":
        case "number":
            return " " + a + " ";
        default:
            return "'" + String(String(a)).replace(de, fe) + "'"
        }
    }
    ;
    var ne = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , oe = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    }
      , pe = function(a) {
        return oe[a]
    };
    Xd[16] = function(a) {
        return a
    }
    ;
    var re;
    var se = [], te = [], ue = [], ve = [], we = [], xe = {}, ye, Ae, Ce = function() {
        var a = Be;
        Ae = Ae || a
    }, De, Ee = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Fe = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = xe[c], f = {}, g;
        for (g in a)
            a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Qh && d.Qh(a[g]),
            f[void 0 !== e ? g : g.substr(4)] = a[g]);
        e && d && d.Ph && (f.vtp_gtmCachedValues = d.Ph);
        if (b) {
            if (null == b.name) {
                var h;
                a: {
                    var l = b.index;
                    if (null == l)
                        h = "";
                    else {
                        var n;
                        switch (b.type) {
                        case 2:
                            n = se[l];
                            break;
                        case 1:
                            n = ve[l];
                            break;
                        default:
                            h = "";
                            break a
                        }
                        var p = n && n[Wd.Bf];
                        h = p ? String(p) : ""
                    }
                }
                b.name = h
            }
            e && (f.vtp_gtmEntityIndex = b.index,
            f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : re(c, f, b)
    }, He = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Ge(a[e], b, c));
        return d
    }, Ge = function(a, b, c) {
        if (Ea(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Ge(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = se[f];
                if (!g || b.Wf(g))
                    return;
                c[f] = !0;
                var h = String(g[Wd.Bf]);
                try {
                    var l = He(g, b, c);
                    l.vtp_gtmEventId = b.id;
                    b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                    d = Fe(l, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    De && (d = De.Fj(d, l))
                } catch (y) {
                    b.bi && b.bi(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Ge(a[n], b, c)] = Ge(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = Ge(a[q], b, c);
                    Ae && (p = p || r === Ae.te);
                    d.push(r)
                }
                return Ae && p ? Ae.Gj(d) : d.join("");
            case "escape":
                d = Ge(a[1], b, c);
                if (Ae && Ea(a[1]) && "macro" === a[1][0] && Ae.hk(a))
                    return Ae.Ck(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    Xd[a[t]] && (d = Xd[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!ve[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Vh: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v["function"] = a[1];
                var w = Ie(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Ie = function(a, b, c) {
        try {
            return ye(He(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Je = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.B = a;
        this.h = c
    };
    na(Je, Error);
    function Ke(a, b) {
        if (Ea(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Ke(a[c], b[c])
        }
    }
    ;var Le = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.xk = a;
        this.B = b;
        this.h = []
    };
    na(Le, Error);
    var Ne = function() {
        return function(a, b) {
            a instanceof Le || (a = new Le(a,Me));
            b && a.h.push(b);
            throw a;
        }
    };
    function Me(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Da(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var Qe = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = Oe(a), f = 0; f < te.length; f++) {
            var g = te[f]
              , h = Pe(g, e);
            if (h) {
                for (var l = g.add || [], n = 0; n < l.length; n++)
                    c[l[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < ve.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , Pe = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , Oe = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Ie(ue[c], a));
            return b[c]
        }
    };
    var Re = {
        Fj: function(a, b) {
            b[Wd.Ag] && "string" === typeof a && (a = 1 == b[Wd.Ag] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Wd.Cg) && null === a && (a = b[Wd.Cg]);
            b.hasOwnProperty(Wd.Eg) && void 0 === a && (a = b[Wd.Eg]);
            b.hasOwnProperty(Wd.Dg) && !0 === a && (a = b[Wd.Dg]);
            b.hasOwnProperty(Wd.Bg) && !1 === a && (a = b[Wd.Bg]);
            return a
        }
    };
    var Se = function() {
        this.h = {}
    };
    function Te(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Je(c,d,g);
            }
    }
    function Ue(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Te(e, b, d, g);
                    Te(f, b, d, g)
                }
            }
        }
    }
    ;var Ye = function() {
        var a = data.permissions || {}
          , b = Ve.N
          , c = this;
        this.B = new Se;
        this.h = {};
        var d = {}
          , e = Ue(this.B, b, function() {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        Ma(a, function(f, g) {
            var h = {};
            Ma(g, function(l, n) {
                var p = We(l, n);
                h[l] = p.assert;
                d[l] || (d[l] = p.ca)
            });
            c.h[f] = function(l, n) {
                var p = h[l];
                if (!p)
                    throw Xe(l, {}, "The requested permission " + l + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }
      , $e = function(a) {
        return Ze.h[a] || function() {}
    };
    function We(a, b) {
        var c = Ee(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xe;
        try {
            return Fe(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Je(e,{},"Permission " + e + " is unknown.");
                },
                ca: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function Xe(a, b, c) {
        return new Je(a,b,c)
    }
    ;var af = !1;
    var bf = {};
    bf.fl = Pa('');
    bf.Jj = Pa('');
    var cf = af
      , df = bf.Jj
      , ef = bf.fl;
    var tf = /^[a-z$_][\w$]*$/i
      , uf = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i
      , vf = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a
              , e = b[c];
            if (!uf.exec(e))
                throw Error("Invalid key wildcard");
            var f = e.indexOf(".*"), g = -1 !== f && f === e.length - 2, h = g ? e.slice(0, e.length - 2) : e, l;
            a: if (0 === d.length)
                l = !1;
            else {
                for (var n = d.split("."), p = 0; p < n.length; p++)
                    if (!tf.exec(n[p])) {
                        l = !1;
                        break a
                    }
                l = !0
            }
            if (!l || h.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length)) : d === h)
                return !0
        }
        return !1
    };

    var wf = function(a, b) {
        return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
    }
      , xf = function(a, b) {
        var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
        wf(b, "/*") && (b = b.slice(0, -2));
        wf(b, "?") && (b = b.slice(0, -1));
        var d = b.split("*");
        if (!c && 1 === d.length)
            return a === d[0];
        for (var e = -1, f = 0; f < d.length; f++) {
            var g = d[f];
            if (g) {
                e = a.indexOf(g, e);
                if (-1 === e || 0 === f && 0 !== e)
                    return !1;
                e += g.length
            }
        }
        if (c || e === a.length)
            return !0;
        var h = d[d.length - 1];
        return a.lastIndexOf(h) === a.length - h.length
    }
      , yf = /^[a-z0-9-]+$/i
      , zf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i
      , Bf = function(a, b) {
        var c;
        if (!(c = !Af(a))) {
            var d;
            a: {
                var e = a.hostname.split(".");
                if (2 > e.length)
                    d = !1;
                else {
                    for (var f = 0; f < e.length; f++)
                        if (!yf.exec(e[f])) {
                            d = !1;
                            break a
                        }
                    d = !0
                }
            }
            c = !d
        }
        if (c)
            return !1;
        for (var g = 0; g < b.length; g++) {
            var h;
            var l = a
              , n = b[g];
            if (!zf.exec(n))
                throw Error("Invalid Wildcard");
            var p = n.slice(8), q = p.slice(0, p.indexOf("/")), r;
            var t = l.hostname
              , u = q;
            if (0 !== u.indexOf("*."))
                r = t.toLowerCase() === u.toLowerCase();
            else {
                u = u.slice(2);
                var v = t.toLowerCase().indexOf(u.toLowerCase());
                r = -1 === v ? !1 : t.length === u.length ? !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
            }
            if (r) {
                var w = p.slice(p.indexOf("/"));
                h = xf(l.pathname + l.search, w) ? !0 : !1
            } else
                h = !1;
            if (h)
                return !0
        }
        return !1
    }
      , Af = function(a) {
        return "https:" === a.protocol && (!a.port || "443" === a.port)
    };
    var Cf = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function Df(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;var Ef = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
      , Ff = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }
      , K = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = Ef.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , l = c[d];
            if (null == l) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof l;
                l instanceof fb ? n = "Fn" : l instanceof va ? n = "List" : l instanceof jb ? n = "DustMap" : l instanceof wc && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (Ff[n] || n) + ", which does not match required type " + (Ff[h] || h) + ".");
            }
        }
    };
    function Gf(a) {
        return "" + a
    }
    function Jf(a, b) {
        var c = [];
        return c
    }
    ;var Kf = function(a, b) {
        var c = new fb(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = z(this, d[e]);
            return b.apply(this, d)
        }
        );
        c.Mb();
        return c
    }
      , Lf = function(a, b) {
        var c = new jb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ca(e) ? c.set(d, Kf(a + "_" + d, e)) : (Da(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.Mb();
        return c
    };
    var Mf = function(a, b) {
        K(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new jb;
        return d = Lf("AssertApiSubject", c)
    };
    var Nf = function(a, b) {
        K(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof yc)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new jb;
        return d = Lf("AssertThatSubject", c)
    };
    function Of(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(Ec(arguments[d], c));
            return Dc(a.apply(null, b))
        }
    }
    var Qf = function() {
        for (var a = Math, b = Pf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Of(a[e].bind(a)))
        }
        return c
    };
    var Rf = function(a) {
        var b;
        return b
    };
    var Sf = function(a) {
        var b;
        return b
    };
    var Tf = function(a) {
        return encodeURI(a)
    };
    var Uf = function(a) {
        return encodeURIComponent(a)
    };
    var Vf = function(a) {
        K(F(this), ["message:?string"], arguments);
    };
    var Wf = function(a, b) {
        K(F(this), ["min:!number", "max:!number"], arguments);
        return Ja(a, b)
    };
    var M = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        d.Dj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Xf = function() {
        M(this, "read_container_data");
        var a = new jb;
        a.set("containerId", 'GTM-KX4JH47');
        a.set("version", '80');
        a.set("environmentName", '');
        a.set("debugMode", cf);
        a.set("previewMode", ef);
        a.set("environmentMode", df);
        a.Mb();
        return a
    };
    var Yf = function() {
        return (new Date).getTime()
    };
    var Zf = function(a) {
        if (null === a)
            return "null";
        if (a instanceof va)
            return "array";
        if (a instanceof fb)
            return "function";
        if (a instanceof wc) {
            a = a.Ya;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var $f = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (cf || ef) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Dc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Ec(c))
            })
        }
    };
    var ag = function(a) {
        return Oa(Ec(a, this.h))
    };
    var bg = function(a) {
        return Number(Ec(a, this.h))
    };
    var cg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var dg = function(a, b, c) {
        var d = null
          , e = !1;
        K(F(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new jb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof jb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)),
            e = !0)
        }
        return e ? d : null
    };
    var Pf = "floor ceil round max min abs pow sqrt".split(" ");
    var eg = function() {
        var a = {};
        return {
            Uj: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Uk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , fg = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return fb.prototype.h.apply(a, c)
        }
    }
      , gg = function(a, b) {
        K(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var hg = {};
    hg.keys = function(a) {
        return new va
    }
    ;
    hg.values = function(a) {
        return new va
    }
    ;
    hg.entries = function(a) {
        return new va
    }
    ;
    hg.freeze = function(a) {
        return a
    }
    ;
    hg.delete = function(a, b) {
        return !1
    }
    ;
    var jg = function() {
        this.h = {};
        this.B = {};
    };
    jg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    jg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ca(b) ? Kf(a, b) : Lf(a, b)
    }
    ;
    function kg(a, b) {
        var c = void 0;
        return c
    }
    ;function lg() {
        var a = {};
        return a
    }
    ;var ng = function(a) {
        return mg ? G.querySelectorAll(a) : null
    }
      , og = function(a, b) {
        if (!mg)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!G.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , pg = !1;
    if (G.querySelectorAll)
        try {
            var qg = G.querySelectorAll(":root");
            qg && 1 == qg.length && qg[0] == G.documentElement && (pg = !0)
        } catch (a) {}
    var mg = pg;
    var N = function(a) {
        vb("GTM", a)
    };
    var rg = function(a) {
        return null == a ? "" : k(a) ? Ra(String(a)) : "e0"
    }
      , tg = function(a) {
        return a.replace(sg, "")
    }
      , vg = function(a) {
        return ug(a.replace(/\s/g, ""))
    }
      , ug = function(a) {
        return Ra(a.replace(wg, "").toLowerCase())
    }
      , yg = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return xg.test(a) ? a : "e0"
    }
      , Ag = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (zg.test(c))
                return c
        }
        return "e0"
    }
      , Dg = function(a, b) {
        window.Promise || b([]);
        Promise.all(a.map(function(c) {
            return c.value && -1 !== Bg.indexOf(c.name) ? Cg(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        })
    }
      , Cg = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (m.crypto && m.crypto.subtle) {
            if (Eg.test(a))
                return Promise.resolve(a);
            try {
                var b = Fg(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return m.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
      , Fg = function(a) {
        var b;
        if (m.TextEncoder)
            b = (new m.TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , wg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , zg = /^\S+@\S+\.\S+$/
      , xg = /^\+\d{10,15}$/
      , sg = /[.~]/g
      , Gg = /^[0-9A-Za-z_-]{43}$/
      , Eg = /^[0-9A-Fa-f]{64}$/
      , Hg = {}
      , Ig = (Hg.email = "em",
    Hg.phone_number = "pn",
    Hg.first_name = "fn",
    Hg.last_name = "ln",
    Hg.street = "sa",
    Hg.city = "ct",
    Hg.region = "rg",
    Hg.country = "co",
    Hg.postal_code = "pc",
    Hg.error_code = "ec",
    Hg)
      , Jg = {}
      , Kg = (Jg.email = "sha256_email_address",
    Jg.phone_number = "sha256_phone_number",
    Jg.first_name = "sha256_first_name",
    Jg.last_name = "sha256_last_name",
    Jg.street = "sha256_street",
    Jg)
      , Lg = function(a, b) {
        function c(t, u, v, w) {
            var x = rg(t);
            "" !== x && (Eg.test(x) ? l.push({
                name: u,
                value: x,
                index: w
            }) : l.push({
                name: u,
                value: v(x),
                index: w
            }))
        }
        function d(t, u) {
            var v = t;
            if (k(v) || Ea(v)) {
                v = Ea(t) ? t : [t];
                for (var w = 0; w < v.length; ++w) {
                    var x = rg(v[w])
                      , y = Eg.test(x);
                    u && !y && N(89);
                    !u && y && N(88)
                }
            }
        }
        function e(t, u) {
            var v = t[u];
            d(v, !1);
            var w = Kg[u];
            t.hasOwnProperty(w) && (t.hasOwnProperty(u) && N(90),
            v = t[w],
            d(v, !0));
            return v
        }
        function f(t, u, v) {
            var w = e(t, u);
            w = Ea(w) ? w : [w];
            for (var x = 0; x < w.length; ++x)
                c(w[x], u, v)
        }
        function g(t, u, v, w) {
            var x = e(t, u);
            c(x, u, v, w)
        }
        function h(t) {
            return function(u) {
                N(64);
                return t(u)
            }
        }
        var l = [];
        if ("https:" === m.location.protocol) {
            f(a, "email", Ag);
            f(a, "phone_number", yg);
            f(a, "first_name", h(vg));
            f(a, "last_name", h(vg));
            var n = a.home_address || {};
            f(n, "street", h(ug));
            f(n, "city", h(ug));
            f(n, "postal_code", h(tg));
            f(n, "region", h(ug));
            f(n, "country", h(tg));
            var p = a.address || {};
            p = Ea(p) ? p : [p];
            for (var q = 0; q < p.length; q++) {
                var r = p[q];
                g(r, "first_name", vg, q);
                g(r, "last_name", vg, q);
                g(r, "street", ug, q);
                g(r, "city", ug, q);
                g(r, "postal_code", tg, q);
                g(r, "region", ug, q);
                g(r, "country", tg, q)
            }
            Dg(l, b)
        } else
            l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            b(l)
    }
      , Mg = function(a, b) {
        Lg(a, function(c) {
            for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                var g = c[f].name
                  , h = c[f].value
                  , l = c[f].index
                  , n = Ig[g];
                n && h && (-1 === Bg.indexOf(g) || /^e\d+$/.test(h) || Gg.test(h) || Eg.test(h)) && (void 0 !== l && (n += l),
                d.push(n + "." + h),
                e++)
            }
            1 === c.length && "error_code" === c[0].name && (e = 0);
            b(encodeURIComponent(d.join("~")), e)
        })
    }
      , Ng = function(a) {
        if (m.Promise)
            try {
                return new Promise(function(b) {
                    Mg(a, function(c, d) {
                        b({
                            Dd: c,
                            Bk: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , Bg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Og = [];
    Og[7] = !0;
    Og[9] = !0;
    Og[27] = !0;
    Og[6] = !0;
    Og[12] = !0;
    Og[11] = !0;
    Og[13] = !0;
    Og[15] = !0;
    Og[23] = !0;
    Og[29] = !0;
    Og[35] = !0;
    Og[36] = !0;
    Og[38] = !0;
    Og[43] = !0;
    Og[44] = !0;
    a: {
        for (var Pg, Qg, Rg = 0; Pg === Qg; )
            if (Pg = Math.floor(2 * Math.random()),
            Qg = Math.floor(2 * Math.random()),
            Rg++,
            20 < Rg)
                break a;
        Pg ? Og[46] = !0 : Og[47] = !0;
    }
    Og[54] = !0;
    Og[57] = !0;
    Og[60] = !0;
    var R = function(a) {
        return !!Og[a]
    };
    var S = {
        g: {
            J: "ad_storage",
            Z: "analytics_storage",
            We: "region",
            zg: "consent_updated",
            Xe: "wait_for_update",
            Di: "app_remove",
            Ei: "app_store_refund",
            Fi: "app_store_subscription_cancel",
            Gi: "app_store_subscription_convert",
            Hi: "app_store_subscription_renew",
            Fg: "add_payment_info",
            Gg: "add_shipping_info",
            Ec: "add_to_cart",
            Fc: "remove_from_cart",
            Hg: "view_cart",
            Yb: "begin_checkout",
            Gc: "select_item",
            Fb: "view_item_list",
            Zb: "select_promotion",
            Gb: "view_promotion",
            Ja: "purchase",
            Hc: "refund",
            Oa: "view_item",
            Ig: "add_to_wishlist",
            Ii: "first_open",
            Ji: "first_visit",
            Da: "gtag.config",
            Ka: "gtag.get",
            Ki: "in_app_purchase",
            Ic: "page_view",
            Li: "session_start",
            Ze: "user_engagement",
            ac: "gclid",
            na: "ads_data_redaction",
            fa: "allow_ad_personalization_signals",
            af: "allow_custom_scripts",
            Mi: "allow_display_features",
            Jc: "allow_enhanced_conversions",
            bc: "allow_google_signals",
            Ea: "allow_interest_groups",
            Ud: "auid",
            Ni: "auto_detection_enabled",
            kb: "aw_remarketing",
            Vd: "aw_remarketing_only",
            Kc: "discount",
            Lc: "aw_feed_country",
            Mc: "aw_feed_language",
            ia: "items",
            Nc: "aw_merchant_id",
            Jg: "aw_basket_type",
            Wd: "campaign_content",
            Xd: "campaign_id",
            Yd: "campaign_medium",
            Zd: "campaign_name",
            Oc: "campaign",
            ae: "campaign_source",
            be: "campaign_term",
            xb: "client_id",
            Oi: "content_group",
            Pi: "content_type",
            La: "conversion_cookie_prefix",
            Pc: "conversion_id",
            lb: "conversion_label",
            ya: "conversion_linker",
            bf: "conversion_api",
            nb: "cookie_domain",
            Pa: "cookie_expires",
            ob: "cookie_flags",
            Qc: "cookie_name",
            cf: "cookie_path",
            Za: "cookie_prefix",
            Hb: "cookie_update",
            cc: "country",
            va: "currency",
            Rc: "customer_lifetime_value",
            Sc: "custom_map",
            Qi: "debug_mode",
            ja: "developer_id",
            Kg: "disable_merchant_reported_purchases",
            Ri: "dc_custom_params",
            Si: "dc_natural_search",
            df: "dynamic_event_settings",
            Ti: "affiliation",
            Lg: "checkout_option",
            Mg: "checkout_step",
            Ui: "coupon",
            Ng: "item_list_name",
            Og: "list_name",
            Vi: "promotions",
            Tc: "shipping",
            Pg: "tax",
            ce: "engagement_time_msec",
            Uc: "enhanced_client_id",
            Vc: "enhanced_conversions",
            Qg: "enhanced_conversions_automatic_settings",
            Wc: "estimated_delivery_date",
            ef: "euid_logged_in_state",
            fc: "event_callback",
            hc: "event_developer_id_string",
            Rg: "event",
            de: "event_settings",
            ee: "event_timeout",
            Wi: "experiments",
            ff: "firebase_id",
            fe: "first_party_collection",
            he: "_x_20",
            Ib: "_x_19",
            Sg: "fledge",
            Tg: "flight_error_code",
            Ug: "flight_error_message",
            Vg: "gac_gclid",
            ie: "gac_wbraid",
            Wg: "gac_wbraid_multiple_conversions",
            Xc: "ga_restrict_domain",
            hf: "ga_temp_client_id",
            Xg: "gdpr_applies",
            Yg: "geo_granularity",
            pb: "value_callback",
            ab: "value_key",
            ic: "global_developer_id_string",
            jl: "google_ono",
            yb: "google_signals",
            je: "google_tld",
            ke: "groups",
            Zg: "gsa_experiment_id",
            ah: "iframe_state",
            me: "ignore_referrer",
            jf: "internal_traffic_results",
            ne: "is_legacy_loaded",
            bh: "is_passthrough",
            Qa: "language",
            kf: "legacy_developer_id_string",
            za: "linker",
            jc: "accept_incoming",
            kc: "decorate_forms",
            aa: "domains",
            Yc: "url_position",
            dh: "method",
            mc: "new_customer",
            eh: "non_interaction",
            Xi: "optimize_id",
            Ra: "page_location",
            lf: "page_path",
            Sa: "page_referrer",
            nc: "page_title",
            fh: "passengers",
            gh: "phone_conversion_callback",
            Yi: "phone_conversion_country_code",
            hh: "phone_conversion_css_class",
            Zi: "phone_conversion_ids",
            ih: "phone_conversion_number",
            jh: "phone_conversion_options",
            kh: "quantity",
            Zc: "redact_device_info",
            nf: "redact_enhanced_user_id",
            aj: "redact_ga_client_id",
            bj: "redact_user_id",
            oe: "referral_exclusion_definition",
            zb: "restricted_data_processing",
            cj: "retoken",
            lh: "screen_name",
            Jb: "screen_resolution",
            dj: "search_term",
            Fa: "send_page_view",
            Kb: "send_to",
            ad: "session_duration",
            pe: "session_engaged",
            pf: "session_engaged_time",
            Ab: "session_id",
            qe: "session_number",
            oc: "delivery_postal_code",
            mh: "tc_privacy_string",
            nh: "temporary_client_id",
            ej: "tracking_id",
            qf: "traffic_type",
            Ma: "transaction_id",
            wa: "transport_url",
            oh: "trip_type",
            bd: "update",
            qb: "url_passthrough",
            rf: "_user_agent_architecture",
            sf: "_user_agent_bitness",
            tf: "_user_agent_full_version_list",
            ph: "_user_agent_mobile",
            uf: "_user_agent_model",
            vf: "_user_agent_platform",
            wf: "_user_agent_platform_version",
            qh: "_user_agent_wait",
            xf: "_user_agent_wow64",
            ka: "user_data",
            rh: "user_data_auto_latency",
            sh: "user_data_auto_meta",
            th: "user_data_auto_multi",
            uh: "user_data_auto_selectors",
            vh: "user_data_auto_status",
            wh: "user_data_mode",
            yf: "user_data_settings",
            Aa: "user_id",
            Ta: "user_properties",
            xh: "us_privacy_string",
            ra: "value",
            se: "wbraid",
            yh: "wbraid_multiple_conversions",
            Bh: "_host_name",
            Ch: "_in_page_command",
            Dh: "_is_linker_valid",
            Eh: "_is_passthrough_cid",
            Fh: "non_personalized_ads",
            fd: "sst_parameters"
        }
    }
      , Sg = {}
      , Tg = (Sg[S.g.fa] = 1,
    Sg[S.g.Jc] = 1,
    Sg[S.g.bc] = 1,
    Sg[S.g.ia] = 1,
    Sg[S.g.nb] = 1,
    Sg[S.g.Pa] = 1,
    Sg[S.g.ob] = 1,
    Sg[S.g.Qc] = 1,
    Sg[S.g.cf] = 1,
    Sg[S.g.Za] = 1,
    Sg[S.g.Hb] = 1,
    Sg[S.g.Sc] = 1,
    Sg[S.g.ja] = 1,
    Sg[S.g.df] = 1,
    Sg[S.g.fc] = 1,
    Sg[S.g.de] = 1,
    Sg[S.g.ee] = 1,
    Sg[S.g.fe] = 1,
    Sg[S.g.Xc] = 1,
    Sg[S.g.yb] = 1,
    Sg[S.g.je] = 1,
    Sg[S.g.ke] = 1,
    Sg[S.g.jf] = 1,
    Sg[S.g.ne] = 1,
    Sg[S.g.za] = 1,
    Sg[S.g.nf] = 1,
    Sg[S.g.oe] = 1,
    Sg[S.g.zb] = 1,
    Sg[S.g.Fa] = 1,
    Sg[S.g.Kb] = 1,
    Sg[S.g.ad] = 1,
    Sg[S.g.pf] = 1,
    Sg[S.g.oc] = 1,
    Sg[S.g.wa] = 1,
    Sg[S.g.bd] = 1,
    Sg[S.g.yf] = 1,
    Sg[S.g.Ta] = 1,
    Sg);
    R(65) && (Tg[S.g.fd] = 1);
    var Ug = Object.freeze(Tg);
    Object.freeze([S.g.Ra, S.g.Sa, S.g.nc, S.g.Qa, S.g.lh, S.g.Aa, S.g.ff, S.g.Oi]);
    var Vg = {}
      , Wg = Object.freeze((Vg[S.g.Di] = 1,
    Vg[S.g.Ei] = 1,
    Vg[S.g.Fi] = 1,
    Vg[S.g.Gi] = 1,
    Vg[S.g.Hi] = 1,
    Vg[S.g.Ii] = 1,
    Vg[S.g.Ji] = 1,
    Vg[S.g.Ki] = 1,
    Vg[S.g.Li] = 1,
    Vg[S.g.Ze] = 1,
    Vg))
      , Xg = {}
      , Yg = Object.freeze((Xg[S.g.Fg] = 1,
    Xg[S.g.Gg] = 1,
    Xg[S.g.Ec] = 1,
    Xg[S.g.Fc] = 1,
    Xg[S.g.Hg] = 1,
    Xg[S.g.Yb] = 1,
    Xg[S.g.Gc] = 1,
    Xg[S.g.Fb] = 1,
    Xg[S.g.Zb] = 1,
    Xg[S.g.Gb] = 1,
    Xg[S.g.Ja] = 1,
    Xg[S.g.Hc] = 1,
    Xg[S.g.Oa] = 1,
    Xg[S.g.Ig] = 1,
    Xg))
      , Zg = Object.freeze([S.g.fa, S.g.bc, S.g.Hb])
      , $g = Object.freeze([].concat(Zg))
      , ah = Object.freeze([S.g.Pa, S.g.ee, S.g.ad, S.g.pf, S.g.ce])
      , bh = Object.freeze([].concat(ah))
      , ch = {}
      , dh = (ch[S.g.J] = "1",
    ch[S.g.Z] = "2",
    ch)
      , eh = {}
      , fh = Object.freeze((eh[S.g.fa] = 1,
    eh[S.g.Jc] = 1,
    eh[S.g.Ea] = 1,
    eh[S.g.kb] = 1,
    eh[S.g.Vd] = 1,
    eh[S.g.Kc] = 1,
    eh[S.g.Lc] = 1,
    eh[S.g.Mc] = 1,
    eh[S.g.ia] = 1,
    eh[S.g.Nc] = 1,
    eh[S.g.La] = 1,
    eh[S.g.ya] = 1,
    eh[S.g.nb] = 1,
    eh[S.g.Pa] = 1,
    eh[S.g.ob] = 1,
    eh[S.g.Za] = 1,
    eh[S.g.va] = 1,
    eh[S.g.Rc] = 1,
    eh[S.g.ja] = 1,
    eh[S.g.Kg] = 1,
    eh[S.g.Vc] = 1,
    eh[S.g.Wc] = 1,
    eh[S.g.ff] = 1,
    eh[S.g.fe] = 1,
    eh[S.g.ne] = 1,
    eh[S.g.Qa] = 1,
    eh[S.g.mc] = 1,
    eh[S.g.Ra] = 1,
    eh[S.g.Sa] = 1,
    eh[S.g.gh] = 1,
    eh[S.g.hh] = 1,
    eh[S.g.ih] = 1,
    eh[S.g.jh] = 1,
    eh[S.g.zb] = 1,
    eh[S.g.Fa] = 1,
    eh[S.g.Kb] = 1,
    eh[S.g.oc] = 1,
    eh[S.g.Ma] = 1,
    eh[S.g.wa] = 1,
    eh[S.g.bd] = 1,
    eh[S.g.qb] = 1,
    eh[S.g.ka] = 1,
    eh[S.g.Aa] = 1,
    eh[S.g.ra] = 1,
    eh));
    Object.freeze(S.g);
    var gh = {}
      , hh = m.google_tag_manager = m.google_tag_manager || {}
      , ih = Math.random();
    gh.ed = "bu0";
    gh.Ef = Number("0") || 0;
    gh.ma = "dataLayer";
    gh.Bi = "ChEIgOGmnAYQycmm54W5lbKdARIkAGdFX2naAjf9Pmik7Ncw+PcsQZLvmuc4WPeWL6a4uLZSDuY7GgItFw\x3d\x3d";
    var jh = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, kh = {
        __paused: !0,
        __tg: !0
    }, lh;
    for (lh in jh)
        jh.hasOwnProperty(lh) && (kh[lh] = !0);
    var mh = Pa(""), nh = Pa(""), oh, ph = !1;
    oh = ph;
    var qh, rh = !1;
    qh = rh;
    var sh, th = !1;
    sh = th;
    var uh, vh = !1;
    uh = vh;
    gh.Td = "www.googletagmanager.com";
    var wh = "" + gh.Td + (oh ? "/gtag/js" : "/gtm.js")
      , xh = null
      , yh = null
      , zh = {}
      , Ah = {}
      , Bh = {}
      , Ch = function() {
        var a = hh.sequence || 1;
        hh.sequence = a + 1;
        return a
    };
    gh.Ai = "";
    var Dh = "";
    gh.xe = Dh;
    var Lh = new Ka
      , Mh = {}
      , Nh = {}
      , Qh = {
        name: gh.ma,
        set: function(a, b) {
            J(bb(a, b), Mh);
            Oh()
        },
        get: function(a) {
            return Ph(a, 2)
        },
        reset: function() {
            Lh = new Ka;
            Mh = {};
            Oh()
        }
    }
      , Ph = function(a, b) {
        return 2 != b ? Lh.get(a) : Rh(a)
    }
      , Rh = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Mh, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , Sh = function(a, b) {
        Nh.hasOwnProperty(a) || (Lh.set(a, b),
        J(bb(a, b), Mh),
        Oh())
    }
      , Th = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = Ph(c, 1);
            if (Ea(d) || Cc(d))
                d = J(d);
            Nh[c] = d
        }
    }
      , Oh = function(a) {
        Ma(Nh, function(b, c) {
            Lh.set(b, c);
            J(bb(b), Mh);
            J(bb(b, c), Mh);
            a && delete Nh[b]
        })
    }
      , Uh = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? Rh(a) : Lh.get(a);
        "array" === Ac(d) || "object" === Ac(d) ? c = J(d) : c = d;
        return c
    };
    var Vh, Wh = !1;
    function Xh() {
        Wh = !0;
        Vh = Vh || {}
    }
    var Yh = function(a) {
        Wh || Xh();
        return Vh[a]
    };
    var Zh = function() {
        var a = m.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , $h = function(a) {
        if (G.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
            return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d, null))
        }
        return !1
    };
    var ii = /:[0-9]+$/
      , ji = function(a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var l = h.slice(1).join("=");
                if (!c)
                    return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }
      , mi = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = ki(a.protocol) || ki(m.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : m.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(ii, "").toLowerCase());
        return li(a, b, c, d, e)
    }
      , li = function(a, b, c, d, e) {
        var f, g = ki(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = ni(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(ii, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || vb("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = ji(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , ki = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , ni = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , oi = function(a) {
        var b = G.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || vb("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(ii, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , pi = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = oi(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var l = "" + f + g + h;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    };
    var qi = {};
    var si = function(a, b, c) {
        if (a) {
            var d = a.element
              , e = {
                Xa: a.Xa,
                tagName: d.tagName,
                type: 1
            };
            b && (e.querySelector = ri(d));
            c && (e.isVisible = !$h(d));
            return e
        }
    }
      , vi = function(a) {
        if (0 != a.length) {
            var b;
            b = ti(a, function(c) {
                return !ui.test(c.Xa)
            });
            b = ti(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = ti(b, function(c) {
                return !$h(c.element)
            });
            return b[0]
        }
    }
      , ti = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , ri = function(a) {
        var b;
        if (a === G.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = ri(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , wi = !0
      , xi = !1;
    qi.xi = "true";
    var yi = function(a) {
        if ("false" === qi.xi || !wi)
            return !1;
        if (xi)
            return !0;
        var b = Yh("AW-" + a);
        return !!b && !!b.preAutoPii
    }
      , zi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      , Ai = /@(gmail|googlemail)\./i
      , ui = /support|noreply/i
      , Bi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , Ci = ["BR"]
      , Di = {}
      , Ei = function(a) {
        a = a || {
            Ob: !0,
            Pb: !0
        };
        a.rb = a.rb || {
            email: !0,
            phone: !0,
            address: !0
        };
        var b, c = a, d = !!c.Ob + "." + !!c.Pb;
        c && c.pd && c.pd.length && (d += "." + c.pd.join("."));
        c && c.rb && (d += "." + c.rb.email + "." + c.rb.phone + "." + c.rb.address);
        b = d;
        var e = Di[b];
        if (e && 200 > Ta() - e.timestamp)
            return e.result;
        var f;
        var g = []
          , h = G.body;
        if (h) {
            for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                var p = l[n];
                if (!(0 <= Bi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                        if (!(0 <= Ci.indexOf(p.children[r].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                    q || g.push(p)
                }
            }
            f = {
                elements: g,
                status: 1E4 < l.length ? "2" : "1"
            }
        } else
            f = {
                elements: g,
                status: "4"
            };
        var t = f, u = t.status, v = [], w;
        if (a.rb && a.rb.email) {
            for (var x = t.elements, y = [], A = 0; A < x.length; A++) {
                var B = x[A]
                  , C = B.textContent;
                "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                if (C) {
                    var E = C.match(zi);
                    if (E) {
                        var H = E[0], D;
                        if (m.location) {
                            var L = li(m.location, "host", !0);
                            D = 0 <= H.toLowerCase().indexOf(L)
                        } else
                            D = !1;
                        D || y.push({
                            element: B,
                            Xa: H
                        })
                    }
                }
            }
            var P = a && a.pd;
            if (P && 0 !== P.length) {
                for (var X = [], ja = 0; ja < y.length; ja++) {
                    for (var O = !0, Q = 0; Q < P.length; Q++) {
                        var la = P[Q];
                        if (la && og(y[ja].element, la)) {
                            O = !1;
                            break
                        }
                    }
                    O && X.push(y[ja])
                }
                v = X
            } else
                v = y;
            w = vi(v);
            10 < y.length && (u = "3")
        }
        var ca = [];
        !a.sg && w && (v = [w]);
        for (var V = 0; V < v.length; V++)
            ca.push(si(v[V], a.Ob, a.Pb));
        var Fa = {
            elements: ca.slice(0, 10),
            Pe: si(w, a.Ob, a.Pb),
            status: u
        };
        Di[b] = {
            timestamp: Ta(),
            result: Fa
        };
        return Fa
    }
      , Fi = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + Ai.test(a.Xa)
    };
    var Gi = function(a, b, c) {
        if (!c)
            return !1;
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var l = g[h].trim();
                if (l) {
                    if (0 === l.indexOf("dataLayer."))
                        f = Ph(l.substring(10));
                    else {
                        var n = l.split(".");
                        f = m[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]]
                    }
                    if (void 0 !== f)
                        break
                }
            }
        } else if ("css_selector" === d && mg) {
            var q = ng(e);
            if (q && 0 < q.length) {
                f = [];
                for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                    f.push(hc(q[r]) || Ra(q[r].value));
                f = 1 === f.length ? f[0] : f
            }
        }
        return f ? (a[b] = f,
        !0) : !1
    }
      , Hi = function(a) {
        if (a) {
            var b = {}
              , c = !1;
            c = Gi(b, "email", a.email) || c;
            c = Gi(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = Gi(f, "first_name", d[e].first_name) || c;
                c = Gi(f, "last_name", d[e].last_name) || c;
                c = Gi(f, "street", d[e].street) || c;
                c = Gi(f, "city", d[e].city) || c;
                c = Gi(f, "region", d[e].region) || c;
                c = Gi(f, "country", d[e].country) || c;
                c = Gi(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ? b : void 0
        }
    }
      , Ii = function(a) {
        return a.D[S.g.yf]
    }
      , Ji = function(a) {
        if (!Cc(a))
            return !1;
        var b = a.mode;
        return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
    }
      , Ki = function(a) {
        if (a) {
            if ("selectors" === a.mode || Cc(a.selectors))
                return Hi(a.selectors);
            if ("auto_detect" === a.mode || Cc(a.auto_detect)) {
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = Ei({
                        Ob: !1,
                        Pb: !1,
                        pd: c.exclude_element_selectors,
                        rb: {
                            email: !!c.email,
                            phone: !!c.phone,
                            address: !!c.address
                        }
                    }).elements
                      , e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if (1 === g.type) {
                                e.email = g.Xa;
                                break
                            }
                        }
                    b = e
                } else
                    b = void 0;
                return b
            }
        }
    };
    var Li = function(a) {
        var b = Ub && Ub.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b))
            return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c)
            return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f])
                return !0;
            if (e[f] != d[f])
                return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    }
      , Mi = function() {
        return !0 === m._gtmpcm ? !0 : Li("14.1.1")
    };
    var Oi = function(a, b) {
        var c;
        if (a)
            a: {
                switch (a.enhanced_conversions_mode) {
                case "manual":
                    if (b && Cc(b)) {
                        c = b;
                        break a
                    }
                    var d = a.enhanced_conversions_manual_var;
                    c = void 0 !== d ? d : m.enhanced_conversion_data;
                    break a;
                case "automatic":
                    c = Hi(a[S.g.Qg]);
                    break a
                }
                c = void 0
            }
        else
            c = m.enhanced_conversion_data;
        var e = c, f = (a || {}).enhanced_conversions_mode, g;
        if (!e)
            return {
                Xa: e,
                yc: void 0
            };
        if ("manual" === f)
            switch (e._tag_mode) {
            case "CODE":
                g = "c";
                break;
            case "AUTO":
                g = "a";
                break;
            case "MANUAL":
                g = "m";
                break;
            default:
                g = "c"
            }
        else
            g = "automatic" === f ? Ni(a) ? "a" : "m" : "c";
        return {
            Xa: e,
            yc: g
        }
    }
      , Pi = function(a, b) {
        if (m.Promise) {
            var c = Oi(a, b)
              , d = c.Xa
              , e = c.yc;
            try {
                return d ? Ng(d).then(function(f) {
                    f.yc = e;
                    return f
                }) : Promise.resolve({
                    Dd: "",
                    yc: e
                })
            } catch (f) {}
        }
    }
      , Ni = function(a) {
        var b = a && a[S.g.Qg];
        return b && b[S.g.Ni]
    }
      , Qi = function() {
        return -1 !== Ub.userAgent.toLowerCase().indexOf("firefox")
    }
      , Ri = function(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    };
    var Si = {}
      , Ti = function(a, b) {
        if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
            return m._gtmexpgrp[a];
        void 0 === Si[a] && (Si[a] = Math.floor(Math.random() * b));
        return Si[a]
    };
    var Ui = function() {
        if (mh || !0 !== m._gtmdgs && !Li("11"))
            return -1;
        var a = Oa('1');
        return Ti(1, 100) < a ? Ti(2, 2) : -1
    };
    var Vi = {
        Ee: "TR",
        hi: "TR-34"
    };
    var Wi = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var Xi = function(a) {
        Xi[" "](a);
        return a
    };
    Xi[" "] = function() {}
    ;
    var Zi = function() {
        var a = Yi
          , b = "Uf";
        if (a.Uf && a.hasOwnProperty(b))
            return a.Uf;
        var c = new a;
        return a.Uf = c
    };
    var Yi = function() {
        var a = {};
        this.h = function() {
            var b = Wi.h
              , c = Wi.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.B = function() {
            a[Wi.h] = !0
        }
    };
    var $i = [];
    function aj() {
        var a = Wb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: bj,
            update: cj,
            addListener: dj,
            notifyListeners: ej,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function bj(a, b, c, d, e, f) {
        var g = aj();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries
              , l = h[a] || {}
              , n = l.region
              , p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update)
                  , r = {
                    region: p,
                    initial: "granted" === b,
                    update: l.update,
                    quiet: q
                };
                if ("" !== d || !1 !== l.initial)
                    h[a] = r;
                q && m.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1,
                    fj(a),
                    ej(),
                    vb("TAGGING", 2))
                }, f)
            }
        }
    }
    function cj(a, b) {
        var c = aj();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = gj(c, a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = gj(c, a);
            f.quiet ? (f.quiet = !1,
            fj(a)) : g !== d && fj(a)
        }
    }
    function dj(a, b) {
        $i.push({
            Kf: a,
            Oj: b
        })
    }
    function fj(a) {
        for (var b = 0; b < $i.length; ++b) {
            var c = $i[b];
            Ea(c.Kf) && -1 !== c.Kf.indexOf(a) && (c.ei = !0)
        }
    }
    function ej(a, b) {
        for (var c = 0; c < $i.length; ++c) {
            var d = $i[c];
            if (d.ei) {
                d.ei = !1;
                try {
                    d.Oj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function gj(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var hj = function(a) {
        var b = aj();
        b.accessedAny = !0;
        return gj(b, a)
    }
      , ij = function(a) {
        var b = aj();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , jj = function(a) {
        var b = aj();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , kj = function() {
        if (!Zi().h())
            return !1;
        var a = aj();
        a.accessedAny = !0;
        return a.active
    }
      , lj = function() {
        var a = aj();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , mj = function(a, b) {
        aj().addListener(a, b)
    }
      , nj = function(a, b) {
        aj().notifyListeners(a, b)
    }
      , oj = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!jj(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            mj(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , pj = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                !1 === hj(h) || e[h] || (f.push(h),
                e[h] = !0)
            }
            return f
        }
        var d = k(b) ? [b] : b
          , e = {};
        c().length !== d.length && mj(d, function(f) {
            var g = c();
            0 < g.length && (f.Kf = g,
            a(f))
        })
    };
    function qj() {}
    function rj() {}
    ;function sj(a) {
        for (var b = [], c = 0; c < tj.length; c++) {
            var d = a(tj[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var tj = [S.g.J, S.g.Z]
      , uj = function(a) {
        var b = a[S.g.We];
        b && N(40);
        var c = a[S.g.Xe];
        c && N(41);
        for (var d = Ea(b) ? b : [b], e = {
            Ac: 0
        }; e.Ac < d.length; e = {
            Ac: e.Ac
        },
        ++e.Ac)
            Ma(a, function(f) {
                return function(g, h) {
                    if (g !== S.g.We && g !== S.g.Xe) {
                        var l = d[f.Ac]
                          , n = Vi.Ee
                          , p = Vi.hi;
                        aj().set(g, h, l, n, p, c)
                    }
                }
            }(e))
    }
      , vj = function(a, b) {
        Ma(a, function(c, d) {
            aj().update(c, d)
        });
        nj(b.eventId, b.priorityId)
    }
      , wj = function(a) {
        var b = hj(a);
        return void 0 != b ? b : !0
    }
      , xj = function() {
        return "G1" + sj(hj)
    }
      , yj = function(a, b) {
        mj(a, b)
    }
      , zj = function(a, b) {
        pj(a, b)
    }
      , Aj = function(a, b) {
        oj(a, b)
    };
    var Bj = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Cj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var Dj = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , Ej = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function Fj(a) {
        return "null" !== a.origin
    }
    ;var Ij = function(a, b, c, d) {
        return Gj(d) ? Cj(a, String(b || Hj()), c) : []
    }
      , Lj = function(a, b, c, d, e) {
        if (Gj(e)) {
            var f = Jj(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = Kj(f, function(g) {
                    return g.Fe
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = Kj(f, function(g) {
                    return g.Ed
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function Mj(a, b, c, d) {
        var e = Hj()
          , f = window;
        Fj(f) && (f.document.cookie = a);
        var g = Hj();
        return e != g || void 0 != c && 0 <= Ij(b, g, !1, d).indexOf(c)
    }
    var Qj = function(a, b, c, d) {
        function e(w, x, y) {
            if (null == y)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (null == x)
                return delete h[x],
                w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!Gj(c.Db))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = Nj(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        g = e(g, "expires", l);
        g = e(g, "max-age", c.tk);
        g = e(g, "samesite", c.Nk);
        c.Pk && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = Oj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!Pj(u, c.path) && Mj(v, a, b, c.Db))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return Pj(n, c.path) ? 1 : Mj(g, a, b, c.Db) ? 0 : 1
    }
      , Rj = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Qj(a, b, c)
    };
    function Kj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h],
            f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function Jj(a, b, c) {
        for (var d = [], e = Ij(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"),
                d.push({
                    id: g.join("."),
                    Fe: 1 * l[0] || 1,
                    Ed: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Nj = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , Sj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , Tj = /(^|\.)doubleclick\.net$/i
      , Pj = function(a, b) {
        return Tj.test(window.document.location.hostname) || "/" === b && Sj.test(a)
    }
      , Hj = function() {
        return Fj(window) ? window.document.cookie : ""
    }
      , Oj = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Tj.test(e) || Sj.test(e) || a.push("none");
        return a
    }
      , Gj = function(a) {
        if (!Zi().h() || !a || !kj())
            return !0;
        if (!jj(a))
            return !1;
        var b = hj(a);
        return null == b ? !0 : !!b
    };
    var Uj = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ Bj(a) & 2147483647) : String(b)
    }
      , Vj = function(a) {
        return [Uj(a), Math.round(Ta() / 1E3)].join(".")
    }
      , Yj = function(a, b, c, d, e) {
        var f = Wj(b);
        return Lj(a, f, Xj(c), d, e)
    }
      , Zj = function(a, b, c, d) {
        var e = "" + Wj(c)
          , f = Xj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , Wj = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , Xj = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var ak = function() {
        hh.dedupe_gclid || (hh.dedupe_gclid = "" + Vj());
        return hh.dedupe_gclid
    };
    var bk = function() {
        var a = !1;
        return a
    };
    var Ve = {
        N: "GTM-KX4JH47",
        Xb: "32072467"
    }
      , ck = {
        ci: "GTM-KX4JH47",
        di: "GTM-KX4JH47"
    };
    Ve.Cf = Pa("");
    var dk = function() {
        return ck.ci ? ck.ci.split("|") : [Ve.N]
    }
      , ek = function() {
        return ck.di ? ck.di.split("|") : []
    }
      , fk = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }
      , hk = function() {
        for (var a = gk(), b = dk(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            !d || Da(d) ? a.container[b[c]] = {
                state: 2
            } : d.state = 2
        }
        for (var e = ek(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]];
            g && 0 === g.state && N(93);
            g ? g.state = 2 : a.destination[e[f]] = {
                state: 2
            }
        }
        a.canonical[Ve.Xb] = 2
    }
      , ik = function(a) {
        return !!gk().container[a]
    }
      , jk = function() {
        var a = gk().container, b;
        for (b in a)
            if (a.hasOwnProperty(b)) {
                var c = a[b];
                if (Da(c)) {
                    if (1 === c)
                        return !0
                } else if (1 === c.state)
                    return !0
            }
        return !1
    }
      , kk = function() {
        var a = {};
        Ma(gk().destination, function(b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    };
    function gk() {
        var a = hh.tidr;
        a || (a = new fk,
        hh.tidr = a);
        return a
    }
    var lk = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        GT: "t",
        HA: "h",
        MC: "m",
        GTM: "g",
        OPT: "o"
    }
      , mk = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , nk = function(a) {
        var b = Ve.N.split("-")
          , c = b[0].toUpperCase();
        if (R(45)) {
            var d = {};
            d.Hj = Ve.N;
            d.Jk = gh.Ef;
            d.Mk = gh.ed;
            d.rk = Ve.Cf ? 2 : 1;
            oh ? (d.Se = mk[c],
            d.Se || (d.Se = 0)) : d.Se = uh ? 13 : 10;
            sh ? d.eg = 1 : bk() ? d.eg = 2 : d.eg = 3;
            var e;
            var f = d.Se
              , g = d.eg;
            void 0 === f ? e = "" : (g || (g = 0),
            e = "" + Df(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
            var h = d.ql, l = 4 + e + (h ? "" + Df(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""), n, p = d.Mk;
            n = p && Cf.test(p) ? "" + Df(3, 2) + p : "";
            var q, r = d.Jk;
            q = r ? "" + Df(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r] : "";
            var t;
            var u = d.Hj;
            if (u && a) {
                var v = u.split("-")
                  , w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w)
                    t = "";
                else {
                    var x = v[1];
                    t = "" + Df(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + x.length] + (d.rk || 0) + x
                }
            } else
                t = "";
            return l + n + q + t
        }
        var y = lk[c] || "i"
          , A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : ""
          , B = "w";
        oh && (B = bk() ? "s" : "o");
        qh ? ("w" === B && (B = "x"),
        "o" === B && (B = "q")) : sh ? ("w" === B && (B = "y"),
        "o" === B && (B = "r")) : uh && (B = "z");
        return "2" + B + y + (4 === gh.ed.length ? gh.ed.slice(1) : gh.ed) + A
    };
    function ok(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var pk = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function qk() {
        return Hb("iPhone") && !Hb("iPod") && !Hb("iPad")
    }
    function rk() {
        qk() || Hb("iPad") || Hb("iPod")
    }
    ;Hb("Opera");
    Hb("Trident") || Hb("MSIE");
    Hb("Edge");
    !Hb("Gecko") || -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") || Hb("Trident") || Hb("MSIE") || Hb("Edge");
    -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") && Hb("Mobile");
    Hb("Macintosh");
    Hb("Windows");
    Hb("Linux") || Hb("CrOS");
    var sk = oa.navigator || null;
    sk && (sk.appVersion || "").indexOf("X11");
    Hb("Android");
    qk();
    Hb("iPad");
    Hb("iPod");
    rk();
    Gb().toLowerCase().indexOf("kaios");
    var tk = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , uk = /#|$/
      , vk = function(a, b) {
        var c = a.search(uk)
          , d = tk(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , wk = /[?&]($|#)/
      , xk = function(a, b, c) {
        for (var d, e = a.search(uk), f = 0, g, h = []; 0 <= (g = tk(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(wk, "$1");
        var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            l = d;
        return l
    };
    var yk = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function zk(a) {
        if (!a || !G.head)
            return null;
        var b = Ak("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var Bk = function() {
        if (m.top == m)
            return 0;
        var a = m.location.ancestorOrigins;
        if (a)
            return a[a.length - 1] == m.location.origin ? 1 : 2;
        var b;
        var c = m.top;
        try {
            var d;
            if (d = !!c && null != c.location.href)
                b: {
                    try {
                        Xi(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
            b = d
        } catch (e) {
            b = !1
        }
        return b ? 1 : 2
    }
      , Ak = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function Ck(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Ak("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests
                      , g = yb(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            pk(d, "load", e);
            pk(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Ek = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        yk(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Dk(c, b)
    }
      , Dk = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Ck(c, a, void 0 === b ? !1 : b)
    };
    var Fk = function() {};
    var Gk = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Hk = function(a, b, c) {
        this.B = a;
        this.h = null;
        this.I = {};
        this.Ca = 0;
        this.T = void 0 === b ? 500 : b;
        this.F = void 0 === c ? !1 : c;
        this.D = null
    };
    na(Hk, Fk);
    Hk.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.F
        }
          , d = Ej(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Gk(c),
            c.internalBlockOnErrors = b.F,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Ik(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Hk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ik(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Kk = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var l;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = Jk(a.vendor.consents, void 0 === d ? "755" : d);
                l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Jk(a.purpose.consents, b)
            } else
                l = !0;
        else
            l = 1 === h ? a.purpose && a.vendor ? Jk(a.purpose.legitimateInterests, b) && Jk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }
      , Jk = function(a, b) {
        return !(!a || !a[b])
    }
      , Ik = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.B.__tcfapi) {
            var e = a.B.__tcfapi;
            e(b, 2, c, d)
        } else if (Lk(a)) {
            Mk(a);
            var f = ++a.Ca;
            a.I[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , Lk = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.B, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , Mk = function(a) {
        a.D || (a.D = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.I[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        pk(a.B, "message", a.D))
    }
      , Nk = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Gk(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ek({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var Ok = !0;
    Ok = !1;
    var Pk = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Qk = ok("", 550)
      , Rk = ok("", 500);
    function Sk() {
        var a = hh.tcf || {};
        return hh.tcf = a
    }
    var Xk = function() {
        var a = Sk()
          , b = new Hk(m,Ok ? 3E3 : -1);
        if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.B.__tcfapi || null != Lk(b))) {
            a.active = !0;
            a.Hd = {};
            Tk();
            var c = null;
            Ok ? c = m.setTimeout(function() {
                Uk(a);
                Vk(a);
                c = null
            }, Rk) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c),
                    c = null);
                    if (0 !== d.internalErrorState)
                        Uk(a),
                        Vk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies)
                            e = Wk(),
                            b.removeEventListener(d);
                        else if ("tcloaded" === d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in Pk)
                                if (Pk.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h, l = d, n = !0;
                                        n = void 0 === n ? !1 : n;
                                        h = Nk(l) ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Kk(l, "1", 0) : !1;
                                        f["1"] = h
                                    } else
                                        f[g] = Kk(d, g, Pk[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty",
                        a.Hd = e,
                        Vk(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c),
                c = null),
                Uk(a),
                Vk(a)
            }
        }
    };
    function Uk(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Ok && (a.Hd = Wk())
    }
    function Tk() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Qk,
        a);
        uj(b)
    }
    function Wk() {
        var a = {}, b;
        for (b in Pk)
            Pk.hasOwnProperty(b) && (a[b] = !0);
        return a
    }
    function Vk(a) {
        var b = {}
          , c = (b.ad_storage = a.Hd["1"] ? "granted" : "denied",
        b);
        vj(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Yk()
        })
    }
    var Yk = function() {
        var a = Sk();
        return a.active ? a.tcString || "" : ""
    }
      , Zk = function() {
        var a = Sk();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , $k = function(a) {
        if (!Pk.hasOwnProperty(String(a)))
            return !0;
        var b = Sk();
        return b.active && b.Hd ? !!b.Hd[String(a)] : !0
    };
    var al = ["L", "S", "Y"], bl = ["S", "E"], cl = {
        sampleRate: "0.005000",
        vi: "",
        ui: Number("5"),
        si: Number("")
    }, dl = 0 <= G.location.search.indexOf("?gtm_latency=") || 0 <= G.location.search.indexOf("&gtm_latency="), el;
    if (!(el = dl)) {
        var fl = Math.random()
          , gl = cl.sampleRate;
        el = fl < gl
    }
    var hl = el
      , il = "https://www.googletagmanager.com/a?id=" + Ve.N + "&cv=80"
      , jl = {
        label: Ve.N + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    };
    function kl() {
        return [il, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + gh.ed].join("")
    }
    var ll = kl();
    function ml() {
        ll = kl()
    }
    var nl = {}
      , ol = ""
      , Fl = ""
      , Gl = ""
      , Hl = ""
      , Il = []
      , Jl = ""
      , Kl = {}
      , Ll = !1
      , Ml = {}
      , Nl = {}
      , Ol = {}
      , Pl = ""
      , Ql = void 0
      , Rl = {}
      , Sl = {}
      , Tl = void 0
      , Ul = 5;
    0 < cl.ui && (Ul = cl.ui);
    var Vl = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            ik: function() {
                return c < a ? !1 : Ta() - d[c % a] < b
            },
            Gk: function() {
                var f = c++ % a;
                d[f] = Ta()
            }
        }
    }(Ul, 1E3)
      , Wl = 1E3
      , Xl = "";
    function Yl(a, b) {
        var c = Ql;
        if (void 0 === c)
            return "";
        var d = xb("GTM"), e = xb("TAGGING"), f = xb("HEALTH"), g = ll, h = nl[c] ? "" : "&es=1", l = Rl[c], n = Zl(c), p = $l(), q = ol, r = Fl, t = Pl, u = am(a), v = Gl, w = Hl, x = bm(a, b), y;
        return [g, h, l, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, r, t, u, v, w, x, y, Jl ? "&dl=" + encodeURIComponent(Jl) : "", 0 < Il.length ? "&tdp=" + Il.join(".") : "", gh.Ef ? "&x=" + gh.Ef : "", "&z=0"].join("")
    }
    function dm(a) {
        Tl && (m.clearTimeout(Tl),
        Tl = void 0);
        if (void 0 !== Ql && (!nl[Ql] || ol || Fl || em(a)))
            if (void 0 === fm[Ql] && (Sl[Ql] || Vl.ik() || 0 >= Wl--))
                N(1),
                Sl[Ql] = !0;
            else {
                void 0 === fm[Ql] && Vl.Gk();
                var b = Yl(!0, a);
                a ? kc(b) : dc(b);
                if (Hl || Jl && 0 < Il.length) {
                    var c = b.replace("/a?", "/td?");
                    dc(c)
                }
                nl[Ql] = !0;
                Jl = Hl = Gl = Pl = Fl = ol = "";
                Il = []
            }
    }
    function gm() {
        Tl || (Tl = m.setTimeout(dm, 500))
    }
    function hm(a) {
        var b = String(a[Wd.cb] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
    function im(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }
    function jm() {
        2022 <= Yl().length && dm()
    }
    function $l() {
        return "&tc=" + ve.filter(function(a) {
            return a
        }).length
    }
    var lm = function(a, b) {
        if (hl && !Sl[a] && Ql !== a) {
            dm();
            Ql = a;
            Gl = ol = "";
            Rl[a] = "&e=" + im(b) + "&eid=" + a;
            gm();
        }
    }
      , mm = function(a, b, c, d) {
        if (hl && b) {
            var e = hm(b)
              , f = c + e;
            if (!Sl[a]) {
                a !== Ql && (dm(),
                Ql = a);
                ol = ol ? ol + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g)
                    throw Error("Error: No function name given for function call.");
                var h = (xe[g] ? "1" : "2") + e;
                Gl = Gl ? Gl + "." + h : "&ti=" + h;
                gm();
                jm()
            }
        }
    }
      , nm = function(a, b, c) {
        if (hl && a && a[Wd.gd]) {
            var d = b + "." + a[Wd.gd];
            Ol[d] = c;
            "html" == hm(a) && Xl == d && (ol += ":" + Math.floor(c))
        }
    };
    function am(a) {}
    function Zl(a) {}
    var um = function(a, b, c) {
        if (hl && void 0 !== a && !Sl[a]) {
            a !== Ql && (dm(),
            Ql = a);
            var d = c + b;
            Fl = Fl ? Fl + "." + d : "&epr=" + d;
            gm();
            jm()
        }
    }
      , vm = function(a, b, c) {}
      , wm = ["S", "P", "C", "Z"]
      , xm = {}
      , ym = (xm[1] = 5,
    xm[2] = 5,
    xm[3] = 5,
    xm)
      , zm = {}
      , fm = {}
      , cm = void 0
      , Am = function(a, b) {
        var c = !1;
        if (!hl || fm[a] || 0 === ym[b])
            return !1;
        --ym[b];
        fm[a] = b;
        c = !0;
        return c
    }
      , Bm = function(a, b, c) {
        if (!hl || !fm[a])
            return;
        var d = zm[a];
        d || (zm[a] = d = {});
        d[b] = c;
    };
    function bm(a, b) {
        var c;
        if (!Ql || !em(b))
            return "";
        var d = zm[Ql];
        c = "&al=" + wm.filter(function(e) {
            return void 0 !== d[e]
        }).map(function(e) {
            return e + Math.floor(d[e])
        }).join(".") + (".Z" + fm[Ql]);
        a && delete zm[Ql];
        return c
    }
    function em(a) {
        var b = !1;
        if (!Ql || !zm[Ql])
            return !1;
        b = a || "C"in zm[Ql];
        return b
    }
    var Cm = function() {
        if (hl) {
            m.setInterval(ml, 864E5);
            ec(m, "pagehide", function() {
                Ql && fm[Ql] && dm(!0);
                for (var a in zm)
                    zm.hasOwnProperty(a) && (Ql = Number(a),
                    dm(!0));
            });
        }
    };
    var Dm = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    Ib();
    qk() || Hb("iPod");
    Hb("iPad");
    !Hb("Android") || Jb() || Ib() || Hb("Opera") || Hb("Silk");
    Jb();
    !Hb("Safari") || Jb() || Hb("Coast") || Hb("Opera") || Hb("Edge") || Hb("Edg/") || Hb("OPR") || Ib() || Hb("Silk") || Hb("Android") || rk();
    var Em = {}
      , Fm = null
      , Gm = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Fm) {
            Fm = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                var n = g.concat(h[l].split(""));
                Em[l] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Fm[q] && (Fm[q] = p)
                }
            }
        }
        for (var r = Em[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , A = b[v + 2]
              , B = r[x >> 2]
              , C = r[(x & 3) << 4 | y >> 4]
              , E = r[(y & 15) << 2 | A >> 6]
              , H = r[A & 63];
            t[w++] = "" + B + C + E + H
        }
        var D = 0
          , L = u;
        switch (b.length - v) {
        case 2:
            D = b[v + 1],
            L = r[(D & 15) << 2] || u;
        case 1:
            var P = b[v];
            t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | D >> 4] + L + u
        }
        return t.join("")
    };
    var Hm = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Im(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Jm() {
        var a = m.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function Km() {
        var a, b;
        return null != (b = null == (a = m.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function Lm(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function Mm() {
        var a = m;
        if (!Lm(a))
            return null;
        var b = Im(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Hm).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;var Nm, Om = function() {
        if (Lm(m) && (Nm = Ta(),
        !Km())) {
            var a = Mm();
            a && (a.then(function() {
                N(95);
            }),
            a.catch(function() {
                N(96)
            }))
        }
    }, Qm = function(a) {
        var b = Pm.bl
          , c = function(g, h) {
            try {
                a(g, h)
            } catch (l) {}
        }
          , d = Jm();
        if (d)
            c(d);
        else {
            var e = Km();
            if (e) {
                b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = m.setTimeout(function() {
                    c.Ad || (c.Ad = !0,
                    N(106),
                    c(null, Error("Timeout")))
                }, b);
                e.then(function(g) {
                    c.Ad || (c.Ad = !0,
                    N(104),
                    m.clearTimeout(f),
                    c(g))
                }).catch(function(g) {
                    c.Ad || (c.Ad = !0,
                    N(105),
                    m.clearTimeout(f),
                    c(null, g))
                })
            } else
                c(null)
        }
    }, Rm = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        a && (b.C[S.g.rf] = a.architecture,
        b.C[S.g.sf] = a.bitness,
        a.fullVersionList && (b.C[S.g.tf] = a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|")),
        c && (b.C[S.g.ph] = a.mobile ? "1" : "0"),
        b.C[S.g.uf] = a.model,
        b.C[S.g.vf] = a.platform,
        b.C[S.g.wf] = a.platformVersion,
        b.C[S.g.xf] = a.wow64 ? "1" : "0")
    };
    function Sm(a, b, c, d) {
        var e, f = Number(null != a.hb ? a.hb : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Db: d
        }
    }
    ;var Tm = ["1"]
      , Um = {}
      , Vm = {}
      , Xm = function(a) {
        return Um[Wm(a)]
    }
      , $m = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Wm(a.prefix);
        if (!Um[c] && !Ym(c, a.path, a.domain) && b) {
            var d = Wm(a.prefix)
              , e = Vj();
            if (0 === Zm(d, e, a)) {
                var f = Wb("google_tag_data", {});
                f._gcl_au || (f._gcl_au = e)
            }
            Ym(c, a.path, a.domain)
        }
    };
    function Zm(a, b, c, d) {
        var e = Zj(b, "1", c.domain, c.path)
          , f = Sm(c, d);
        f.Db = "ad_storage";
        return Rj(a, e, f)
    }
    function Ym(a, b, c) {
        var d = Yj(a, b, c, Tm, "ad_storage");
        if (!d)
            return !1;
        var e = d.split(".");
        5 === e.length ? (Um[a] = e.slice(0, 2).join("."),
        Vm[a] = {
            id: e.slice(2, 4).join("."),
            ai: Number(e[4]) || 0
        }) : 3 === e.length ? Vm[a] = {
            id: e.slice(0, 2).join("."),
            ai: Number(e[2]) || 0
        } : Um[a] = d;
        return !0
    }
    function Wm(a) {
        return (a || "_gcl") + "_au"
    }
    ;var an;
    var en = function() {
        var a = bn
          , b = cn
          , c = dn()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            ec(G, "mousedown", d);
            ec(G, "keyup", d);
            ec(G, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , fn = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        dn().decorators.push(f)
    }
      , gn = function(a, b, c) {
        for (var d = dn().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var l = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (l && (p || n !== G.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q]instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Wa(e, g.callback())
            }
        }
        return e
    };
    function dn() {
        var a = Wb("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var hn = /(.*?)\*(.*?)\*(.*)/
      , jn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , kn = /^(?:www\.|m\.|amp\.)+/
      , ln = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function mn(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var on = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(sb(String(d))))
            }
        var e = b.join("*");
        return ["1", nn(e), e].join("*")
    };
    function nn(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Ub.userLanguage || Ub.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = an)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        an = d;
        for (var l = 4294967295, n = 0; n < c.length; n++)
            l = l >>> 8 ^ an[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
    function pn() {
        return function(a) {
            var b = oi(m.location.href)
              , c = b.search.replace("?", "")
              , d = ji(c, "_gl", !1, !0) || "";
            a.query = qn(d) || {};
            var e = mi(b, "fragment").match(mn("_gl"));
            a.fragment = qn(e && e[3] || "") || {}
        }
    }
    function rn(a, b) {
        var c = mn(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var sn = function(a, b) {
        b || (b = "_gl");
        var c = ln.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = rn(b, (c[2] || "").slice(1))
          , f = rn(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , tn = function(a) {
        var b = pn()
          , c = dn();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Wa(d, e.query),
        a && Wa(d, e.fragment));
        return d
    }
      , qn = function(a) {
        try {
            var b = un(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = tb(d[e + 1]);
                    c[f] = g
                }
                vb("TAGGING", 6);
                return c
            }
        } catch (h) {
            vb("TAGGING", 8)
        }
    };
    function un(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = hn.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === nn(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                if (l)
                    return h;
                vb("TAGGING", 7)
            }
        }
    }
    function vn(a, b, c, d) {
        function e(p) {
            p = rn(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ln.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , h = f[2] || ""
          , l = f[3] || ""
          , n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }
    function wn(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = gn(b, 1, c)
          , e = gn(b, 2, c)
          , f = gn(b, 3, c);
        if (Xa(d)) {
            var g = on(d);
            c ? xn("_gl", g, a) : yn("_gl", g, a, !1)
        }
        if (!c && Xa(e)) {
            var h = on(e);
            yn("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var n = l
                      , p = f[l]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            yn(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            xn(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && vn(n, p, q)
                }
    }
    function yn(a, b, c, d) {
        if (c.href) {
            var e = vn(a, b, c.href, void 0 === d ? !1 : d);
            Fb.test(e) && (c.href = e)
        }
    }
    function xn(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = G.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = vn(a, b, c.action);
                Fb.test(n) && (c.action = n)
            }
        }
    }
    function bn(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || wn(e, e.hostname)
            }
        } catch (g) {}
    }
    function cn(a) {
        try {
            if (a.action) {
                var b = mi(oi(a.action), "host");
                wn(a, b)
            }
        } catch (c) {}
    }
    var zn = function(a, b, c, d) {
        en();
        fn(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , An = function(a, b) {
        en();
        fn(a, [li(m.location, "host", !0)], b, !0, !0)
    }
      , Bn = function() {
        var a = G.location.hostname
          , b = jn.exec(G.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(kn, ""), l = e.replace(kn, ""), n;
        if (!(n = h === l)) {
            var p = "." + l;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , Cn = function(a, b) {
        return !1 === a ? !1 : a || b || Bn()
    };
    var Dn = {};
    var En = function(a) {
        for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                vg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function Fn(a, b) {
        var c = En(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].vg] || (d[c[e].vg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    la: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].vg].push(g)
            }
        }
        return d
    }
    ;var Gn = /^\w+$/
      , Hn = /^[\w-]+$/
      , In = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , Jn = function() {
        if (!Zi().h() || !kj())
            return !0;
        var a = hj("ad_storage");
        return null == a ? !0 : !!a
    }
      , Kn = function(a, b) {
        jj("ad_storage") ? Jn() ? a() : pj(a, "ad_storage") : b ? vb("TAGGING", 3) : oj(function() {
            Kn(a, !0)
        }, ["ad_storage"])
    }
      , Mn = function(a) {
        return Ln(a).map(function(b) {
            return b.la
        })
    }
      , Ln = function(a) {
        var b = [];
        if (!Fj(m) || !G.cookie)
            return b;
        var c = Ij(a, G.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Od: d.Od
        },
        e++) {
            var f = Nn(c[e]);
            if (null != f) {
                var g = f
                  , h = g.version;
                d.Od = g.la;
                var l = g.timestamp
                  , n = g.labels
                  , p = Ha(b, function(q) {
                    return function(r) {
                        return r.la === q.Od
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, l),
                p.labels = On(p.labels, n || [])) : b.push({
                    version: h,
                    la: d.Od,
                    timestamp: l,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return Pn(b)
    };
    function On(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function Qn(a) {
        return a && "string" == typeof a && a.match(Gn) ? a : "_gcl"
    }
    var Sn = function() {
        var a = oi(m.location.href)
          , b = mi(a, "query", !1, void 0, "gclid")
          , c = mi(a, "query", !1, void 0, "gclsrc")
          , d = mi(a, "query", !1, void 0, "wbraid")
          , e = mi(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || ji(f, "gclid", !1);
            c = c || ji(f, "gclsrc", !1);
            d = d || ji(f, "wbraid", !1)
        }
        return Rn(b, c, e, d)
    }
      , Rn = function(a, b, c, d) {
        var e = {}
          , f = function(g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && Hn.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(Hn))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , Un = function(a) {
        var b = Sn();
        Kn(function() {
            Tn(b, !1, a)
        })
    };
    function Tn(a, b, c, d, e) {
        function f(w, x) {
            var y = Vn(w, g);
            y && (Rj(y, x, h),
            l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Qn(c.prefix);
        d = d || Ta();
        var h = Sm(c, d, !0);
        h.Db = "ad_storage";
        var l = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var x = ["GCL", n, w];
            0 < e.length && x.push(e.join("."));
            return x.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Dn.enable_gbraid_cookie_write ? 0 : Dn.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0]
              , r = Vn("gb", g)
              , t = !1;
            if (!b)
                for (var u = Ln(r), v = 0; v < u.length; v++)
                    u[v].la === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var Xn = function(a, b) {
        var c = tn(!0);
        Kn(function() {
            for (var d = Qn(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== In[f]) {
                    var g = Vn(f, d)
                      , h = c[g];
                    if (h) {
                        var l = Math.min(Wn(h), Ta()), n;
                        b: {
                            var p = l;
                            if (Fj(m))
                                for (var q = Ij(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (Wn(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var t = Sm(b, l, !0);
                            t.Db = "ad_storage";
                            Rj(g, h, t)
                        }
                    }
                }
            }
            Tn(Rn(c.gclid, c.gclsrc), !1, b)
        })
    }
      , Vn = function(a, b) {
        var c = In[a];
        if (void 0 !== c)
            return b + c
    }
      , Wn = function(a) {
        return 0 !== Yn(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function Nn(a) {
        var b = Yn(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            la: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Yn(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Hn.test(a[2]) ? [] : a
    }
    var Zn = function(a, b, c, d, e) {
        if (Ea(b) && Fj(m)) {
            var f = Qn(e)
              , g = function() {
                for (var h = {}, l = 0; l < a.length; ++l) {
                    var n = Vn(a[l], f);
                    if (n) {
                        var p = Ij(n, G.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            Kn(function() {
                zn(g, b, c, d)
            })
        }
    }
      , Pn = function(a) {
        return a.filter(function(b) {
            return Hn.test(b.la)
        })
    }
      , $n = function(a, b) {
        if (Fj(m)) {
            for (var c = Qn(b.prefix), d = {}, e = 0; e < a.length; e++)
                In[a[e]] && (d[a[e]] = In[a[e]]);
            Kn(function() {
                Ma(d, function(f, g) {
                    var h = Ij(c + g, G.cookie, void 0, "ad_storage");
                    h.sort(function(t, u) {
                        return Wn(u) - Wn(t)
                    });
                    if (h.length) {
                        var l = h[0], n = Wn(l), p = 0 !== Yn(l.split(".")).length ? l.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Yn(l.split(".")).length ? l.split(".")[2] : void 0;
                        q[f] = [r];
                        Tn(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function ao(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var bo = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (kj()) {
            var c = Sn();
            if (ao(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                An(function() {
                    return d
                }, 3);
                An(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , co = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Jn())
            return e;
        var f = Ln(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var h = f[0]
              , l = f[0].timestamp
              , n = [h.version, Math.round(l / 1E3), h.la].concat(h.labels || [], [b]).join(".")
              , p = Sm(c, l, !0);
            p.Db = "ad_storage";
            Rj(a, n, p)
        }
        return e
    };
    function eo(a, b) {
        var c = Qn(b)
          , d = Vn(a, c);
        if (!d)
            return 0;
        for (var e = Ln(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function fo(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var go = function(a) {
        var b = Math.max(eo("aw", a), fo(Jn() ? Fn() : {}));
        return Math.max(eo("gb", a), fo(Jn() ? Fn("_gac_gb", !0) : {})) > b
    };
    var ho = function(a, b) {
        var c = a && !wj(S.g.J);
        return b && c ? "0" : b
    }
      , ko = function(a) {
        function b(u) {
            var v;
            hh.reported_gclid || (hh.reported_gclid = {});
            v = hh.reported_gclid;
            var w, x = g;
            w = !g || kj() && !wj(S.g.J) ? l + (u ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
            if (!v[w]) {
                v[w] = !0;
                var y = []
                  , A = {}
                  , B = function(ja, O) {
                    O && (y.push(ja + "=" + encodeURIComponent(O)),
                    A[ja] = !0)
                }
                  , C = "https://www.google.com";
                if (kj()) {
                    var E = wj(S.g.J);
                    B("gcs", xj());
                    u && B("gcu", "1");
                    lj() && B("gcd", "G1" + sj(ij));
                    B("rnd", ak());
                    if ((!l || n && "aw.ds" !== n) && wj(S.g.J)) {
                        var H = Mn("_gcl_aw");
                        B("gclaw", H.join("."))
                    }
                    B("url", String(m.location).split(/[?#]/)[0]);
                    B("dclid", ho(d, p));
                    E || (C = "https://pagead2.googlesyndication.com")
                }
                B("gdpr_consent", Yk());
                B("gdpr", Zk());
                "1" === tn(!1)._up && B("gtm_up", "1");
                B("gclid", ho(d, l));
                B("gclsrc", n);
                if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", ho(d, q)),
                !A.gbraid && kj() && wj(S.g.J))) {
                    var D = Mn("_gcl_gb");
                    0 < D.length && B("gclgb", D.join("."))
                }
                B("gtm", nk(!e));
                g && wj(S.g.J) && ($m(f || {}),
                x && B("auid", Xm(f.prefix) || ""));
                jo || a.md && B("did", a.md);
                a.Me && B("gdid", a.Me);
                a.He && B("edid", a.He);
                var L = R(64) ? Jm() : null;
                if (L) {
                    var P = function(ja, O) {
                        y.push(ja + "=" + encodeURIComponent(O));
                        A[ja] = !0
                    };
                    P("uaa", L.architecture);
                    P("uab", L.bitness);
                    L.fullVersionList && P("uafvl", L.fullVersionList.map(function(ja) {
                        return encodeURIComponent(ja.brand || "") + ";" + encodeURIComponent(ja.version || "")
                    }).join("|"));
                    P("uam", L.model);
                    P("uap", L.platform);
                    P("uapv", L.platformVersion);
                    P("uaw", L.wow64 ? "1" : "0")
                }
                var X = C + "/pagead/landing?" + y.join("&");
                kc(X)
            }
        }
        var c = !!a.Ce
          , d = !!a.vc
          , e = a.da
          , f = void 0 === a.Cb ? {} : a.Cb
          , g = void 0 === a.zd ? !0 : a.zd
          , h = Sn()
          , l = h.gclid || ""
          , n = h.gclsrc
          , p = h.dclid || ""
          , q = h.gbraid || ""
          , r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q)
          , t = kj();
        if (r || t)
            t ? Aj(function() {
                b();
                wj(S.g.J) || zj(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, S.g.J)
            }, [S.g.J]) : b()
    }
      , io = function(a) {
        var b = String(m.location).split(/[?#]/)[0]
          , c = gh.Bi || m._CONSENT_MODE_SALT;
        return a ? c ? String(Bj(b + a + c)) : "0" : ""
    }
      , jo = !1;
    var lo = /[A-Z]+/
      , mo = /\s/
      , no = function(a) {
        if (k(a)) {
            a = Ra(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (lo.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || mo.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        V: c + "-" + d[0],
                        M: d
                    }
                }
            }
        }
    }
      , po = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = no(a[c]);
            d && (b[d.id] = d)
        }
        oo(b);
        var e = [];
        Ma(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function oo(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.M[1] && b.push(d.V)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var ro = function(a, b, c, d) {
        return (2 === qo() || d || "http:" != m.location.protocol ? a : b) + c
    }
      , qo = function() {
        var a = bc(), b;
        if (1 === a)
            a: {
                var c = wh;
                c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var l = g[h].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === l.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
        else
            b = a;
        return b
    };
    var to = function(a, b, c) {
        if (m[a.functionName])
            return b.ig && I(b.ig),
            m[a.functionName];
        var d = so();
        m[a.functionName] = d;
        if (a.Ae)
            for (var e = 0; e < a.Ae.length; e++)
                m[a.Ae[e]] = m[a.Ae[e]] || so();
        a.Ne && void 0 === m[a.Ne] && (m[a.Ne] = c);
        ac(ro("https://", "http://", a.rg), b.ig, b.wk);
        return d
    }
      , so = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    }
      , uo = {
        functionName: "_googWcmImpl",
        Ne: "_googWcmAk",
        rg: "www.gstatic.com/wcm/loader.js"
    }
      , vo = {
        functionName: "_gaPhoneImpl",
        Ne: "ga_wpid",
        rg: "www.gstatic.com/gaphone/loader.js"
    }
      , wo = {
        yi: "",
        uj: "5"
    }
      , xo = {
        functionName: "_googCallTrackingImpl",
        Ae: [vo.functionName, uo.functionName],
        rg: "www.gstatic.com/call-tracking/call-tracking_" + (wo.yi || wo.uj) + ".js"
    }
      , yo = {}
      , zo = function(a, b, c, d) {
        N(22);
        if (c) {
            d = d || {};
            var e = to(uo, d, a)
              , f = {
                ak: a,
                cl: b
            };
            void 0 === d.tb && (f.autoreplace = c);
            e(2, d.tb, f, c, 0, Sa(), d.options)
        }
    }
      , Ao = function(a, b, c, d) {
        N(21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: Sa()
            }, f = 0; f < a.length; f++) {
                var g = a[f];
                yo[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length ? (e.adData = {
                    ak: g.M[0],
                    cl: g.M[1]
                },
                yo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                    gaWpid: g.V
                },
                yo[g.id] = !0))
            }
            (e.gaData || e.adData) && to(xo, d)(d.tb, e, d.options)
        }
    }
      , Bo = function() {
        var a = !1;
        return a
    }
      , Co = function(a, b) {
        if (a)
            if (bk()) {} else {
                if (k(a)) {
                    var c = no(a);
                    if (!c)
                        return;
                    a = c
                }
                var d = void 0
                  , e = !1
                  , f = T(b, S.g.Zi);
                if (f && Ea(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var h = no(f[g]);
                        h && (d.push(h),
                        (a.id === h.id || a.id === a.V && a.V === h.V) && (e = !0))
                    }
                }
                if (!d || e) {
                    var l = T(b, S.g.ih), n;
                    if (l) {
                        Ea(l) ? n = l : n = [l];
                        var p = T(b, S.g.gh)
                          , q = T(b, S.g.hh)
                          , r = T(b, S.g.jh)
                          , t = T(b, S.g.Yi)
                          , u = p || q
                          , v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < n.length; w++)
                            if (w < v)
                                if (d)
                                    Ao(d, n[w], t, {
                                        tb: u,
                                        options: r
                                    });
                                else if ("AW" === a.prefix && a.M[1])
                                    Bo() ? Ao([a], n[w], t || "US", {
                                        tb: u,
                                        options: r
                                    }) : zo(a.M[0], a.M[1], n[w], {
                                        tb: u,
                                        options: r
                                    });
                                else if ("UA" === a.prefix)
                                    if (Bo())
                                        Ao([a], n[w], t || "US", {
                                            tb: u
                                        });
                                    else {
                                        var x = a.V
                                          , y = n[w]
                                          , A = {
                                            tb: u
                                        };
                                        N(23);
                                        if (y) {
                                            A = A || {};
                                            var B = to(vo, A, x)
                                              , C = {};
                                            void 0 !== A.tb ? C.receiver = A.tb : C.replace = y;
                                            C.ga_wpid = x;
                                            C.destination = y;
                                            B(2, Sa(), C)
                                        }
                                    }
                    }
                }
            }
    };
    var Do = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.s = c;
        this.C = {};
        this.metadata = J(c.eventMetadata || {});
        this.K = !1
    }
      , Eo = function(a, b, c) {
        var d = T(a.s, b);
        void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
    }
      , Fo = function(a, b, c) {
        var d = Yh(a.target.V);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function Go(a) {
        return {
            getDestinationId: function() {
                return a.target.V
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void (a.eventName = b)
            },
            getHitData: function(b) {
                return a.C[b]
            },
            setHitData: function(b, c) {
                return void (a.C[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.C[b] && (a.C[b] = c)
            },
            copyToHitData: function(b, c) {
                Eo(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void (a.metadata[b] = c)
            },
            abort: function() {
                return void (a.K = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return T(a.s, b)
            }
        }
    }
    ;var Io = function(a) {
        var b = Ho[a.target.V];
        if (!a.K && b)
            for (var c = Go(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.K = !0
                }
                if (a.K)
                    break
            }
    }
      , Jo = function(a, b) {
        var c = Ho[a];
        c || (c = Ho[a] = []);
        c.push(b)
    }
      , Ho = {};
    var Mo = function(a) {
        a = a || {};
        var b;
        if (!kj() || hj(Ko)) {
            (b = Lo(a)) || (b = Vj());
            var c = a
              , d = Wm(c.prefix)
              , e = Wm(c.prefix)
              , f = Um[e];
            if (f) {
                var g = f.split(".");
                if (2 === g.length) {
                    var h = Number(g[1]) || 0;
                    if (h) {
                        var l = f;
                        b && (l = f + "." + b + "." + Math.floor(Ta() / 1E3));
                        Zm(e, l, c, 1E3 * h)
                    }
                }
            }
            delete Um[d];
            delete Vm[d];
            Ym(d, c.path, c.domain);
            return Lo(a)
        }
    }
      , Lo = function(a) {
        if (!kj() || hj(Ko)) {
            a = a || {};
            $m(a, !1);
            var b = Vm[Wm(Qn(a.prefix))];
            if (b && !(18E5 < Ta() - 1E3 * b.ai)) {
                var c = b.id
                  , d = c.split(".");
                if (2 === d.length && !(864E5 < Ta() - 1E3 * (Number(d[1]) || 0)))
                    return c
            }
        }
    }
      , Ko = S.g.J;
    var No = function(a) {
        var b = [];
        Ma(a, function(c, d) {
            d = Pn(d);
            for (var e = [], f = 0; f < d.length; f++)
                e.push(d[f].la);
            e.length && b.push(c + ":" + e.join(","))
        });
        return b.join(";")
    }
      , Qo = function(a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
            var d = Oo("gcl" + a);
            if (d)
                return d.split(".")
        }
        var e = Qn(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !wj(Po) && c, g;
            g = Sn()[a] || [];
            if (0 < g.length)
                return f ? ["0"] : g
        }
        var h = Vn(a, e);
        return h ? Mn(h) : []
    }
      , Oo = function(a) {
        var b = oi(m.location.href)
          , c = mi(b, "host", !1);
        if (c && c.match(Ro)) {
            var d = mi(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    }
      , So = function(a, b) {
        jj(Po) ? wj(Po) ? a() : pj(a, Po) : b ? N(42) : Aj(function() {
            So(a, !0)
        }, [Po])
    }
      , Ro = /^\d+\.fls\.doubleclick\.net$/
      , Po = S.g.J
      , To = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/
      , Uo = function(a, b) {
        return Qo("aw", a, b)
    }
      , Vo = function(a, b) {
        return Qo("dc", a, b)
    }
      , Wo = function(a) {
        var b = Oo("gac");
        return b ? !wj(Po) && a ? "0" : decodeURIComponent(b) : No(Jn() ? Fn() : {})
    }
      , Xo = function(a) {
        var b = Oo("gacgb");
        return b ? !wj(Po) && a ? "0" : decodeURIComponent(b) : No(Jn() ? Fn("_gac_gb", !0) : {})
    }
      , Yo = function(a) {
        var b = Sn()
          , c = []
          , d = b.gclid
          , e = b.dclid
          , f = b.gclsrc || "aw";
        !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
            la: d,
            Je: f
        });
        e && c.push({
            la: e,
            Je: "ds"
        });
        0 === c.length && b.gbraid && c.push({
            la: b.gbraid,
            Je: "gb"
        });
        So(function() {
            $m(a);
            var g = Xm(a.prefix);
            if (g) {
                var h = ["auid=" + g];
                if (R(15)) {
                    var l = G.referrer ? mi(oi(G.referrer), "host") : "";
                    0 === c.length && To.test(l) && c.push({
                        la: "",
                        Je: ""
                    });
                    if (0 === c.length)
                        return;
                    l && h.push("ref=" + encodeURIComponent(l));
                    var n = 1 === Bk() ? m.top.location.href : m.location.href;
                    n = n.replace(/[\?#].*$/, "");
                    h.push("url=" + encodeURIComponent(n));
                    h.push("tft=" + Ta());
                    var p = mc();
                    void 0 !== p && h.push("tfd=" + Math.round(p))
                }
                if (0 < c.length)
                    for (var q = hh.joined_auid = hh.joined_auid || {}, r = 0; r < c.length; r++) {
                        var t = c[r]
                          , u = t.la
                          , v = t.Je
                          , w = (a.prefix || "_gcl") + "." + v + "." + u;
                        if (!q[w]) {
                            var x = "https://adservice.google.com/pagead/regclk?" + h.join("&");
                            "" !== u && (x = "gb" === v ? x + "&wbraid=" + u : x + "&gclid=" + u + "&gclsrc=" + v);
                            kc(x);
                            q[w] = !0
                        }
                    }
            }
        })
    }
      , Zo = function(a) {
        return Oo("gclaw") || Oo("gac") || 0 < (Sn().aw || []).length ? !1 : 0 < (Sn().gb || []).length ? !0 : go(a)
    };
    var $o = function(a, b, c, d, e, f, g, h, l, n, p, q) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.I = d;
        this.B = e;
        this.F = f;
        this.T = g;
        this.D = h;
        this.eventMetadata = l;
        this.X = n;
        this.W = p;
        this.H = q
    }
      , T = function(a, b, c) {
        if (void 0 !== a.h[b])
            return a.h[b];
        if (void 0 !== a.I[b])
            return a.I[b];
        if (void 0 !== a.B[b])
            return a.B[b];
        hl && ap(a, a.F[b], a.T[b]) && (N(71),
        N(79));
        return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c
    }
      , bp = function(a) {
        function b(g) {
            for (var h = Object.keys(g), l = 0; l < h.length; ++l)
                c[h[l]] = 1
        }
        var c = {};
        b(a.h);
        b(a.I);
        b(a.B);
        b(a.F);
        if (hl)
            for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    N(71);
                    N(80);
                    break
                }
            }
        return Object.keys(c)
    }
      , cp = function(a, b, c) {
        function d(l) {
            Cc(l) && Ma(l, function(n, p) {
                f = !0;
                e[n] = p
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.D[b]),
        d(a.F[b]),
        d(a.B[b]),
        d(a.I[b]));
        c && 2 !== c || d(a.h[b]);
        if (hl) {
            var g = f
              , h = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.D[b]),
            d(a.T[b]),
            d(a.B[b]),
            d(a.I[b]));
            c && 2 !== c || d(a.h[b]);
            if (f !== g || ap(a, e, h))
                N(71),
                N(81);
            f = g;
            e = h
        }
        return f ? e : void 0
    }
      , dp = function(a) {
        var b = [S.g.Oc, S.g.Wd, S.g.Xd, S.g.Yd, S.g.Zd, S.g.ae, S.g.be]
          , c = {}
          , d = !1
          , e = function(h) {
            for (var l = 0; l < b.length; l++)
                void 0 !== h[b[l]] && (c[b[l]] = h[b[l]],
                d = !0);
            return d
        };
        if (e(a.h) || e(a.I) || e(a.B))
            return c;
        e(a.F);
        if (hl) {
            var f = c
              , g = d;
            c = {};
            d = !1;
            e(a.T);
            ap(a, c, f) && (N(71),
            N(82));
            c = f;
            d = g
        }
        if (d)
            return c;
        e(a.D);
        return c
    }
      , ap = function(a, b, c) {
        if (!hl)
            return !1;
        try {
            if (b === c)
                return !1;
            var d = Ac(b);
            if (d !== Ac(c) || !(Cc(b) && Cc(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if (ap(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || ap(a, b[g], c[g]))
                        return !0
            }
        } catch (h) {
            N(72)
        }
        return !1
    }
      , ep = function(a, b) {
        this.ij = a;
        this.jj = b;
        this.F = {};
        this.zh = {};
        this.h = {};
        this.I = {};
        this.B = {};
        this.cd = {};
        this.D = {};
        this.Dc = function() {}
        ;
        this.Ca = function() {}
        ;
        this.T = !1
    }
      , fp = function(a, b) {
        a.F = b;
        return a
    }
      , gp = function(a, b) {
        a.zh = b;
        return a
    }
      , hp = function(a, b) {
        a.h = b;
        return a
    }
      , ip = function(a, b) {
        a.I = b;
        return a
    }
      , jp = function(a, b) {
        a.B = b;
        return a
    }
      , kp = function(a, b) {
        a.cd = b;
        return a
    }
      , lp = function(a, b) {
        a.D = b || {};
        return a
    }
      , mp = function(a, b) {
        a.Dc = b;
        return a
    }
      , np = function(a, b) {
        a.Ca = b;
        return a
    }
      , op = function(a) {
        a.T = !0;
        return a
    }
      , pp = function(a) {
        return new $o(a.ij,a.jj,a.F,a.zh,a.h,a.I,a.B,a.cd,a.D,a.Dc,a.Ca,a.T)
    };
    var rp = function(a, b) {
        var c = a.dg
          , d = a.wg;
        a.Lf && (Cn(c[S.g.jc], !!c[S.g.aa]) && Xn(qp, b),
        Un(b),
        $n(qp, b),
        Yo(b));
        c[S.g.aa] && Zn(qp, c[S.g.aa], c[S.g.Yc], !!c[S.g.kc], b.prefix);
        d && bo(["aw", "dc", "gb"])
    }
      , sp = function(a, b, c, d) {
        var e = a.xg
          , f = a.callback
          , g = a.gg;
        if ("function" === typeof f)
            if (e === S.g.ac && void 0 === g) {
                var h = d(b.prefix, c);
                0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
            } else
                e === S.g.Ud ? (N(65),
                $m(b, !1),
                f(Xm(b.prefix))) : f(g)
    }
      , qp = ["aw", "dc", "gb"];
    function tp() {
        return "attribution-reporting"
    }
    function up(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var vp = !1;
    function wp() {
        if (up("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup))
            return !0;
        vp || (zk('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        vp = !0);
        return up("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup)
    }
    function xp(a, b) {
        var c = void 0;
        try {
            c = G.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                vb("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    vb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        cc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    }
    function yp() {
        return R(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    }
    ;var zp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , Ap = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , Bp = /^\d+\.fls\.doubleclick\.net$/
      , Cp = /;gac=([^;?]+)/
      , Dp = /;gacgb=([^;?]+)/
      , Ep = /;gclaw=([^;?]+)/
      , Fp = /;gclgb=([^;?]+)/;
    function Gp(a, b) {
        if (Bp.test(G.location.host)) {
            var c = G.location.href.match(b);
            return c && 2 == c.length && c[1].match(zp) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].la);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Hp = function(a, b, c) {
        var d = Jn() ? Fn("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = co("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Rj: f ? e.join(";") : "",
            Qj: Gp(d, Dp)
        }
    };
    function Ip(a, b, c) {
        if (Bp.test(G.location.host)) {
            var d = G.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Ap))
                return [{
                    la: d[1]
                }]
        } else
            return Ln((a || "_gcl") + b);
        return []
    }
    var Jp = function(a) {
        return Ip(a, "_aw", Ep).map(function(b) {
            return b.la
        }).join(".")
    }
      , Kp = function(a) {
        return Ip(a, "_gb", Fp).map(function(b) {
            return b.la
        }).join(".")
    }
      , Lp = function(a, b) {
        var c = co((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var Mp = function() {
        if (Ca(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Np = function() {
        var a = G.title;
        if (void 0 == a || "" == a)
            return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d),
                !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c)); )
            c--;
        return decodeURIComponent(a.substr(0, c))
    }
      , Op = function(a, b) {
        Ea(b) || (b = [b]);
        return 0 <= b.indexOf(a.metadata.hit_type)
    }
      , Pp = function(a) {
        var b = a.target.M[0];
        if (b) {
            a.C[S.g.Pc] = b;
            var c = a.target.M[1];
            c && (a.C[S.g.lb] = c)
        } else
            a.K = !0
    }
      , Qp = function(a) {
        if (Op(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
            var b = a.C[S.g.lb]
              , c = !0 === T(a.s, S.g.Vd);
            c && (a.metadata.remarketing_only = !0);
            switch (a.metadata.hit_type) {
            case "conversion":
                !c && b && (a.metadata.speculative = !1);
                Qi() && (a.metadata.is_gcp_conversion = !0);
                break;
            case "user_data_lead":
            case "user_data_web":
                !c && b && (a.K = !0);
                break;
            case "remarketing":
                if (c || !b)
                    a.metadata.speculative = !1
            }
            a.C[S.g.Bh] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com"
        }
    }
      , Rp = function(a) {
        Op(a, ["conversion", "remarketing"])
    }
      , Sp = function(a) {
        if (Op(a, ["conversion", "remarketing"])) {
            var b = Bk();
            a.C[S.g.ah] = b;
            var c = T(a.s, S.g.Ra);
            c || (c = 1 === b ? m.top.location.href : m.location.href);
            var d = a.C, e = S.g.Ra, f;
            if (null != c) {
                var g = String(c).substring(0, 512)
                  , h = g.indexOf("#");
                f = -1 == h ? g : g.substring(0, h)
            } else
                f = "";
            d[e] = f;
            Eo(a, S.g.Sa, G.referrer);
            a.C[S.g.nc] = Np();
            Eo(a, S.g.Qa);
            var l = Zh();
            a.C[S.g.Jb] = l.width + "x" + l.height
        }
    }
      , Tp = function(a) {
        Op(a, ["conversion", "remarketing"]) && (Eo(a, S.g.Ma),
        Eo(a, S.g.ra),
        Eo(a, S.g.va),
        "remarketing" === a.metadata.hit_type && Eo(a, S.g.Aa))
    }
      , Up = function(a) {
        if (R(13))
            if (!Lm(m))
                N(87);
            else if (void 0 !== Nm) {
                N(85);
                var b = Jm();
                b ? Rm(b, a, !1) : N(86)
            }
    }
      , Wp = function(a) {
        Op(a, ["conversion"]) && (Mi() ? a.C[S.g.bf] = "2" : R(7) && (Vp || up(tp()) || (zk('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),
        Vp = !0),
        up(tp()) && (a.C[S.g.bf] = "1")))
    }
      , Xp = function(a) {
        Op(a, ["conversion", "remarketing"]) && R(9) && wj(S.g.J) && !1 !== T(a.s, S.g.Ea) && !1 !== T(a.s, S.g.fa) && !1 !== T(a.s, S.g.kb) && !1 !== T(a.s, S.g.Fa) && wp() && (a.C[S.g.Sg] = "1",
        a.metadata.send_fledge_experiment = !0)
    }
      , Yp = function(a) {
        var b = function(d) {
            return T(a.s, d)
        };
        a.metadata.conversion_linker_enabled = !1 !== b(S.g.ya);
        var c = {
            prefix: b(S.g.La) || b(S.g.Za),
            domain: b(S.g.nb),
            hb: b(S.g.Pa),
            flags: b(S.g.ob)
        };
        a.metadata.cookie_options = c;
        a.metadata.redact_ads_data = null != b(S.g.na) && !1 !== b(S.g.na);
        a.metadata.allow_ad_personalization = !1 !== b(S.g.fa)
    }
      , Zp = function(a) {
        if (Fo(a, "ccd_add_1p_data", !1) && wj(S.g.J)) {
            var b = Ii(a.s);
            if (Ji(b)) {
                if (b.enable_code) {
                    var c = T(a.s, S.g.ka);
                    if (Cc(c) || null === c)
                        a.metadata.user_data_from_code = c
                }
                Cc(b.selectors) && (a.metadata.user_data_from_manual = Hi(b.selectors))
            }
        }
    }
      , $p = function(a) {
        var b = !a.metadata.send_user_data_hit && Op(a, ["conversion", "user_data_web"])
          , c = !Fo(a, "ccd_add_1p_data", !1) && Op(a, "user_data_lead");
        if ((b || c) && wj(S.g.J)) {
            var d = "conversion" === a.metadata.hit_type
              , e = a.s
              , f = void 0
              , g = T(e, S.g.ka);
            if (d) {
                var h = (T(e, S.g.Vc) || {})[a.C[S.g.lb]];
                if (!0 === T(e, S.g.Jc) || h) {
                    var l = Oi(h, g)
                      , n = l.yc;
                    f = l.Xa;
                    a.C[S.g.wh] = n
                }
            } else {
                if (a.metadata.is_config_command)
                    return;
                Ji(Ii(a.s)) && null !== g && (Cc(g) ? f = g : f = Ki(Ii(a.s)),
                f && (a.metadata.speculative = !1))
            }
            a.metadata.user_data = f
        }
    }
      , aq = function(a) {
        Op(a, ["conversion", "remarketing"]) && (a.s.H ? "conversion" !== a.metadata.hit_type && a.eventName && (a.C[S.g.Rg] = a.eventName) : a.C[S.g.Rg] = a.eventName,
        Ma(a.s.h, function(b, c) {
            fh[b.split(".")[0]] || (a.C[b] = c)
        }))
    }
      , bq = function(a) {
        if (a.eventName === S.g.Da && (a.metadata.is_config_command = !0,
        Op(a, "conversion") && (a.metadata.speculative = !0),
        !Op(a, "remarketing") || !1 !== T(a.s, S.g.kb) && !1 !== T(a.s, S.g.Fa) || (a.metadata.speculative = !0),
        Op(a, "landing_page"))) {
            var b = T(a.s, S.g.Hb)
              , c = T(a.s, S.g.za) || {}
              , d = T(a.s, S.g.qb)
              , e = a.metadata.conversion_linker_enabled
              , f = a.metadata.cookie_options;
            rp({
                Lf: e,
                Rh: b,
                dg: c,
                wg: d
            }, f);
            Co(a.target, a.s);
            ko({
                Ce: !1,
                vc: a.metadata.redact_ads_data,
                da: a.target.id,
                eventId: a.s.eventId,
                priorityId: a.s.priorityId,
                Cb: e ? f : void 0,
                zd: e,
                md: a.C[S.g.kf],
                Me: a.C[S.g.ic],
                He: a.C[S.g.hc]
            });
            a.K = !0
        }
    }
      , cq = function(a) {
        if (!Fo(a, "hasPreAutoPiiCcdRule", !1)) {
            var b = R(50);
            if ((!R(49) || b || a.s.H) && Op(a, "conversion") && wj(S.g.J)) {
                var c = (T(a.s, S.g.Vc) || {})[a.C[S.g.lb]]
                  , d = a.C[S.g.Pc];
                if (Ni(c) || yi(d)) {
                    var e = Ta()
                      , f = Ei({
                        Ob: !0,
                        Pb: !0,
                        sg: !0
                    });
                    if (0 !== f.elements.length) {
                        for (var g = [], h = 0; h < f.elements.length; ++h) {
                            var l = f.elements[h];
                            g.push(l.querySelector + "*" + Fi(l) + "*" + l.type)
                        }
                        a.C[S.g.th] = g.join("~");
                        var n = f.Pe;
                        n && (a.C[S.g.uh] = n.querySelector,
                        a.C[S.g.sh] = Fi(n));
                        a.C[S.g.rh] = String(Ta() - e);
                        a.C[S.g.vh] = f.status
                    }
                }
            }
        }
    }
      , dq = function(a) {
        if (a.eventName === S.g.Ka && !a.s.H) {
            if (!a.metadata.consent_updated && Op(a, "conversion")) {
                var b = T(a.s, S.g.pb);
                if ("function" !== typeof b)
                    return;
                var c = String(T(a.s, S.g.ab))
                  , d = a.C[c]
                  , e = T(a.s, c);
                c === S.g.ac || c === S.g.Ud ? sp({
                    xg: c,
                    callback: b,
                    gg: e
                }, a.metadata.cookie_options, a.metadata.redact_ads_data, Uo) : b(d || e)
            }
            a.K = !0
        }
    }
      , eq = function(a) {
        if (Op(a, "conversion") && wj(S.g.J) && (a.C[S.g.se] || a.C[S.g.ie])) {
            var b = a.C[S.g.lb]
              , c = J(a.metadata.cookie_options)
              , d = Qn(c.prefix);
            c.prefix = "_gcl" === d ? "" : d;
            if (a.C[S.g.se]) {
                var e = Lp(b, c);
                e && (a.C[S.g.yh] = e)
            }
            if (a.C[S.g.ie]) {
                var f = Hp(b, c).Rj;
                f && (a.C[S.g.Wg] = f)
            }
        }
    }
      , fq = function(a) {
        var b = R(4), c = a.s, d, e, f;
        if (!b) {
            var g = cp(c, S.g.ja);
            d = db(Cc(g) ? g : {})
        }
        var h = cp(c, S.g.ja, 1)
          , l = cp(c, S.g.ja, 2);
        e = db(Cc(h) ? h : {}, ".");
        f = db(Cc(l) ? l : {}, ".");
        b || (a.C[S.g.kf] = d);
        a.C[S.g.ic] = e;
        a.C[S.g.hc] = f
    }
      , gq = function(a) {
        if (Op(a, ["conversion", "remarketing"])) {
            var b = "conversion" === a.metadata.hit_type;
            b && a.eventName !== S.g.Ja || (Eo(a, S.g.ia),
            b && (Eo(a, S.g.Nc),
            Eo(a, S.g.Lc),
            Eo(a, S.g.Mc),
            Eo(a, S.g.Kc),
            a.C[S.g.Jg] = a.eventName))
        }
    }
      , hq = function(a) {
        if (Op(a, ["conversion", "remarketing"])) {
            var b = a.s
              , c = T(b, S.g.zb);
            if (!0 === c || !1 === c)
                a.C[S.g.zb] = c;
            var d = T(b, S.g.fa);
            if (!0 === d || !1 === d)
                a.C[S.g.Fh] = !d;
            !1 === d && Op(a, "remarketing") && (a.K = !0)
        }
    }
      , iq = function(a) {
        Op(a, "conversion") && (Eo(a, S.g.mc),
        Eo(a, S.g.Rc),
        Eo(a, S.g.oc),
        Eo(a, S.g.Wc),
        Eo(a, S.g.cc),
        Eo(a, S.g.Tc))
    }
      , jq = function(a) {
        Io(a);
    }
      , kq = function(a) {
        if (Op(a, ["conversion", "remarketing"]) && m.__gsaExp && m.__gsaExp.id) {
            var b = m.__gsaExp.id;
            if (Ca(b))
                try {
                    var c = Number(b());
                    isNaN(c) || (a.C[S.g.Zg] = c)
                } catch (d) {}
        }
    }
      , lq = function(a) {
        if (Op(a, ["conversion", "remarketing"])) {
            var b = Mp();
            void 0 !== b && (a.C[S.g.xh] = b || "error");
            var c = Zk();
            c && (a.C[S.g.Xg] = c);
            var d = Yk();
            d && (a.C[S.g.mh] = d)
        }
    }
      , mq = function(a) {
        Op(a, ["conversion"]) && "1" === tn(!1)._up && (a.C[S.g.bh] = !0)
    }
      , nq = function(a) {
        Op(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !wj(S.g.J))
    }
      , oq = function(a) {
        if (Op(a, ["conversion", "user_data_lead", "user_data_web"]) && wj(S.g.J) && a.metadata.conversion_linker_enabled) {
            var b = a.metadata.cookie_options
              , c = Qn(b.prefix);
            "_gcl" === c && (c = "");
            var d = c;
            if (Bp.test(G.location.host) ? Ep.test(G.location.href) || Cp.test(G.location.href) : !go(d)) {
                var e = Jp(c);
                e && (a.C[S.g.ac] = e);
                if (!c) {
                    var f = Gp(Jn() ? Fn() : {}, Cp);
                    f && (a.C[S.g.Vg] = f)
                }
            } else {
                var g = Kp(c);
                g && (a.C[S.g.se] = g);
                if (!c) {
                    var h = a.C[S.g.lb];
                    b = J(b);
                    b.prefix = c;
                    var l = Hp(h, b, !0).Qj;
                    l && (a.C[S.g.ie] = l)
                }
            }
        }
    }
      , pq = function(a) {
        if (Op(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && wj(S.g.J)) {
            var b = !R(3);
            if ("remarketing" !== a.metadata.hit_type || b) {
                var c = a.metadata.cookie_options;
                $m(c, "conversion" === a.metadata.hit_type && a.eventName !== S.g.Ka);
                a.C[S.g.Ud] = Xm(c.prefix)
            }
        }
    }
      , qq = function(a) {
        if (R(10) && Op(a, ["conversion"])) {
            var b = Lo(a.metadata.cookie_options);
            if (b && !a.C[S.g.Ma]) {
                var c = Vj(a.C[S.g.lb]);
                a.C[S.g.Ma] = c
            }
            b && (a.C[S.g.Ab] = b,
            a.metadata.send_ccm_parallel_ping = !0)
        }
    }
      , rq = function(a) {
        var b = !wj(S.g.J);
        switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
            a.K = !(!b && !a.metadata.consent_updated);
            break;
        case "remarketing":
            a.K = b;
            break;
        case "conversion":
            a.metadata.consent_updated && (a.C[S.g.zg] = !0)
        }
    }
      , sq = function(a) {
        Op(a, ["conversion"]) && a.s.eventMetadata.is_external_event && (a.C[S.g.Ch] = !0)
    }
      , tq = function(a) {
        var b;
        if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
            switch (a.metadata.hit_type) {
            case "user_data_web":
                b = 97;
                a.metadata.speculative = !1;
                break;
            case "user_data_lead":
                b = 98;
                a.metadata.speculative = !1;
                break;
            case "conversion":
                b = 99
            }
        !a.metadata.speculative && b && N(b);
        !0 === a.metadata.speculative && (a.K = !0)
    }
      , Vp = !1;
    var uq = function(a) {
        if (wj(S.g.J))
            return a;
        a = a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = pi(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
            var d = pi(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        })
    };
    var vq = function(a, b) {
        var c = m, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var wq = function(a, b) {
        var c = vk(a, "fmt");
        if (b) {
            var d = vk(a, "random")
              , e = vk(a, "label") || "";
            if (!d)
                return !1;
            var f = Gm(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!vq(f, b))
                return !1
        }
        c && 4 != c && (a = xk(a, "rfmt", c));
        var g = xk(a, "fmt", 4);
        ac(g, function() {
            m.google_noFurtherRedirects && b && b.call && (m.google_noFurtherRedirects = null,
            b())
        }, void 0, void 0, G.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var xq = function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c]
              , e = void 0;
            if (d.hasOwnProperty("google_business_vertical")) {
                e = d.google_business_vertical;
                var f = {};
                b[e] = b[e] || (f.google_business_vertical = e,
                f)
            } else
                e = "",
                b.hasOwnProperty(e) || (b[e] = {});
            var g = b[e], h;
            for (h in d)
                "google_business_vertical" !== h && (h in g || (g[h] = []),
                g[h].push(d[h]))
        }
        return Object.keys(b).map(function(l) {
            return b[l]
        })
    }
      , yq = function(a) {
        if (!a || !a.length)
            return [];
        for (var b = [], c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d) {
                var e = {};
                b.push((e.id = d.id,
                e.origin = d.origin,
                e.destination = d.destination,
                e.start_date = d.start_date,
                e.end_date = d.end_date,
                e.location_id = d.location_id,
                e.google_business_vertical = d.google_business_vertical,
                e))
            }
        }
        return b
    }
      , zq = function(a) {
        if (!a || !a.length)
            return [];
        for (var b = [], c = 0; c < a.length; ++c) {
            var d = a[c];
            d && b.push({
                item_id: d.id,
                quantity: d.quantity,
                value: d.price,
                start_date: d.start_date,
                end_date: d.end_date
            })
        }
        return b
    }
      , Bq = function(a) {
        if (!a)
            return "";
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c]
              , e = [];
            d && (e.push(Aq(d.value)),
            e.push(Aq(d.quantity)),
            e.push(Aq(d.item_id)),
            e.push(Aq(d.start_date)),
            e.push(Aq(d.end_date)),
            b.push("(" + e.join("*") + ")"))
        }
        return 0 < b.length ? b.join("") : ""
    }
      , Aq = function(a) {
        return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
    }
      , Dq = function(a, b) {
        var c = Cq(b);
        return "" + a + (a && c ? ";" : "") + c
    }
      , Cq = function(a) {
        if (!a || "object" !== typeof a || "function" === typeof a.join)
            return "";
        var b = [];
        Ma(a, function(c, d) {
            var e, f;
            if (Ea(d)) {
                for (var g = [], h = 0; h < d.length; ++h) {
                    var l = Eq(d[h]);
                    void 0 != l && g.push(l)
                }
                f = 0 !== g.length ? g.join(",") : void 0
            } else
                f = Eq(d);
            e = f;
            var n = Eq(c);
            n && void 0 != e && b.push(n + "=" + e)
        });
        return b.join(";")
    }
      , Eq = function(a) {
        var b = typeof a;
        if (null != a && "object" !== b && "function" !== b)
            return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }
      , Fq = function(a, b) {
        var c = []
          , d = function(f, g) {
            null != g && "" !== g && (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)))
        }
          , e = a.metadata.hit_type;
        "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
        Ma(b, d);
        return c.join("&")
    }
      , Gq = function(a, b) {
        var c = a.metadata.hit_type, d = a.C[S.g.Pc], e = wj(S.g.J), f = [], g, h = a.s.X, l, n = bk() ? 2 : 3, p = 0, q = function(w) {
            f.push(w);
            w.jb && p++
        };
        switch (c) {
        case "conversion":
            l = "pagead/conversion";
            var r = "";
            e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/",
            l = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
            a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
            q({
                sb: "" + g + l + "/" + d + "/?" + Fq(a, b) + r,
                format: n,
                jb: !0
            });
            a.metadata.send_ccm_parallel_ping && q({
                sb: "" + g + "ccm/conversion/" + d + "/?" + Fq(a, b) + r,
                format: 2,
                jb: !0
            });
            a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1",
            q({
                sb: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Fq(a, b) + r,
                format: n,
                jb: !0
            }));
            break;
        case "remarketing":
            var t = b.data || ""
              , u = xq(yq(a.C[S.g.ia]));
            if (u.length) {
                for (var v = 0; v < u.length; v++)
                    b.data = Dq(t, u[v]),
                    q({
                        sb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Fq(a, b),
                        format: n,
                        jb: !0
                    }),
                    a.metadata.send_fledge_experiment && q({
                        sb: yp() + "/td/rul/" + d + "?" + Fq(a, b),
                        format: 4,
                        jb: !1
                    }),
                    a.metadata.event_start_timestamp_ms += 1;
                a.metadata.send_fledge_experiment = !1
            } else
                q({
                    sb: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Fq(a, b),
                    format: n,
                    jb: !0
                });
            break;
        case "user_data_lead":
            q({
                sb: "https://google.com/pagead/form-data/" + d + "?" + Fq(a, b),
                format: 1,
                jb: !0
            });
            break;
        case "user_data_web":
        }
        1 < f.length && Ca(a.s.X) && (h = eb(a.s.X, p));
        bk() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
            sb: yp() + "/td/rul/" + d + "?" + Fq(a, b),
            format: 4,
            jb: !1
        });
        return {
            X: h,
            ck: f
        }
    }
      , Hq = function(a, b, c, d, e) {
        c.metadata.record_aw_latency && Bm(c.s.eventId, "P", Ta() - c.metadata.event_start_timestamp_ms);
        var f = function() {
            R(6) && c.metadata.record_aw_latency && Bm(c.s.eventId, "C", Ta() - c.metadata.event_start_timestamp_ms);
            e && e()
        };
        switch (b) {
        case 1:
            kc(a);
            e && e();
            break;
        case 2:
            dc(a, f);
            break;
        case 3:
            var g = !1;
            try {
                g = wq(a, f)
            } catch (n) {
                g = !1
            }
            g || Hq(a, 2, c, d, f);
            break;
        case 4:
            var h = "AW-" + c.C[S.g.Pc]
              , l = c.C[S.g.lb];
            l && (h = h + "/" + l);
            xp(a, h)
        }
    }
      , Iq = {}
      , Jq = (Iq[S.g.zg] = "gcu",
    Iq[S.g.ac] = "gclaw",
    Iq[S.g.Ud] = "auid",
    Iq[S.g.Kc] = "dscnt",
    Iq[S.g.Lc] = "fcntr",
    Iq[S.g.Mc] = "flng",
    Iq[S.g.Nc] = "mid",
    Iq[S.g.Jg] = "bttype",
    Iq[S.g.lb] = "label",
    Iq[S.g.bf] = "capi",
    Iq[S.g.va] = "currency_code",
    Iq[S.g.Rc] = "vdltv",
    Iq[S.g.Qi] = "_dbg",
    Iq[S.g.Wc] = "oedeld",
    Iq[S.g.hc] = "edid",
    Iq[S.g.Sg] = "fledge",
    Iq[S.g.Vg] = "gac",
    Iq[S.g.ie] = "gacgb",
    Iq[S.g.Wg] = "gacmcov",
    Iq[S.g.Xg] = "gdpr",
    Iq[S.g.ic] = "gdid",
    Iq[S.g.Zg] = "gsaexp",
    Iq[S.g.ah] = "frm",
    Iq[S.g.bh] = "gtm_up",
    Iq[S.g.kf] = "did",
    Iq[S.g.mc] = void 0,
    Iq[S.g.Ra] = "url",
    Iq[S.g.Sa] = "ref",
    Iq[S.g.nc] = "tiba",
    Iq[S.g.zb] = "rdp",
    Iq[S.g.Ab] = "ecsid",
    Iq[S.g.oc] = "delopc",
    Iq[S.g.mh] = "gdpr_consent",
    Iq[S.g.Ma] = "oid",
    Iq[S.g.rh] = "ec_lat",
    Iq[S.g.sh] = "ec_meta",
    Iq[S.g.th] = "ec_m",
    Iq[S.g.uh] = "ec_sel",
    Iq[S.g.vh] = "ec_s",
    Iq[S.g.wh] = "ec_mode",
    Iq[S.g.Aa] = "userId",
    Iq[S.g.xh] = "us_privacy",
    Iq[S.g.ra] = "value",
    Iq[S.g.se] = "gclgb",
    Iq[S.g.yh] = "mcov",
    Iq[S.g.Bh] = "hn",
    Iq[S.g.Ch] = "gtm_ee",
    Iq[S.g.Fh] = "npa",
    Iq[S.g.Pc] = null,
    Iq[S.g.Jb] = null,
    Iq[S.g.Qa] = null,
    Iq[S.g.ia] = null,
    Iq)
      , Lq = function(a) {
        Kq(a, function(b) {
            var c = a.metadata.hit_type;
            "conversion" !== c && "remarketing" !== c || !R(6) || (a.metadata.record_aw_latency = Am(a.s.eventId, 3),
            a.metadata.record_aw_latency && Bm(a.s.eventId, "S", Ta() - a.metadata.event_start_timestamp_ms));
            for (var d = Gq(a, b), e = d.X, f = d.ck, g = 0; g < f.length; g++) {
                var h = f[g]
                  , l = h.sb
                  , n = h.format
                  , p = h.jb
                  , q = a.metadata.redact_ads_data ? uq(l) : l;
                Hq(q, n, a, b, p ? e : void 0)
            }
        })
    }
      , Kq = function(a, b) {
        var c = a.metadata.hit_type
          , d = {}
          , e = {}
          , f = []
          , g = a.metadata.event_start_timestamp_ms;
        if ("conversion" === c || "remarketing" === c)
            d.cv = "11",
            d.fst = g,
            d.fmt = 3,
            d.bg = "ffffff",
            d.guid = "ON",
            d.async = "1";
        d.gtm = nk();
        kj() && "remarketing" !== c && (d.gcs = xj(),
        lj() && (d.gcd = "G1" + sj(ij)));
        if (a.C[S.g.Jb]) {
            var h = a.C[S.g.Jb].split("x");
            2 === h.length && (d.u_w = h[0],
            d.u_h = h[1])
        }
        if (a.C[S.g.Qa]) {
            var l = a.C[S.g.Qa];
            2 === l.length ? d.hl = l : 5 === l.length && (d.hl = l.substring(0, 2),
            d.gl = l.substring(3, 5))
        }
        R(13) && (Jq[S.g.rf] = "uaa",
        Jq[S.g.sf] = "uab",
        Jq[S.g.tf] = "uafvl",
        Jq[S.g.uf] = "uam",
        Jq[S.g.vf] = "uap",
        Jq[S.g.wf] = "uapv",
        Jq[S.g.xf] = "uaw");
        Ma(a.C, function(u, v) {
            if (Jq.hasOwnProperty(u)) {
                var w = Jq[u];
                w && (d[w] = v)
            } else
                e[u] = v
        });
        var n = a.C[S.g.mc];
        void 0 != n && "" !== n && (d.vdnc = String(n));
        var p = a.C[S.g.Tc];
        void 0 !== p && (d.shf = p);
        var q = a.C[S.g.cc];
        void 0 !== q && (d.delc = q);
        d.data = Cq(e);
        var r = a.C[S.g.ia];
        r && "conversion" === c && (d.iedeld = Ri(r),
        d.item = Bq(zq(r)));
        if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data) {
            var t = Ng(a.metadata.user_data);
            t && f.push(t.then(function(u) {
                d.em = u.Dd;
                if (R(10) && "user_data_web" === c && 0 < u.Bk) {
                    var v = Mo(a.metadata.cookie_options);
                    d.ecsid = v
                }
            }))
        }
        if (f.length)
            try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (u) {}
        b(d)
    };
    var Mq = function() {
        this.h = {}
    }
      , Nq = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , Oq = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , Qq = function(a, b, c, d, e) {
        if (!kj()) {
            Pq(a, b, c, d, e);
            return
        }
        Aj(function() {
            wj(S.g.J) ? Pq(a, b, c, d, e) : d && d()
        }, [S.g.J]);
    };
    var Rq = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = {
            gclgb: function() {
                return Qo("gb", b, c).join(".")
            },
            gacgb: function() {
                return Xo(c)
            },
            gclaw: function() {
                return Uo(b, c).join(".")
            },
            gac: function() {
                return Wo(c)
            }
        }
          , e = Zo(b)
          , f = e ? "gclgb" : "gclaw"
          , g = e ? "gacgb" : "gac"
          , h = d[g]
          , l = (0,
        d[f])()
          , n = "_gcl" !== b ? "" : h();
        l && Nq(a, f, l);
        n && Nq(a, g, n)
    }
      , Pq = function(a, b, c, d, e) {
        c = c || {};
        var f = c.Cb || {}
          , g = new Mq;
        Mg(b, function(h, l) {
            Nq(g, "em", h);
            Nq(g, "gtm", nk());
            kj() && (Nq(g, "gcs", xj()),
            Nq(g, "gcd", "G1" + sj(ij)));
            Rq(g, Qn(f.prefix), c.vc);
            Nq(g, "auid", Xm(f.prefix));
            e && e.Ke && Nq(g, "gdid", e.Ke);
            e && e.Ge && Nq(g, "edid", e.Ge);
            var p = Oq(g);
            kc("https://google.com/pagead/form-data/" + a + "?" + p);
            d && d()
        })
    };
    function Sq(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return oi("" + c + b).href
        }
    }
    function Tq(a, b) {
        return qh || sh ? Sq(a, b) : void 0
    }
    function Uq() {
        return !!gh.xe && "SGTM_TOKEN" !== gh.xe.split("@@").join("")
    }
    ;var Wq = function(a, b, c, d) {
        if (!Vq() && !ik(a)) {
            var e = c ? "/gtag/js" : "/gtm.js"
              , f = "?id=" + encodeURIComponent(a) + "&l=" + gh.ma
              , g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            var h = Uq();
            h && (f += "&sign=" + gh.xe);
            var l = Tq(b, e + f);
            if (!l) {
                var n = gh.Td + e;
                h && Vb && g && (n = Vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                l = ro("https://", "http://", n + f)
            }
            gk().container[a] = {
                state: 1,
                context: d
            };
            ac(l)
        }
    }
      , Xq = function(a, b, c) {
        var d;
        if (d = !Vq()) {
            var e = gk().destination[a];
            d = !(e && e.state)
        }
        if (d)
            if (jk())
                gk().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                },
                N(91);
            else {
                var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + gh.ma + "&cx=c";
                Uq() && (f += "&sign=" + gh.xe);
                var g = Tq(b, f);
                g || (g = ro("https://", "http://", gh.Td + f));
                gk().destination[a] = {
                    state: 1,
                    context: c
                };
                ac(g)
            }
    };
    function Vq() {
        if (bk()) {
            return !0
        }
        return !1
    }
    ;var Yq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , Zq = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , $q = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , ar = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , dr = function(a) {
        var b = Ph("gtm.allowlist") || Ph("gtm.whitelist");
        b && N(9);
        oh && (b = ["google", "gtagfl", "lcl", "zone"]);
        br && cr() && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."));
        var c = b && Ya(Qa(b), Zq)
          , d = Ph("gtm.blocklist") || Ph("gtm.blacklist");
        d || (d = Ph("tagTypeBlacklist")) && N(3);
        d ? N(8) : d = [];
        cr() && (d = Qa(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Qa(d).indexOf("google") && N(2);
        var e = d && Ya(Qa(d), $q)
          , f = {};
        return function(g) {
            var h = g && g[Wd.cb];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var l = Ah[h] || []
              , n = a(h, l);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > c.indexOf(l[q])) {
                                        N(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(h);
                if (t)
                    r = t;
                else {
                    var u = La(e, l || []);
                    u && N(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = La(e, ar));
            return f[h] = v
        }
    }
      , br = !1;
    var cr = function() {
        return Yq.test(m.location && m.location.hostname)
    };
    var er = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , fr = {}
      , gr = Object.freeze((fr[S.g.Fa] = !0,
    fr))
      , hr = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics=")
      , jr = function(a, b, c) {
        if (hl && "config" === a && !(1 < no(b).M.length)) {
            var d, e = Wb("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = J(c.F);
            J(c.h, f);
            var g = [], h;
            for (h in d) {
                var l = ir(d[h], f);
                l.length && (hr && console.log(l),
                g.push(h))
            }
            if (g.length) {
                if (g.length) {
                    var n = b + "*" + g.join(".");
                    Hl = Hl ? Hl + "!" + n : "&tdc=" + n
                }
                vb("TAGGING", er[G.readyState] || 14)
            }
            d[b] = f
        }
    };
    function kr(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function ir(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? gr[q] : t
        }, f;
        for (f in kr(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , l = e(f, b)
              , n = "object" === Ac(h) || "array" === Ac(h)
              , p = "object" === Ac(l) || "array" === Ac(l);
            if (n && p)
                ir(h, l, c, g);
            else if (n || p || h !== l)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var lr = !1
      , mr = 0
      , nr = [];
    function or(a) {
        if (!lr) {
            var b = G.createEventObject
              , c = "complete" == G.readyState
              , d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                lr = !0;
                for (var e = 0; e < nr.length; e++)
                    I(nr[e])
            }
            nr.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    I(arguments[f]);
                return 0
            }
        }
    }
    function pr() {
        if (!lr && 140 > mr) {
            mr++;
            try {
                G.documentElement.doScroll("left"),
                or()
            } catch (a) {
                m.setTimeout(pr, 50)
            }
        }
    }
    var qr = function(a) {
        lr ? a() : nr.push(a)
    };
    var sr = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ve.N
        }
    };
    var ur = function(a, b) {
        this.h = !1;
        this.F = [];
        this.I = {
            tags: []
        };
        this.T = !1;
        this.B = this.D = 0;
        tr(this, a, b)
    }
      , vr = function(a, b, c, d) {
        if (kh.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Cc(d) && (e = J(d, e));
        e.id = c;
        e.status = "timeout";
        return a.I.tags.push(e) - 1
    }
      , wr = function(a, b, c, d) {
        var e = a.I.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , xr = function(a) {
        if (!a.h) {
            for (var b = a.F, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.F.length = 0
        }
    }
      , tr = function(a, b, c) {
        void 0 !== b && a.ze(b);
        c && m.setTimeout(function() {
            return xr(a)
        }, Number(c))
    };
    ur.prototype.ze = function(a) {
        var b = this
          , c = Va(function() {
            return I(function() {
                a(Ve.N, b.I)
            })
        });
        this.h ? c() : this.F.push(c)
    }
    ;
    var yr = function(a) {
        a.D++;
        return Va(function() {
            a.B++;
            a.T && a.B >= a.D && xr(a)
        })
    }
      , zr = function(a) {
        a.T = !0;
        a.B >= a.D && xr(a)
    };
    var Ar = function() {
        function a(d) {
            return !Da(d) || 0 > d ? 0 : d
        }
        if (!hh._li && m.performance && m.performance.timing) {
            var b = m.performance.timing.navigationStart
              , c = Da(Qh.get("gtm.start")) ? Qh.get("gtm.start") : 0;
            hh._li = {
                cst: a(c - b),
                cbt: a(yh - b)
            }
        }
    }
      , Br = function(a) {
        m.performance && m.performance.mark(Ve.N + "_" + a + "_start")
    }
      , Cr = function(a) {
        if (m.performance) {
            var b = Ve.N + "_" + a + "_start"
              , c = Ve.N + "_" + a + "_duration";
            m.performance.measure(c, b);
            var d = m.performance.getEntriesByName(c)[0];
            m.performance.clearMarks(b);
            m.performance.clearMeasures(c);
            var e = hh._p || {};
            void 0 === e[a] && (e[a] = d.duration,
            hh._p = e);
            return d.duration
        }
    }
      , Dr = function() {
        var a = mc();
        if (void 0 !== a) {
            var b = hh._p || {};
            b.PAGEVIEW = a;
            hh._p = b
        }
    };
    var Er = {}
      , Fr = function() {
        return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject]
    }
      , Gr = !1;
    var Hr = function(a) {
        m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
        var b = m.GoogleAnalyticsObject;
        if (m[b])
            m.hasOwnProperty(b);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Sa());
            m[b] = c
        }
        Ar();
        return m[b]
    }
      , Ir = function(a) {
        if (kj()) {
            var b = Fr();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };
    function Jr() {
        return m.GoogleAnalyticsObject || "ga"
    }
    var Kr = function(a) {}
      , Lr = function(a, b) {
        return function() {
            var c = Fr()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , l = 0 > g.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function Qr(a, b, c, d) {
        var e = ve[a]
          , f = Rr(a, b, c, d);
        if (!f)
            return null;
        var g = Ge(e[Wd.Kh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Qr(h.index, {
                X: f,
                W: 1 === h.Vh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function Rr(a, b, c, d) {
        function e() {
            if (f[Wd.oj])
                h();
            else {
                var w = He(f, c, [])
                  , x = w[Wd.zi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!wj(x[y])) {
                            h();
                            return
                        }
                var A = vr(c.Bb, String(f[Wd.cb]), Number(f[Wd.gd]), w[Wd.pj])
                  , B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var H = Ta() - E;
                        mm(c.id, ve[a], "5", H);
                        wr(c.Bb, A, "success", H);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var H = Ta() - E;
                        mm(c.id, ve[a], "6", H);
                        wr(c.Bb, A, "failure", H);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                mm(c.id, f, "1");
                var C = function() {
                    var H = Ta() - E;
                    mm(c.id, f, "7", H);
                    wr(c.Bb, A, "exception", H);
                    B || (B = !0,
                    h())
                };
                var E = Ta();
                try {
                    Fe(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (H) {
                    C(H)
                }
            }
        }
        var f = ve[a]
          , g = b.X
          , h = b.W
          , l = b.terminate;
        if (c.Wf(f))
            return null;
        var n = Ge(f[Wd.Lh], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = Qr(p.index, {
                X: g,
                W: h,
                terminate: l
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Vh ? l : q
        }
        if (f[Wd.Gh] || f[Wd.rj]) {
            var r = f[Wd.Gh] ? we : c.Vk
              , t = g
              , u = h;
            if (!r[a]) {
                e = Va(e);
                var v = Sr(a, r, e);
                g = v.X;
                h = v.W
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function Sr(a, b, c) {
        var d = []
          , e = [];
        b[a] = Tr(d, e, c);
        return {
            X: function() {
                b[a] = Ur;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            W: function() {
                b[a] = Vr;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function Tr(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Ur(a) {
        a()
    }
    function Vr(a, b) {
        b()
    }
    ;var Xr = function(a, b) {
        return 1 === arguments.length ? Wr("set", a) : Wr("set", a, b)
    }
      , Yr = function(a, b) {
        return 1 === arguments.length ? Wr("config", a) : Wr("config", a, b)
    }
      , Zr = function(a, b, c) {
        c = c || {};
        c[S.g.Kb] = a;
        return Wr("event", b, c)
    };
    function Wr(a) {
        return arguments
    }
    var $r = function() {
        this.h = [];
        this.B = []
    };
    $r.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++)
            try {
                this.B[f](e)
            } catch (g) {}
    }
    ;
    $r.prototype.listen = function(a) {
        this.B.push(a)
    }
    ;
    $r.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    $r.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var bs = function(a, b, c) {
        as().enqueue(a, b, c)
    }
      , ds = function() {
        var a = cs;
        as().listen(a)
    };
    function as() {
        var a = hh.mb;
        a || (a = new $r,
        hh.mb = a);
        return a
    }
    var ls = function(a) {
        var b = hh.zones;
        return b ? b.getIsAllowedFn(dk(), a) : function() {
            return !0
        }
    }
      , ms = function(a) {
        var b = hh.zones;
        return b ? b.isActive(dk(), a) : !0
    };
    var ps = function(a, b) {
        for (var c = [], d = 0; d < ve.length; d++)
            if (a[d]) {
                var e = ve[d];
                var f = yr(b.Bb);
                try {
                    var g = Qr(d, {
                        X: f,
                        W: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c
                          , l = h.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = xe[p];
                        l.call(h, {
                            ni: n,
                            fi: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        ns(d, b),
                        f()
                } catch (t) {
                    f()
                }
            }
        c.sort(os);
        for (var r = 0; r < c.length; r++)
            c[r].execute();
        return 0 < c.length
    };
    function os(a, b) {
        var c, d = b.fi, e = a.fi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.ni
              , h = b.ni;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function ns(a, b) {
        if (hl) {
            var c = function(d) {
                var e = b.Wf(ve[d]) ? "3" : "4"
                  , f = Ge(ve[d][Wd.Kh], b, []);
                f && f.length && c(f[0].index);
                mm(b.id, ve[d], e);
                var g = Ge(ve[d][Wd.Lh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var ss = !1, qs;
    var ys = function(a) {
        var b = Ta()
          , c = a["gtm.uniqueEventId"]
          , d = a["gtm.priorityId"]
          , e = a.event;
        if ("gtm.js" === e) {
            if (ss)
                return !1;
            ss = !0;
        }
        var h, l = !1;
        if (ms(c))
            h = ls(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            l = !0;
            h = ls(Number.MAX_SAFE_INTEGER)
        }
        lm(c, e);
        var n = a.eventCallback
          , p = a.eventTimeout
          , q = n;
        var r = {
            id: c,
            priorityId: d,
            name: e,
            Wf: dr(h),
            Vk: [],
            bi: function() {
                N(6);
                vb("HEALTH", 0)
            },
            Ph: us(),
            Qh: vs(c),
            Bb: new ur(q,p)
        }
          , t = Qe(r);
        l && (t = ws(t));
        var u = ps(t, r)
          , v = !1;
        zr(r.Bb);
        "gtm.js" !== e && "gtm.sync" !== e || Kr(Ve.N);
        return xs(t, u) || v
    };
    function vs(a) {
        return function(b) {
            hl && (Gc(b) || vm(a, "input", b))
        }
    }
    function us() {
        var a = {};
        a.event = Uh("event", 1);
        a.ecommerce = Uh("ecommerce", 1);
        a.gtm = Uh("gtm");
        a.eventModel = Uh("eventModel");
        return a
    }
    function ws(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(ve[c][Wd.cb]);
                if (jh[d] || void 0 !== ve[c][Wd.sj] || Bh[d])
                    b[c] = !0;
                R(58) || 0 !== ve[c][Wd.cb].indexOf("__ccd") && 0 !== ve[c][Wd.cb].indexOf("__ogt") && "__set_product_settings" !== ve[c][Wd.cb] || (b[c] = !0)
            }
        return b
    }
    function xs(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ve[c] && !kh[String(ve[c][Wd.cb])])
                return !0;
        return !1
    }
    var As = function(a, b, c, d) {
        zs.push("event", [b, a], c, d)
    }
      , Bs = function(a, b, c, d) {
        zs.push("get", [a, b], c, d)
    }
      , Cs = function() {
        this.status = 1;
        this.I = {};
        this.h = {};
        this.B = {};
        this.T = null;
        this.F = {};
        this.D = !1
    }
      , Ds = function(a, b, c, d) {
        var e = Ta();
        this.type = a;
        this.B = e;
        this.da = b || "";
        this.h = c;
        this.messageContext = d
    }
      , Es = function() {
        this.B = {};
        this.D = {};
        this.h = []
    }
      , Fs = function(a, b) {
        var c = no(b);
        return a.B[c.V] = a.B[c.V] || new Cs
    }
      , Gs = function(a, b, c, d) {
        if (d.da) {
            var e = Fs(a, d.da)
              , f = e.T;
            if (f) {
                var g = J(c)
                  , h = J(e.I[d.da])
                  , l = J(e.F)
                  , n = J(e.h)
                  , p = J(a.D)
                  , q = {};
                if (hl)
                    try {
                        q = J(Mh)
                    } catch (v) {
                        N(72)
                    }
                var r = no(d.da).prefix
                  , t = function(v) {
                    um(d.messageContext.eventId, r, v);
                    var w = g[S.g.fc];
                    w && I(w)
                }
                  , u = pp(np(mp(lp(jp(ip(kp(hp(gp(fp(new ep(d.messageContext.eventId,d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2")
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3")
                    }
                }));
                try {
                    um(d.messageContext.eventId, r, "1"),
                    jr(d.type, d.da, u),
                    f(d.da, b, d.B, u)
                } catch (v) {
                    um(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    Es.prototype.register = function(a, b, c) {
        var d = Fs(this, a);
        3 !== d.status && (d.T = b,
        d.status = 3,
        c && (J(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    Es.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!no(c))
                return;
            if (c) {
                var e = no(c);
                e && 1 === Fs(this, c).status && (Fs(this, c).status = 2,
                this.push("require", [{}], e.V, {}))
            }
            Fs(this, c).D && (d.deferrable = !1)
        }
        this.h.push(new Ds(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    Es.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            var f = this.h[0];
            if (f.messageContext.deferrable)
                !f.da || Fs(this, f.da).D ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = Fs(this, f.da);
                    if (3 !== g.status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    Ma(f.h[0], function(r, t) {
                        J(bb(r, t), b.D)
                    });
                    break;
                case "config":
                    g = Fs(this, f.da);
                    e.ub = {};
                    Ma(f.h[0], function(r) {
                        return function(t, u) {
                            J(bb(t, u), r.ub)
                        }
                    }(e));
                    var h = !!e.ub[S.g.bd];
                    delete e.ub[S.g.bd];
                    var l = no(f.da)
                      , n = l.V === l.id;
                    h || (n ? g.F = {} : g.I[f.da] = {});
                    g.D && h || Gs(this, S.g.Da, e.ub, f);
                    g.D = !0;
                    n ? J(e.ub, g.F) : (J(e.ub, g.I[f.da]),
                    N(70));
                    d = !0;
                    break;
                case "event":
                    g = Fs(this, f.da);
                    e.Nd = {};
                    Ma(f.h[0], function(r) {
                        return function(t, u) {
                            J(bb(t, u), r.Nd)
                        }
                    }(e));
                    Gs(this, f.h[1], e.Nd, f);
                    break;
                case "get":
                    g = Fs(this, f.da);
                    var p = {}
                      , q = (p[S.g.ab] = f.h[0],
                    p[S.g.pb] = f.h[1],
                    p);
                    Gs(this, S.g.Ka, q, f)
                }
                this.h.shift();
                Hs(this, f)
            }
            e = {
                ub: e.ub,
                Nd: e.Nd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var Hs = function(a, b) {
        if ("require" !== b.type)
            if (b.da)
                for (var c = Fs(a, b.da).B[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.B)
                    if (a.B.hasOwnProperty(e)) {
                        var f = a.B[e];
                        if (f && f.B)
                            for (var g = f.B[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , Is = function(a, b) {
        var c = zs
          , d = J(b);
        J(Fs(c, a).h, d);
        Fs(c, a).h = d
    }
      , zs = new Es;
    var Ze;
    var Js = {}
      , Ks = {}
      , Ls = function(a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
            Sd: d.Sd,
            Pd: d.Pd
        },
        e++) {
            var f = a[e];
            if (0 <= f.indexOf("-"))
                d.Sd = no(f),
                d.Sd && (Ha(ek(), function(p) {
                    return function(q) {
                        return p.Sd.V === q
                    }
                }(d)) ? b.push(f) : c.push(f));
            else {
                var g = Js[f] || [];
                d.Pd = {};
                g.forEach(function(p) {
                    return function(q) {
                        return p.Pd[q] = !0
                    }
                }(d));
                for (var h = dk(), l = 0; l < h.length; l++)
                    if (d.Pd[h[l]]) {
                        b = b.concat(ek());
                        break
                    }
                var n = Ks[f] || [];
                n.length && (b = b.concat(n))
            }
        }
        return {
            sk: b,
            vk: c
        }
    }
      , Ms = function(a) {
        Ma(Js, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Ns = function(a) {
        Ma(Ks, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Os = "HA GF G UA AW DC MC".split(" ")
      , Ps = !1
      , Qs = !1;
    function Rs(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Ch()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Ss = {
        config: function(a, b) {
            var c = Rs(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Cc(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = no(a[1]);
                if (e) {
                    lm(c.eventId, "gtag.config");
                    var f = e.V
                      , g = e.id !== f;
                    if (g ? -1 === ek().indexOf(f) : -1 === dk().indexOf(f)) {
                        if (!R(61) || !d[S.g.ne]) {
                            var h = d[S.g.wa] || zs.D[S.g.wa];
                            g ? Xq(f, h, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            }) : Wq(f, h, !0, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    } else {
                        if (nh && !g && !d[S.g.bd]) {
                            var l = Qs;
                            Qs = !0;
                            if (l)
                                return
                        }
                        Ps || N(43);
                        if (!b.noTargetGroup)
                            if (g) {
                                Ns(e.id);
                                var n = e.id
                                  , p = d[S.g.ke] || "default";
                                p = String(p).split(",");
                                for (var q = 0; q < p.length; q++) {
                                    var r = Ks[p[q]] || [];
                                    Ks[p[q]] = r;
                                    0 > r.indexOf(n) && r.push(n)
                                }
                            } else {
                                Ms(e.id);
                                var t = e.id
                                  , u = d[S.g.ke] || "default";
                                u = u.toString().split(",");
                                for (var v = 0; v < u.length; v++) {
                                    var w = Js[u[v]] || [];
                                    Js[u[v]] = w;
                                    0 > w.indexOf(t) && w.push(t)
                                }
                            }
                        delete d[S.g.ke];
                        var x = b.eventMetadata || {};
                        x.hasOwnProperty("is_external_event") || (x.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = x;
                        delete d[S.g.fc];
                        for (var y = g ? [e.id] : ek(), A = 0; A < y.length; A++) {
                            var B = J(b);
                            zs.push("config", [d], y[A], B)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                N(39);
                var c = Rs(a, b)
                  , d = a[1];
                "default" === d ? uj(a[2]) : "update" === d && vj(a[2], c)
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!Cc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = J(e),
                e[S.g.fc] && (g.eventCallback = e[S.g.fc]),
                e[S.g.ee] && (g.eventTimeout = e[S.g.ee]));
                var h = Rs(a, b)
                  , l = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = l;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[S.g.Kb];
                void 0 === r && (r = Ph(S.g.Kb, 2),
                void 0 === r && (r = "default"));
                if (k(r) || Ea(r)) {
                    var t = r.toString().replace(/\s+/g, "").split(",")
                      , u = Ls(t)
                      , v = u.sk
                      , w = u.vk;
                    if (w.length)
                        for (var x = q && q[S.g.wa] || zs.D[S.g.wa], y = 0; y < w.length; y++) {
                            var A = no(w[y]);
                            A && Xq(A.V, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = po(v)
                } else
                    p = void 0;
                var B = p;
                if (B) {
                    lm(l, c);
                    for (var C = [], E = 0; E < B.length; E++) {
                        var H = B[E]
                          , D = J(b);
                        if (-1 !== Os.indexOf(H.prefix)) {
                            var L = J(d)
                              , P = D.eventMetadata || {};
                            P.hasOwnProperty("is_external_event") || (P.is_external_event = !D.fromContainerExecution);
                            D.eventMetadata = P;
                            delete L[S.g.fc];
                            As(c, L, H.id, D)
                        }
                        C.push(H.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[S.g.Kb] = C.join() : delete g.eventModel[S.g.Kb];
                    Ps || N(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            N(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ca(a[3])) {
                var c = no(a[1])
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Ps || N(43);
                    var f = zs.D[S.g.wa];
                    if (!Ha(ek(), function(h) {
                        return c.V === h
                    }))
                        Xq(c.V, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Os.indexOf(c.prefix)) {
                        Rs(a, b);
                        var g = {};
                        qj(J((g[S.g.ab] = d,
                        g[S.g.pb] = e,
                        g)));
                        Bs(d, function(h) {
                            I(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Ps = !0;
                var c = Rs(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && k(a[1]) && Ca(a[2])) {
                var b = a[1]
                  , c = a[2]
                  , d = Ze.B;
                d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                if (N(74),
                "all" === a[1]) {
                    N(75);
                    var e = !1;
                    try {
                        e = a[2](Ve.N, "unknown", {})
                    } catch (f) {}
                    e || N(76)
                }
            } else {
                N(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && Cc(a[1]) ? c = J(a[1]) : 3 == a.length && k(a[1]) && (c = {},
            Cc(a[2]) || Ea(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Rs(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                J(c);
                var g = J(c);
                zs.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                R(30) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Ts = {
        policy: !0
    };
    var Us = function(a) {
        var b = m[gh.ma].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , Vs = function(a) {
        var b = m[gh.ma]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Ws = !1
      , Xs = [];
    function Ys() {
        if (!Ws) {
            Ws = !0;
            for (var a = 0; a < Xs.length; a++)
                I(Xs[a])
        }
    }
    var Zs = function(a) {
        Ws ? I(a) : Xs.push(a)
    };
    var Nt = function(a) {
        if (Mt(a))
            return a;
        this.Ya = a
    };
    Nt.prototype.getUntrustedMessageValue = function() {
        return this.Ya
    }
    ;
    var Mt = function(a) {
        return !a || "object" !== Ac(a) || Cc(a) ? !1 : "getUntrustedMessageValue"in a
    };
    Nt.prototype.getUntrustedMessageValue = Nt.prototype.getUntrustedMessageValue;
    var Ot = 0
      , Pt = {}
      , Qt = []
      , Rt = []
      , St = !1
      , Tt = !1;
    function Ut(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Vt = function(a) {
        return m[gh.ma].push(a)
    }
      , Wt = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return Vt(a)
    }
      , Xt = function(a, b) {
        var c = hh[gh.ma]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = m.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (m.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function Yt(a, b) {
        var c = a._clear || b.overwriteModelFields;
        Ma(a, function(e, f) {
            "_clear" !== e && (c && Sh(e),
            Sh(e, f))
        });
        xh || (xh = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = Ch(),
        a["gtm.uniqueEventId"] = d,
        Sh("gtm.uniqueEventId", d));
        return ys(a)
    }
    function Zt(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Na(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function $t() {
        var a;
        if (Rt.length)
            a = Rt.shift();
        else if (Qt.length)
            a = Qt.shift();
        else
            return;
        var b;
        var c = a;
        if (St || !Zt(c.message))
            b = c;
        else {
            St = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ch());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            Qt.unshift(h, c);
            if (hl && Ve.N) {
                var l;
                if (Ve.Cf) {
                    var n = Ve.N
                      , p = gk().destination[n];
                    l = p && p.context
                } else {
                    var q = Ve.N
                      , r = gk().container[q];
                    l = r && r.context
                }
                var t = l, u, v = oi(m.location.href);
                u = v.hostname + v.pathname;
                var w = t && t.fromContainerExecution
                  , x = t && t.source
                  , y = Ve.N
                  , A = Ve.Xb
                  , B = Ve.Cf;
                Jl || (Jl = u);
                Il.push(y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }
    function au() {
        for (var a = !1, b; !Tt && (b = $t()); ) {
            Tt = !0;
            delete Mh.eventModel;
            Oh();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                Tt = !1;
            else {
                e.fromContainerExecution && Th();
                try {
                    if (Ca(d))
                        try {
                            d.call(Qh)
                        } catch (x) {}
                    else if (Ea(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , l = f.slice(1)
                              , n = Ph(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, l)
                                } catch (x) {}
                        }
                    } else {
                        var p = void 0
                          , q = !1;
                        if (Na(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = Ss[d[0]];
                                    if (r && (!e.fromContainerExecution || !Ts[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && N(101)
                        } else
                            p = d;
                        if (p) {
                            var t = Yt(p, e);
                            a = t || a;
                            q && t && N(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Oh(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Pt[String(u)] || [], w = 0; w < v.length; w++)
                            Rt.push(bu(v[w]));
                        v.length && Rt.sort(Ut);
                        delete Pt[String(u)];
                        u > Ot && (Ot = u)
                    }
                    Tt = !1
                }
            }
        }
        return !a
    }
    function cu() {
        var b = au();
        try {
            Us(Ve.N)
        } catch (c) {}
        return b
    }
    function cs(a) {
        if (Ot < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Pt[b] = Pt[b] || [];
            Pt[b].push(a)
        } else
            Rt.push(bu(a)),
            Rt.sort(Ut),
            I(function() {
                Tt || au()
            })
    }
    function bu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var eu = function() {
        function a(f) {
            var g = {};
            if (Mt(f)) {
                var h = f;
                f = Mt(h) ? h.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = Wb(gh.ma, [])
          , c = hh[gh.ma] = hh[gh.ma] || {};
        !0 === c.pruned && N(83);
        Pt = as().get();
        ds();
        qr(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom",
                f))
            }
        });
        Zs(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load",
                f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (0 < hh.SANDBOXED_JS_SEMAPHORE) {
                f = [];
                for (var g = 0; g < arguments.length; g++)
                    f[g] = new Nt(arguments[g])
            } else
                f = [].slice.call(arguments, 0);
            var h = f.map(function(q) {
                return a(q)
            });
            Qt.push.apply(Qt, h);
            var l = d.apply(b, f)
              , n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (N(4),
                c.pruned = !0; this.length > n; )
                    this.shift();
            var p = "boolean" !== typeof l || l;
            return au() && p
        }
        ;
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        Qt.push.apply(Qt, e);
        if (du()) {
            I(cu)
        }
    }
      , du = function() {
        var a = !0;
        return a
    };
    function fu(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ta();
        return b < c + 3E5 && b > c - 9E5
    }
    function gu(a) {
        return a && 0 === a.indexOf("pending:") ? fu(a.substr(8)) : !1
    }
    ;var Be = {};
    Be.te = new String("undefined");
    var hu = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === Be.te ? b : a[d]);
            return c.join("")
        }
    };
    hu.prototype.toString = function() {
        return this.h("undefined")
    }
    ;
    hu.prototype.valueOf = hu.prototype.toString;
    Be.vj = hu;
    Be.Df = {};
    Be.Gj = function(a) {
        return new hu(a)
    }
    ;
    var iu = {};
    Be.Hk = function(a, b) {
        var c = Ch();
        iu[c] = [a, b];
        return c
    }
    ;
    Be.Sh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = iu[c];
            if (d && "function" === typeof d[b])
                d[b]();
            iu[c] = void 0
        }
    }
    ;
    Be.hk = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            b = b || 8 === a[d],
            c = c || 16 === a[d];
        return b && c
    }
    ;
    Be.Ck = function(a) {
        if (a === Be.te)
            return a;
        var b = Ch();
        Be.Df[b] = a;
        return 'google_tag_manager["' + Ve.N + '"].macro(' + b + ")"
    }
    ;
    Be.uk = function(a, b, c) {
        a instanceof Be.vj && (a = a.h(Be.Hk(b, c)),
        b = Ba);
        return {
            dk: a,
            X: b
        }
    }
    ;
    var ju = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": lc(a, "className"),
            "gtm.elementId": a["for"] || gc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || lc(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || lc(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , ku = function(a) {
        hh.hasOwnProperty("autoEventsSettings") || (hh.autoEventsSettings = {});
        var b = hh.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , lu = function(a, b, c) {
        ku(a)[b] = c
    }
      , mu = function(a, b, c, d) {
        var e = ku(a)
          , f = Ua(e, b, d);
        e[b] = c(f)
    }
      , nu = function(a, b, c) {
        var d = ku(a);
        return Ua(d, b, c)
    }
      , ou = function(a) {
        return "string" === typeof a ? a : String(Ch())
    };
    var Iu = m.clearTimeout
      , Ju = m.setTimeout
      , U = function(a, b, c, d) {
        if (bk()) {
            b && I(b)
        } else
            return ac(a, b, c, d)
    }
      , Ku = function() {
        return new Date
    }
      , Lu = function() {
        return m.location.href
    }
      , Mu = function(a) {
        return mi(oi(a), "fragment")
    }
      , Nu = function(a) {
        return ni(oi(a))
    }
      , Ou = function(a, b) {
        return Ph(a, b || 2)
    }
      , Pu = function(a, b, c) {
        return b ? Wt(a, b, c) : Vt(a)
    }
      , Qu = function(a, b) {
        m[a] = b
    }
      , W = function(a, b, c) {
        b && (void 0 === m[a] || c && !m[a]) && (m[a] = b);
        return m[a]
    }
      , Ru = function(a, b, c) {
        return Ij(a, b, void 0 === c ? !0 : !!c)
    }
      , Su = function(a, b, c) {
        return 0 === Rj(a, b, c)
    }
      , Tu = function(a, b) {
        if (bk()) {
            b && I(b)
        } else
            cc(a, b)
    }
      , Uu = function(a) {
        return !!nu(a, "init", !1)
    }
      , Vu = function(a) {
        lu(a, "init", !0)
    }
      , Wu = function(a, b, c) {
        hl && (Gc(a) || vm(c, b, a))
    };

    var Xu = Be.uk;
    var tv = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function uv(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var vv = new Ka;
    function wv(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = vv.get(e);
            f || (f = new RegExp(b,d),
            vv.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function xv(a, b) {
        function c(g) {
            var h = oi(g)
              , l = mi(h, "protocol")
              , n = mi(h, "host", !0)
              , p = mi(h, "port")
              , q = mi(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p)
                l = "web",
                p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function yv(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function zv(a, b) {
        return String(a) === String(b)
    }
    function Av(a, b) {
        return Number(a) >= Number(b)
    }
    function Bv(a, b) {
        return Number(a) <= Number(b)
    }
    function Cv(a, b) {
        return Number(a) > Number(b)
    }
    function Dv(a, b) {
        return Number(a) < Number(b)
    }
    function Ev(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    function Fv(a) {
        return Gv(a) ? 1 : 0
    }
    function Gv(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Fv(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return yv(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < tv.length; g++) {
                            var h = tv[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                f = !1
            }
            return f;
        case "_ew":
            return uv(b, c);
        case "_eq":
            return zv(b, c);
        case "_ge":
            return Av(b, c);
        case "_gt":
            return Cv(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Bv(b, c);
        case "_lt":
            return Dv(b, c);
        case "_re":
            return wv(b, c, a.ignore_case);
        case "_sw":
            return Ev(b, c);
        case "_um":
            return xv(b, c)
        }
        return !1
    }
    ;function Hv(a, b) {
        var c = this;
    }
    Hv.R = "addConsentListener";
    var Iv;
    var Jv = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Iv)
                try {
                    a[b]()
                } catch (c) {
                    N(77)
                }
            else
                a[b]()
    };
    function Kv(a, b, c) {
        var d = this, e;
        return e
    }
    Kv.P = "internal.addDataLayerEventListener";
    function Lv(a, b, c) {}
    Lv.R = "addDocumentEventListener";
    function Mv(a, b, c, d) {}
    Mv.R = "addElementEventListener";
    function Nv(a) {}
    Nv.R = "addEventCallback";
    function Rv(a) {}
    Rv.P = "internal.addFormAbandonmentListener";
    var Sv = {}
      , Tv = []
      , Uv = {}
      , Vv = 0
      , Wv = 0;
    function cw(a, b) {}
    cw.P = "internal.addFormInteractionListener";
    function jw(a, b) {}
    jw.P = "internal.addFormSubmitListener";
    function ow(a) {}
    ow.P = "internal.addGaSendListener";
    var pw = {}
      , qw = [];
    var xw = function(a, b) {};
    xw.P = "internal.addHistoryChangeListener";
    function yw(a, b, c) {}
    yw.R = "addWindowEventListener";
    function zw(a, b) {
        K(F(this), ["toPath:!string", "fromPath:!string"], arguments);
        M(this, "access_globals", "write", a);
        M(this, "access_globals", "read", b);
        var c = a.split(".")
          , d = b.split(".")
          , e = [m, G]
          , f = ab(c, e)
          , g = ab(d, e);
        if (void 0 === f || void 0 === g)
            return !1;
        f[c[c.length - 1]] = g[d[d.length - 1]];
        return !0
    }
    zw.R = "aliasInWindow";
    function Aw(a, b, c) {}
    Aw.P = "internal.appendRemoteConfigParameter";
    function Bw() {
        var a = 2;
        return a
    }
    ;function Cw(a, b) {
        var c;
        K(F(this), ["path:!string"], [a]);
        M(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = m, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f,
            f = f[d[g]],
            e === m || e === G)
                return;
        if ("function" !== Ac(f))
            return;
        for (var h = Bw(), l = [], n = 1; n < arguments.length; n++)
            l.push(Ec(arguments[n], this.h, h));
        var p = (0,
        this.h.I)(f, e, l);
        c = Dc(p, this.h, h);
        void 0 === c && void 0 !== p && N(45);
        return c
    }
    Cw.R = "callInWindow";
    function Dw(a) {}
    Dw.R = "callLater";
    function Ew(a) {}
    Ew.P = "callOnDomReady";
    function Fw(a) {}
    Fw.P = "callOnWindowLoad";
    function Gw(a) {
        var b;
        return b
    }
    Gw.P = "internal.computeGtmParameter";
    function Hw(a, b) {
        var c;
        K(F(this), ["key:!string", "dataLayerVersion:?number"], arguments),
        M(this, "read_data_layer", a),
        c = 2 !== (b || 2) ? Ph(a, 1) : Rh(a, [m, G]);
        var d = Dc(c, this.h, Bw());
        void 0 === d && void 0 !== c && N(45);
        return d
    }
    Hw.R = "copyFromDataLayer";
    function Iw(a) {
        var b;
        K(F(this), ["path:!string"], arguments);
        M(this, "access_globals", "read", a);
        var c = a.split(".")
          , d = ab(c, [m, G]);
        if (!d)
            return;
        var e = d[c[c.length - 1]];
        b = Dc(e, this.h, Bw());
        void 0 === b && void 0 !== e && N(45);
        return b
    }
    Iw.R = "copyFromWindow";
    function Jw(a, b) {
        var c;
        return c
    }
    Jw.P = "internal.copyPreHit";
    function Kw(a, b) {
        var c = null
          , d = Bw();
        return Dc(c, this.h, d)
    }
    Kw.R = "createArgumentsQueue";
    function Lw(a) {
        var b;
        K(F(this), ["path:!string"], arguments);
        M(this, "access_globals", "readwrite", a);
        var c = a.split(".")
          , d = ab(c, [m, G])
          , e = c[c.length - 1];
        if (void 0 === d)
            throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [],
        d[e] = f);
        b = function() {
            if (!Ca(f.push))
                throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        }
        ;
        return Dc(b, this.h, Bw())
    }
    Lw.R = "createQueue";
    var Mw = {}
      , Nw = []
      , Ow = {}
      , Pw = 0
      , Qw = 0;
    function Ww(a, b) {
        var c = this;
        return b
    }
    Ww.P = "internal.enableAutoEventOnFormInteraction";
    function ax(a, b) {
        var c = this;
        return b
    }
    ax.P = "internal.enableAutoEventOnFormSubmit";
    function fx() {
        var a = this;
    }
    fx.P = "internal.enableAutoEventOnGaSend";
    var gx = {}
      , hx = [];
    function ox(a, b) {
        var c = this;
        return b
    }
    ox.P = "internal.enableAutoEventOnHistoryChange";
    function sx(a, b) {
        var c = this;
        return b
    }
    sx.P = "internal.enableAutoEventOnLinkClick";
    var tx, ux;
    function Dx(a, b) {
        var c = this;
        return b
    }
    Dx.P = "internal.enableAutoEventOnScroll";
    var Sb = da(["data-gtm-yt-inspected-"]), Ex = ["www.youtube.com", "www.youtube-nocookie.com"], Fx, Gx = !1;
    function Qx(a, b) {
        var c = this;
        return b
    }
    Qx.P = "internal.enableAutoEventOnYouTubeActivity";
    function Rx(a, b) {
        var c = !1;
        return c
    }
    Rx.P = "internal.evaluateBooleanExpression";
    var Wx;
    function Xx(a) {
        var b = !1;
        return b
    }
    Xx.P = "internal.evaluateMatchingRules";
    function dy(a, b) {
        var c = !1;
        return c
    }
    dy.P = "internal.evaluatePredicates";
    var ey = function(a) {
        var b;
        return b
    };
    function fy(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    fy.R = "getCookieValues";
    function gy() {
        return Vi.Ee
    }
    gy.P = "internal.getCountryCode";
    function hy() {
        var a = [];
        return Dc(a)
    }
    hy.P = "internal.getDestinationIds";
    function iy(a) {
        var b = null;
        return b
    }
    iy.R = "getElementById";
    var jy = {};
    jy.enableAdsHistoryChangeEvents = R(36);
    jy.enableAlwaysSendFormStart = R(38);
    jy.enableCcdEnhancedMeasurement = R(41);
    jy.enableCcdEventBlocking = R(40);
    jy.enableCcdEventEditingAndCreation = R(26);
    jy.enableCcdGaConversions = R(39);
    jy.enableCcdPreAutoPiiDetection = R(49);
    jy.enableCcdUserData = R(16);
    jy.enableEesPagePath = R(43);
    jy.enableEmFormCcd = R(35);
    jy.enableEuidAutoMode = R(37);
    jy.enableFileDownloadExtensionRegexFullMatch = R(63);
    jy.enableGa4OnoRemarketing = R(34);
    jy.enableSendGtagEventId = R(44);
    jy.autoPiiEligible = !0;
    function ky() {
        return Dc(jy)
    }
    ky.P = "internal.getFlags";
    function ly(a, b) {
        var c;
        return c
    }
    ly.P = "internal.getProductSettingsParameter";
    function my(a, b) {
        var c;
        return c
    }
    my.R = "getQueryParameters";
    function ny(a, b) {
        var c;
        return c
    }
    ny.R = "getReferrerQueryParameters";
    function oy(a) {
        var b = "";
        return b
    }
    oy.R = "getReferrerUrl";
    function py() {
        return Vi.hi
    }
    py.P = "internal.getRegionCode";
    function qy(a, b) {
        var c;
        return c
    }
    qy.P = "internal.getRemoteConfigParameter";
    function ry(a) {
        var b = "";
        return b
    }
    ry.R = "getUrl";
    function sy() {
        M(this, "get_user_agent");
        return m.navigator.userAgent
    }
    sy.R = "getUserAgent";
    function ty(a) {
        if (!a)
            return {};
        var b = a.Nj;
        return sr(b.type, b.index, b.name)
    }
    function uy(a) {
        return a ? {
            originatingEntity: ty(a)
        } : {}
    }
    ;function wy(a, b) {}
    wy.R = "gtagSet";
    function xy(a, b) {}
    xy.R = "injectHiddenIframe";
    var yy = {};
    var zy = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c),
        e[f][1].push(d)) : (e[f] = [[c], [d]],
        ac(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++)
                I(g[h]);
            g.push = function(l) {
                I(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++)
                I(g[h]);
            e[f] = null
        }, b)) : ac(a, c, d, b)
    };
    function Ay(a, b, c, d) {
        if (!bk()) {
            K(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            M(this, "inject_script", a);
            var e = this.h;
            zy(a, void 0, function() {
                b && b.B(e)
            }, function() {
                c && c.B(e)
            }, yy, d)
        }
    }
    var By = Object.freeze({
        dl: 1,
        id: 1
    })
      , Cy = {};
    function Dy(a, b, c, d) {}
    Ay.R = "injectScript";
    Dy.P = "internal.injectScript";
    function Ey(a) {
        var b = !0;
        return b
    }
    Ey.R = "isConsentGranted";
    var Fy = function() {
        var a = $f(function(b) {
            this.h.h.log("error", b)
        });
        a.R = "JSON";
        return a
    };
    var Gy = function() {
        return !1
    }
      , Hy = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    var Iy = ["textContent", "value", "tagName", "children", "childElementCount"];
    function Jy(a) {
        var b;
        return b
    }
    Jy.P = "internal.locateUserData";
    function Ly() {
        try {
            M(this, "logging")
        } catch (c) {
            return
        }
        if (!console)
            return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++)
            a[b] = Ec(a[b], this.h);
        console.log.apply(console, a);
    }
    Ly.R = "logToConsole";
    function My(a) {
        var b = void 0;
        return b
    }
    My.R = "parseUrl";
    function Ny(a) {}
    Ny.P = "internal.processAsNewEvent";
    function Oy(a, b) {
        var c = !1;
        return c
    }
    Oy.R = "queryPermission";
    function Py() {
        var a = "";
        return a
    }
    Py.R = "readCharacterSet";
    function Qy() {
        var a = "";
        return a
    }
    Qy.R = "readTitle";
    function Ry(a, b) {
        var c = this;
    }
    Ry.P = "internal.registerCcdCallback";
    var Sy = Object.freeze(["config", "event", "get", "set"]);
    function Ty(a, b, c) {}
    Ty.P = "internal.registerGtagCommandListener";
    function Uy(a, b) {
        var c = !1;
        return c
    }
    Uy.P = "internal.removeDataLayerEventListener";
    function Vy() {}
    Vy.R = "resetDataLayer";
    function hz() {
        return m.gaGlobal = m.gaGlobal || {}
    }
    var iz = function() {
        var a = hz();
        a.hid = a.hid || Ja();
        return a.hid
    }
      , jz = function(a, b) {
        var c = hz();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Gz = function() {
        var a = !0;
        $k(7) && $k(9) && $k(10) || (a = !1);
        return a
    }
      , Hz = function() {
        var a = !0;
        $k(3) && $k(4) || (a = !1);
        return a
    };
    var jA = window
      , kA = document
      , lA = function(a) {
        var b = jA._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === jA["ga-disable-" + a])
            return !0;
        try {
            var c = jA.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = Cj("AMP_TOKEN", String(kA.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return kA.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    function tA(a) {
        Ma(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.g.Ta] || {};
        Ma(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var CA = function(a, b) {};
    function BA(a, b) {
        var c = function() {};
        return c
    }
    function DA(a, b, c) {}
    ;var EA = function(a, b) {
        var c;
        c = b ? [lq, mq, oq, Zp, cq, qq, dq, pq, jq, $p, tq, eq, nq, Xp, rq, Up] : [Yp, Pp, aq, Qp, Rp, Sp, Tp, fq, gq, iq, kq, bq, hq, Wp, sq];
        for (var d = 0; d < c.length && (c[d](a),
        !a.K); d++)
            ;
    }
      , FA = function(a, b, c, d) {
        var e = new Do(b,c,d);
        e.metadata.hit_type = a;
        e.metadata.speculative = !0;
        e.metadata.event_start_timestamp_ms = Ta();
        return e
    }
      , GA = function(a) {
        var b = a.indexOf("/")
          , c = 3 <= b
          , d = a.substring(3, c ? b : a.length);
        return {
            id: a,
            prefix: "AW",
            V: "AW-" + d,
            M: [d, c ? a.substring(b + 1) : void 0]
        }
    }
      , HA = function(a, b, c, d) {
        function e() {
            for (var q = 0; q < g.length; q++) {
                var r = g[q];
                r.K || (EA(g[q], !0),
                r.metadata.speculative || r.K || Lq(r))
            }
        }
        var f = no(a);
        !f && d.H && (f = GA(a));
        if (f) {
            var g = [];
            if (d.eventMetadata.hit_type_override) {
                var h = d.eventMetadata.hit_type_override;
                Array.isArray(h) || (h = [h]);
                for (var l = 0; l < h.length; l++) {
                    var n = FA(h[l], f, b, d);
                    n.metadata.speculative = !1;
                    g.push(n)
                }
            } else
                b === S.g.Da && g.push(FA("landing_page", f, b, d)),
                g.push(FA("conversion", f, b, d)),
                g.push(FA("user_data_lead", f, b, d)),
                g.push(FA("user_data_web", f, b, d)),
                g.push(FA("remarketing", f, b, d));
            for (var p = 0; p < g.length; p++)
                EA(g[p], !1);
            oj(function() {
                for (var q = [], r = [], t = 0; t < g.length; t++) {
                    var u = g[t];
                    q.push(u.K);
                    r.push(u.metadata.speculative)
                }
                e();
                hj(S.g.J) || pj(function(v) {
                    for (var w = v.consentEventId, x = v.consentPriorityId, y = 0; y < g.length; y++) {
                        var A = g[y];
                        A.metadata.consent_updated = !0;
                        A.metadata.speculative = r[y];
                        A.metadata.event_start_timestamp_ms = Ta();
                        A.K = q[y];
                        A.metadata.consent_event_id = w;
                        A.metadata.consent_priority_id = x
                    }
                    e()
                }, [S.g.J])
            }, [S.g.J])
        }
    };
    var JA = function() {
        var a = hh.floc;
        if (a) {
            var b = a.ts
              , c = a.floc;
            if (b && c && 1E3 > Ta() - b)
                return Promise.resolve(c)
        }
        try {
            return Promise.race([G.interestCohort().then(function(d) {
                hh.floc = {
                    ts: Ta(),
                    floc: d
                };
                return d
            }), new Promise(function(d) {
                m.setTimeout(function() {
                    return d()
                }, IA)
            }
            )]).catch(function() {})
        } catch (d) {}
    }
      , LA = function() {
        if (!m.Promise)
            return !1;
        Ca(G.interestCohort) || KA || (KA = !0,
        zk('A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'));
        return Ca(G.interestCohort)
    }
      , IA = Number("200")
      , KA = !1;
    var MA = function(a, b, c, d, e) {
        if (!b && !a.h && !a.H && Ji(Ii(a.D))) {
            var f = a.O(S.g.ka);
            if (null !== f) {
                var g;
                f && Cc(f) ? g = f : g = Ki(Ii(a.D));
                g && Qq(a.T, g, {
                    Cb: e,
                    vc: c
                }, void 0, d)
            }
        }
    }
      , NA = function(a, b) {}
      , OA = function(a, b) {
        a.Ga("google_gtm_url_processor", function(c) {
            R(6) && a.I && Bm(a.D.eventId, "P", Ta() - a.Ca);
            b && (c = uq(c));
            return c
        })
    }
      , PA = function(a, b) {
        a.Nb("gdpr_consent", Yk());
        a.Nb("gdpr", Zk());
        kj() && a.h && (a.ba("gcs", xj()),
        lj() && a.ba("gcd", "G1" + sj(ij)),
        b && a.ba("gcu", "1"))
    }
      , QA = function(a, b) {
        if (b || yi(a.T)) {
            var c = Ta()
              , d = Ei({
                Ob: !0,
                Pb: !0,
                sg: !0
            });
            if (0 !== d.elements.length) {
                for (var e = [], f = 0; f < d.elements.length; ++f) {
                    var g = d.elements[f];
                    e.push(g.querySelector + "*" + Fi(g) + "*" + g.type)
                }
                a.ba("ec_m", e.join("~"));
                var h = d.Pe;
                h && (a.ba("ec_sel", h.querySelector),
                a.ba("ec_meta", Fi(h)));
                a.ba("ec_lat", String(Ta() - c));
                a.ba("ec_s", d.status)
            }
        }
    }
      , RA = function(a) {
        if (!a.h)
            a.O(S.g.ia) && a.Ga("google_gtag_event_data", {
                items: a.O(S.g.ia)
            });
        else if (a.eventName == S.g.Ja) {
            a.hd({
                google_conversion_merchant_id: a.O(S.g.Nc),
                google_basket_feed_country: a.O(S.g.Lc),
                google_basket_feed_language: a.O(S.g.Mc),
                google_basket_discount: a.O(S.g.Kc),
                google_basket_transaction_type: a.eventName,
                google_disable_merchant_reported_conversions: !0 === a.O(S.g.Kg)
            });
            bk() && a.Ga("google_disable_merchant_reported_conversions", !0);
            var b;
            var c = a.O(S.g.ia);
            if (c) {
                for (var d = [], e = 0; e < c.length; ++e) {
                    var f = c[e];
                    f && d.push({
                        item_id: f.id,
                        quantity: f.quantity,
                        value: f.price,
                        start_date: f.start_date,
                        end_date: f.end_date
                    })
                }
                b = d
            } else
                b = void 0;
            var g = b;
            g && a.Ga("google_conversion_items", g)
        }
    }
      , SA = function(a) {
        var b;
        var c = {};
        a.H ? !a.h && a.eventName && (c.event = a.eventName) : c.event = a.eventName;
        var d = a.D.h;
        if (d) {
            J(d, c);
            for (var e in c)
                c.hasOwnProperty(e) && fh[e.split(".")[0]] && delete c[e];
            b = c
        } else
            b = null;
        var f = b;
        f && a.Ga("google_custom_params", f)
    }
      , TA = function(a) {
        bk() && (a.Ga("opt_image_generator", function() {
            return new Image
        }),
        a.Ga("google_enable_display_cookie_match", !1))
    }
      , UA = function(a) {
        var b = Mi();
        b && a.nd("apcm");
        b || a.nd("capi");
        if (!a.H) {
            var c = Ui();
            0 === c ? a.Nb("dg", "c") : 1 === c && a.Nb("dg", "e")
        }
    }
      , VA = function(a) {
        a.hd({
            onload_callback: function() {
                R(6) && a.I && Bm(a.D.eventId, "C", Ta() - a.Ca);
                a.D.X()
            },
            gtm_onFailure: a.D.W
        })
    }
      , XA = function(a, b, c, d, e) {
        var f = a.O(S.g.Hb)
          , g = a.O(S.g.za) || {}
          , h = a.O(S.g.qb);
        rp({
            Lf: b,
            Rh: f,
            dg: g,
            wg: h
        }, c);
        Co(a.da, a.D);
        var l = {
            Ce: !1,
            vc: d,
            da: a.da,
            eventId: a.D.eventId,
            priorityId: a.D.priorityId,
            Cb: b ? c : void 0,
            zd: b,
            md: ""
        };
        WA ? l.md = void 0 : l.md = e.Uh || "";
        l.Me = e.Ke;
        l.He = e.Ge;
        ko(l)
    }
      , YA = function(a, b) {
        var c = Tq(a, "/pagead/conversion_async.js");
        if (c)
            return c;
        var d = ro("https://", "http://", "www.googleadservices.com")
          , e = !b.H && 1 === Ui();
        if (Qi() || e)
            d = "https://www.google.com";
        return d + "/pagead/conversion_async.js"
    }
      , ZA = !1
      , WA = !1;
    var $A = []
      , aB = !1
      , bB = function(a) {
        var b = m.google_trackConversion
          , c = a.B.gtm_onFailure;
        "function" == typeof b ? b(a.B) || c() : c()
    }
      , cB = function() {
        for (; 0 < $A.length; )
            bB($A.shift())
    }
      , dB = function(a) {
        if (!ZA) {
            ZA = aB = !0;
            Ar();
            var b = function() {
                aB = !1;
                cB();
                $A = {
                    push: bB
                }
            };
            bk() ? b() : ac(a, b, function() {
                cB();
                ZA = !1
            })
        }
    }
      , eB = function(a, b, c) {
        var d = no(a);
        !d && c.H && (d = this.Ak(a));
        this.da = a;
        this.T = d.M[0] || "";
        this.F = d.M[1];
        this.h = void 0 !== this.F;
        this.eventName = b;
        this.H = c.H;
        this.D = c;
        this.B = {
            google_conversion_id: this.T,
            google_conversion_label: this.F,
            google_conversion_format: "3",
            google_conversion_color: "ffffff",
            google_conversion_domain: "",
            google_gtm: nk()
        };
        R(6) && (this.Ca = Ta(),
        this.I = !1)
    };
    aa = eB.prototype;
    aa.Ak = function(a) {
        var b = a.indexOf("/")
          , c = 3 <= b
          , d = a.substring(3, c ? b : a.length);
        return {
            id: a,
            prefix: "AW",
            V: "AW-" + d,
            M: [d, c ? a.substring(b + 1) : void 0]
        }
    }
    ;
    aa.Ga = function(a, b) {
        this.B[a] = b
    }
    ;
    aa.Kk = function() {
        delete this.B.google_transport_url
    }
    ;
    aa.hd = function(a) {
        for (var b in a)
            a.hasOwnProperty(b) && (this.B[b] = a[b])
    }
    ;
    aa.ba = function(a, b) {
        void 0 != b && "" !== b && (this.B.google_additional_conversion_params = this.B.google_additional_conversion_params || {},
        this.B.google_additional_conversion_params[a] = b)
    }
    ;
    aa.Nb = function(a, b) {
        void 0 != b && "" !== b && (this.B.google_additional_params = this.B.google_additional_params || {},
        this.B.google_additional_params[a] = b)
    }
    ;
    aa.nd = function(a) {
        this.B.google_gtm_experiments = this.B.google_gtm_experiments || {};
        this.B.google_gtm_experiments[a] = !0
    }
    ;
    aa.O = function(a) {
        return T(this.D, a)
    }
    ;
    var gB = function(a, b, c, d) {
        function e(D, L) {
            function P() {
                R(6) && (D.I = Am(D.D.eventId, aB ? 1 : 2),
                D.I && Bm(D.D.eventId, "S", Ta() - D.Ca));
                $A.push(D)
            }
            var X = [];
            if (L) {
                l && (R(3) ? D.h && ($m(A),
                D.ba("auid", Xm(n))) : ($m(A, D.h),
                D.Nb("auid", Xm(n))));
                R(9) && fB(D);
                var Q = (g(S.g.Vc) || {})[D.F];
                QA(D, Ni(Q));
                var la = !0 === g(S.g.Jc) || Q;
                if (D.h && la) {
                    var ca = Pi(Q, D.O(S.g.ka));
                    ca && X.push(ca.then(function(V) {
                        D.ba("em", V.Dd);
                        D.ba("ec_mode", V.yc)
                    }))
                }
            }
            if (X.length)
                try {
                    Promise.all(X).then(function() {
                        P()
                    });
                    return
                } catch (V) {}
            P()
        }
        var f = new eB(a,b,d)
          , g = function(D) {
            return T(d, D)
        }
          , h = void 0 != g(S.g.na) && !1 !== g(S.g.na)
          , l = !1 !== g(S.g.ya)
          , n = g(S.g.La) || g(S.g.Za)
          , p = g(S.g.nb)
          , q = g(S.g.Pa)
          , r = g(S.g.ob)
          , t = {};
        if (!WA) {
            var u = cp(d, S.g.ja);
            t.Uh = db(Cc(u) ? u : {})
        }
        var v = cp(d, S.g.ja, 1)
          , w = cp(d, S.g.ja, 2);
        t.Ke = db(Cc(v) ? v : {}, ".");
        t.Ge = db(Cc(w) ? w : {}, ".");
        var x = g(S.g.wa)
          , y = YA(x, f);
        dB(y);
        var A = {
            prefix: n,
            domain: p,
            hb: q,
            flags: r
        }
          , B = b == S.g.Da;
        B && !d.H && XA(f, l, A, h, t);
        if (b !== S.g.Ka || d.H) {
            var C = !1 === g(S.g.kb) || !1 === g(S.g.Fa);
            if (!B || !f.h && !C)
                if (!0 === g(S.g.Vd) && (f.h = !1),
                !1 !== g(S.g.fa) || f.h)
                    f.hd({
                        google_remarketing_only: !f.h,
                        google_conversion_language: f.O(S.g.Qa),
                        google_conversion_value: f.O(S.g.ra),
                        google_conversion_currency: f.O(S.g.va),
                        google_conversion_order_id: f.O(S.g.Ma),
                        google_user_id: f.O(S.g.Aa),
                        google_conversion_page_url: f.O(S.g.Ra),
                        google_conversion_referrer_url: f.O(S.g.Sa)
                    }),
                    VA(f),
                    f.h && f.D.eventMetadata.is_external_event && f.ba("gtm_ee", "1"),
                    UA(f),
                    f.h && f.Ga("google_transport_url", Sq(f.O(S.g.wa), "/")),
                    f.Ga("google_restricted_data_processing", f.O(S.g.zb)),
                    TA(f),
                    !1 === f.O(S.g.fa) && f.Ga("google_allow_ad_personalization_signals", !1),
                    l ? f.hd({
                        google_gcl_cookie_prefix: A.prefix,
                        google_gcl_cookie_domain: A.domain,
                        google_gcl_cookie_max_age_seconds: A.hb,
                        google_gcl_cookie_flags: A.flags
                    }) : f.Ga("google_read_gcl_cookie_opt_out", !0),
                    SA(f),
                    RA(f),
                    "1" === tn(!1)._up && f.ba("gtm_up", "1"),
                    f.h && (f.ba("vdnc", f.O(S.g.mc)),
                    f.ba("vdltv", f.O(S.g.Rc))),
                    PA(f),
                    f.h && (f.ba("delopc", f.O(S.g.oc)),
                    f.ba("oedeld", f.O(S.g.Wc)),
                    f.ba("delc", f.O(S.g.cc)),
                    f.ba("shf", f.O(S.g.Tc)),
                    f.ba("iedeld", Ri(f.O(S.g.ia)))),
                    WA || f.ba("did", t.Uh),
                    f.ba("gdid", t.Ke),
                    f.ba("edid", t.Ge),
                    OA(f, h),
                    NA(f, A),
                    MA(f, B, h, t, A),
                    kj() ? Aj(function() {
                        PA(f);
                        var D = wj(S.g.J);
                        if (f.h)
                            D || x || f.Ga("google_transport_url", "https://pagead2.googlesyndication.com/"),
                            e(f, D);
                        else if (D) {
                            e(f, D);
                            return
                        }
                        D || zj(function() {
                            var L = new eB(a,f.eventName,d);
                            L.h = f.h;
                            L.hd(J(f.B));
                            OA(L, h);
                            !x && L.B.google_transport_url && L.Kk();
                            PA(L, !0);
                            e(L, !0)
                        }, S.g.J)
                    }, [S.g.J]) : e(f, !0)
        } else {
            var E = {};
            E.callback = f.O(S.g.pb);
            var H = f.O(S.g.ab);
            E.xg = H;
            E.gg = f.O(String(H));
            sp(E, A, h, Uo)
        }
    };
    var fB = function(a) {
        wp() && !1 !== a.O(S.g.Ea) && !1 !== a.O(S.g.fa) && !1 !== a.O(S.g.kb) && !1 !== a.O(S.g.Fa) && a.nd("fledge")
    };
    var IB = function(a, b) {
        if (!b.H) {
            var c = T(b, S.g.ab)
              , d = T(b, S.g.pb)
              , e = T(b, c);
            if (void 0 === e) {
                var f = void 0;
                FB.hasOwnProperty(c) ? f = FB[c] : GB.hasOwnProperty(c) && (f = GB[c]);
                1 === f && (f = HB(c));
                k(f) ? Fr()(function() {
                    var g = Fr().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else
                d(e)
        }
    }
      , JB = function(a, b) {
        var c = a[S.g.Yc]
          , d = b + "."
          , e = a[S.g.aa] || ""
          , f = void 0 === c ? !!a.use_anchor : "fragment" === c
          , g = !!a[S.g.kc];
        e = String(e).replace(/\s+/g, "").split(",");
        var h = Fr();
        h(d + "require", "linker");
        h(d + "linker:autoLink", e, f, g)
    }
      , NB = function(a, b, c) {
        if (kj() && (!c.H || !KB[a])) {
            var d = !wj(S.g.Z)
              , e = function(f) {
                var g, h, l = Fr(), n = LB(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.H || MB(b, n.createOnlyFields)) {
                    c.H && (g = "gtm" + Ch(),
                    h = n.createOnlyFields,
                    n.gtmTrackerName && (h.name = g));
                    l(function() {
                        var t = l.getByName(b);
                        t && (p = t.get("clientId"));
                        c.H || l.remove(b)
                    });
                    l("create", a, c.H ? h : n.createOnlyFields);
                    d && wj(S.g.Z) && (d = !1,
                    l(function() {
                        var t = Fr().getByName(c.H ? g : b);
                        !t || t.get("clientId") == p && q || (c.H ? (n.fieldsToSet["&gcu"] = "1",
                        n.fieldsToSet["&gcut"] = dh[f]) : (n.fieldsToSend["&gcu"] = "1",
                        n.fieldsToSend["&gcut"] = dh[f]),
                        t.set(n.fieldsToSet),
                        c.H ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                    }));
                    c.H && l(function() {
                        l.remove(g)
                    })
                }
            };
            zj(function() {
                return e(S.g.Z)
            }, S.g.Z);
            zj(function() {
                return e(S.g.J)
            }, S.g.J);
            c.H && (KB[a] = !0)
        }
    }
      , OB = function(a, b) {
        Uq() && b && (a[S.g.Ib] = b)
    }
      , XB = function(a, b, c) {
        function d() {
            var D = T(c, S.g.Sc);
            h(function() {
                if (!c.H && Cc(D)) {
                    var L = u.fieldsToSend, P = l().getByName(n), X;
                    for (X in D)
                        if (D.hasOwnProperty(X) && /^(dimension|metric)\d+$/.test(X) && void 0 != D[X]) {
                            var ja = P.get(HB(D[X]));
                            PB(L, X, ja)
                        }
                }
            })
        }
        function e() {
            if (u.displayfeatures) {
                var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {
                    cookieName: D
                })
            }
        }
        var f = a
          , g = "https://www.google-analytics.com/analytics.js"
          , h = c.H ? Hr(T(c, "gaFunctionName")) : Hr();
        if (Ca(h)) {
            var l = Fr, n;
            c.H ? n = T(c, "name") || T(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
            var p = function(D) {
                var L = [].slice.call(arguments, 0);
                L[0] = n ? n + "." + L[0] : "" + L[0];
                h.apply(window, L)
            }
              , q = function(D) {
                var L = function(la, ca) {
                    for (var V = 0; ca && V < ca.length; V++)
                        p(la, ca[V])
                }
                  , P = c.H
                  , X = P ? QB(u) : RB(b, c);
                if (X) {
                    var ja = {};
                    OB(ja, D);
                    p("require", "ec", "ec.js", ja);
                    P && X.Mf && p("set", "&cu", X.Mf);
                    var O = X.action;
                    if (P || "impressions" === O)
                        if (L("ec:addImpression", X.Zh),
                        !P)
                            return;
                    if ("promo_click" === O || "promo_view" === O || P && X.Gd) {
                        var Q = X.Gd;
                        L("ec:addPromo", Q);
                        if (Q && 0 < Q.length && "promo_click" === O) {
                            P ? p("ec:setAction", O, X.eb) : p("ec:setAction", O);
                            return
                        }
                        if (!P)
                            return
                    }
                    "promo_view" !== O && "impressions" !== O && (L("ec:addProduct", X.Rb),
                    p("ec:setAction", O, X.eb))
                }
            }
              , r = function(D) {
                if (D) {
                    var L = {};
                    if (Cc(D))
                        for (var P in SB)
                            SB.hasOwnProperty(P) && TB(SB[P], P, D[P], L);
                    OB(L, x);
                    p("require", "linkid", L)
                }
            }
              , t = function() {
                if (bk()) {} else {
                    var D = T(c, S.g.Xi);
                    D && (p("require", D, {
                        dataLayer: gh.ma
                    }),
                    p("require", "render"))
                }
            }
              , u = LB(n, b, c)
              , v = function(D, L, P) {
                P && (L = "" + L);
                u.fieldsToSend[D] = L
            };
            !c.H && MB(n, u.createOnlyFields) && (h(function() {
                l() && l().remove(n)
            }),
            UB[n] = !1);
            h("create", f, u.createOnlyFields);
            if (u.createOnlyFields[S.g.Ib] && !c.H) {
                var w = Tq(u.createOnlyFields[S.g.Ib], "/analytics.js");
                w && (g = w)
            }
            var x = c.H ? u.fieldsToSet[S.g.Ib] : u.createOnlyFields[S.g.Ib];
            if (x) {
                var y = c.H ? u.fieldsToSet[S.g.he] : u.createOnlyFields[S.g.he];
                y && !UB[n] && (UB[n] = !0,
                h(Lr(n, y)))
            }
            c.H ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
            r(u.linkAttribution));
            var A = u[S.g.za];
            A && A[S.g.aa] && JB(A, n);
            p("set", u.fieldsToSet);
            if (c.H) {
                if (u.enableLinkId) {
                    var B = {};
                    OB(B, x);
                    p("require", "linkid", "linkid.js", B)
                }
                kj() && NB(f, n, c)
            }
            if (b === S.g.Ic)
                if (c.H) {
                    e();
                    if (u.remarketingLists) {
                        var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                        p("require", "adfeatures", {
                            cookieName: C
                        })
                    }
                    q(x);
                    p("send", "pageview");
                    u.createOnlyFields._useUp && Ir(n + ".")
                } else
                    t(),
                    p("send", "pageview", u.fieldsToSend);
            else
                b === S.g.Da ? (t(),
                Co(f, c),
                T(c, S.g.qb) && (bo(["aw", "dc"]),
                Ir(n + ".")),
                0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
                NB(f, n, c)) : b === S.g.Ka ? IB(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing",
                v("timingCategory", u.eventCategory, !0),
                c.H ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0),
                v("timingValue", Oa(u.value)),
                void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
                p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.H || ("track_social" === b && c.H ? (u.fieldsToSend.hitType = "social",
                v("socialNetwork", u.socialNetwork, !0),
                v("socialAction", u.socialAction, !0),
                v("socialTarget", u.socialTarget, !0)) : ((c.H || VB[b]) && q(x),
                c.H && e(),
                u.fieldsToSend.hitType = "event",
                v("eventCategory", u.eventCategory, !0),
                v("eventAction", u.eventAction || b, !0),
                void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                void 0 !== u.value && v("eventValue", Oa(u.value))),
                p("send", u.fieldsToSend));
            if (!WB && !c.H) {
                WB = !0;
                Ar();
                var E = function() {
                    c.W()
                }
                  , H = function() {
                    l().loaded || E()
                };
                bk() ? I(H) : ac(g, H, E)
            }
        } else
            I(c.W)
    }
      , YB = function(a, b, c, d) {
        Aj(function() {
            XB(a, b, d)
        }, [S.g.Z, S.g.J])
    }
      , aC = function(a, b) {
        function c(f) {
            function g(n, p) {
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    if (f[r]) {
                        l[n] = f[r];
                        break
                    }
                }
            }
            function h() {
                if (f.category)
                    l.category = f.category;
                else {
                    for (var n = "", p = 0; p < ZB.length; p++)
                        void 0 !== f[ZB[p]] && (n && (n += "/"),
                        n += f[ZB[p]]);
                    n && (l.category = n)
                }
            }
            var l = J(f);
            if ($B || b)
                g("id", ["id", "item_id", "promotion_id"]),
                g("name", ["name", "item_name", "promotion_name"]),
                g("brand", ["brand", "item_brand"]),
                g("variant", ["variant", "item_variant"]),
                g("list", ["list_name", "item_list_name"]),
                g("position", ["list_position", "creative_slot", "index"]),
                h();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return l
        }
        b = void 0 === b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++)
            a[e] && Cc(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }
      , bC = function(a) {
        return wj(a)
    }
      , cC = !1;
    var $B = !1;
    $B = !0;
    var WB, UB = {}, KB = {}, dC = {}, FB = Object.freeze((dC.client_storage = "storage",
    dC.sample_rate = 1,
    dC.site_speed_sample_rate = 1,
    dC.store_gac = 1,
    dC.use_amp_client_id = 1,
    dC[S.g.xb] = 1,
    dC[S.g.ya] = "storeGac",
    dC[S.g.nb] = 1,
    dC[S.g.Pa] = 1,
    dC[S.g.ob] = 1,
    dC[S.g.Qc] = 1,
    dC[S.g.cf] = 1,
    dC[S.g.Hb] = 1,
    dC)), eC = {}, fC = Object.freeze((eC._cs = 1,
    eC._useUp = 1,
    eC.allowAnchor = 1,
    eC.allowLinker = 1,
    eC.alwaysSendReferrer = 1,
    eC.clientId = 1,
    eC.cookieDomain = 1,
    eC.cookieExpires = 1,
    eC.cookieFlags = 1,
    eC.cookieName = 1,
    eC.cookiePath = 1,
    eC.cookieUpdate = 1,
    eC.legacyCookieDomain = 1,
    eC.legacyHistoryImport = 1,
    eC.name = 1,
    eC.sampleRate = 1,
    eC.siteSpeedSampleRate = 1,
    eC.storage = 1,
    eC.storeGac = 1,
    eC.useAmpClientId = 1,
    eC._cd2l = 1,
    eC)), gC = Object.freeze({
        anonymize_ip: 1
    }), hC = {}, GB = Object.freeze((hC.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword"
    },
    hC.app_id = 1,
    hC.app_installer_id = 1,
    hC.app_name = 1,
    hC.app_version = 1,
    hC.description = "exDescription",
    hC.fatal = "exFatal",
    hC.language = 1,
    hC.page_hostname = "hostname",
    hC.transport_type = "transport",
    hC[S.g.va] = "currencyCode",
    hC[S.g.eh] = 1,
    hC[S.g.Ra] = "location",
    hC[S.g.lf] = "page",
    hC[S.g.Sa] = "referrer",
    hC[S.g.nc] = "title",
    hC[S.g.lh] = 1,
    hC[S.g.Aa] = 1,
    hC)), iC = {}, jC = Object.freeze((iC.content_id = 1,
    iC.event_action = 1,
    iC.event_category = 1,
    iC.event_label = 1,
    iC.link_attribution = 1,
    iC.name = 1,
    iC[S.g.za] = 1,
    iC[S.g.dh] = 1,
    iC[S.g.Fa] = 1,
    iC[S.g.ra] = 1,
    iC)), kC = Object.freeze({
        displayfeatures: 1,
        enableLinkId: 1,
        enableRecaptcha: 1,
        eventAction: 1,
        eventCategory: 1,
        eventLabel: 1,
        gaFunctionName: 1,
        gtmEcommerceData: 1,
        gtmTrackerName: 1,
        linker: 1,
        remarketingLists: 1,
        socialAction: 1,
        socialNetwork: 1,
        socialTarget: 1,
        timingVar: 1,
        value: 1
    }), ZB = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]), lC = {}, SB = Object.freeze((lC.levels = 1,
    lC[S.g.Pa] = "duration",
    lC[S.g.Qc] = 1,
    lC)), mC = {}, nC = Object.freeze((mC.anonymize_ip = 1,
    mC.fatal = 1,
    mC.send_page_view = 1,
    mC.store_gac = 1,
    mC.use_amp_client_id = 1,
    mC[S.g.ya] = 1,
    mC[S.g.eh] = 1,
    mC)), TB = function(a, b, c, d) {
        if (void 0 !== c)
            if (nC[b] && (c = Pa(c)),
            "anonymize_ip" !== b || c || (c = void 0),
            1 === a)
                d[HB(b)] = c;
            else if (k(a))
                d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, HB = function(a) {
        return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase()
        }) : a
    }, oC = {}, VB = Object.freeze((oC.checkout_progress = 1,
    oC.select_content = 1,
    oC.set_checkout_option = 1,
    oC[S.g.Ec] = 1,
    oC[S.g.Fc] = 1,
    oC[S.g.Yb] = 1,
    oC[S.g.Gc] = 1,
    oC[S.g.Fb] = 1,
    oC[S.g.Zb] = 1,
    oC[S.g.Gb] = 1,
    oC[S.g.Ja] = 1,
    oC[S.g.Hc] = 1,
    oC[S.g.Oa] = 1,
    oC)), pC = {}, qC = Object.freeze((pC.checkout_progress = 1,
    pC.set_checkout_option = 1,
    pC[S.g.Fg] = 1,
    pC[S.g.Gg] = 1,
    pC[S.g.Ec] = 1,
    pC[S.g.Fc] = 1,
    pC[S.g.Hg] = 1,
    pC[S.g.Yb] = 1,
    pC[S.g.Ja] = 1,
    pC[S.g.Hc] = 1,
    pC[S.g.Ig] = 1,
    pC)), rC = {}, sC = Object.freeze((rC.generate_lead = 1,
    rC.login = 1,
    rC.search = 1,
    rC.select_content = 1,
    rC.share = 1,
    rC.sign_up = 1,
    rC.view_search_results = 1,
    rC[S.g.Gc] = 1,
    rC[S.g.Fb] = 1,
    rC[S.g.Zb] = 1,
    rC[S.g.Gb] = 1,
    rC[S.g.Oa] = 1,
    rC)), tC = function(a) {
        var b = "general";
        qC[a] ? b = "ecommerce" : sC[a] ? b = "engagement" : "exception" === a && (b = "error");
        return b
    }, uC = {}, vC = Object.freeze((uC.view_search_results = 1,
    uC[S.g.Fb] = 1,
    uC[S.g.Gb] = 1,
    uC[S.g.Oa] = 1,
    uC)), PB = function(a, b, c) {
        a.hasOwnProperty(b) || (a[b] = c)
    }, wC = function(a) {
        if (Ea(a)) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                if (void 0 != d) {
                    var e = d.id
                      , f = d.variant;
                    void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                }
            }
            return 0 < b.length ? b.join("!") : void 0
        }
    }, LB = function(a, b, c) {
        var d = function(L) {
            return T(c, L)
        }
          , e = {}
          , f = {}
          , g = {}
          , h = {}
          , l = wC(d(S.g.Wi));
        !c.H && l && PB(f, "exp", l);
        g["&gtm"] = nk(!0);
        kj() && (h._cs = bC);
        var n = d(S.g.Sc);
        if (!c.H && Cc(n))
            for (var p in n)
                if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                    var q = d(String(n[p]));
                    void 0 !== q && PB(f, p, q)
                }
        for (var r = bp(c), t = 0; t < r.length; ++t) {
            var u = r[t];
            if (c.H) {
                var v = d(u);
                kC.hasOwnProperty(u) ? e[u] = v : fC.hasOwnProperty(u) ? h[u] = v : g[u] = v
            } else {
                var w = void 0;
                w = u !== S.g.ja ? d(u) : cp(c, u);
                if (jC.hasOwnProperty(u))
                    TB(jC[u], u, w, e);
                else if (gC.hasOwnProperty(u))
                    TB(gC[u], u, w, g);
                else if (GB.hasOwnProperty(u))
                    TB(GB[u], u, w, f);
                else if (FB.hasOwnProperty(u))
                    TB(FB[u], u, w, h);
                else if (/^(dimension|metric|content_group)\d+$/.test(u))
                    TB(1, u, w, f);
                else if (u === S.g.ja) {
                    if (!cC) {
                        var x = db(w);
                        x && (f["&did"] = x)
                    }
                    var y = void 0
                      , A = void 0;
                    b === S.g.Da ? y = db(cp(c, u), ".") : (y = db(cp(c, u, 1), "."),
                    A = db(cp(c, u, 2), "."));
                    y && (f["&gdid"] = y);
                    A && (f["&edid"] = A)
                } else
                    u === S.g.Za && 0 > r.indexOf(S.g.Qc) && (h.cookieName = w + "_ga")
            }
        }
        !1 !== d(S.g.Mi) && !1 !== d(S.g.bc) && Gz() || (g.allowAdFeatures = !1);
        !1 !== d(S.g.fa) && Hz() || (g.allowAdPersonalizationSignals = !1);
        !c.H && d(S.g.qb) && (h._useUp = !0);
        if (c.H) {
            h.name = h.name || e.gtmTrackerName;
            var B = g.hitCallback;
            g.hitCallback = function() {
                Ca(B) && B();
                c.X()
            }
        } else {
            PB(h, "cookieDomain", "auto");
            PB(g, "forceSSL", !0);
            PB(e, "eventCategory", tC(b));
            vC[b] && PB(f, "nonInteraction", !0);
            "login" === b || "sign_up" === b || "share" === b ? PB(e, "eventLabel", d(S.g.dh)) : "search" === b || "view_search_results" === b ? PB(e, "eventLabel", d(S.g.dj)) : "select_content" === b && PB(e, "eventLabel", d(S.g.Pi));
            var C = e[S.g.za] || {}
              , E = C[S.g.jc];
            E || 0 != E && C[S.g.aa] ? h.allowLinker = !0 : !1 === E && PB(h, "useAmpClientId", !1);
            f.hitCallback = c.X;
            h.name = a
        }
        kj() && (g["&gcs"] = xj(),
        wj(S.g.Z) || (h.storage = "none"),
        wj(S.g.J) || (g.allowAdFeatures = !1,
        h.storeGac = !1));
        var H = d(S.g.wa) || d(S.g.Ib)
          , D = d(S.g.he);
        H && (c.H || (h[S.g.Ib] = H),
        h._cd2l = !0);
        D && !c.H && (h[S.g.he] = D);
        e.fieldsToSend = f;
        e.fieldsToSet = g;
        e.createOnlyFields = h;
        return e
    }, QB = function(a) {
        var b = a.gtmEcommerceData;
        if (!b)
            return null;
        var c = {};
        b.currencyCode && (c.Mf = b.currencyCode);
        if (b.impressions) {
            c.action = "impressions";
            var d = b.impressions;
            c.Zh = "impressions" === b.translateIfKeyEquals ? aC(d, !0) : d
        }
        if (b.promoView) {
            c.action = "promo_view";
            var e = b.promoView.promotions;
            c.Gd = "promoView" === b.translateIfKeyEquals ? aC(e, !0) : e
        }
        if (b.promoClick) {
            c.action = "promo_click";
            var f = b.promoClick.promotions;
            c.Gd = "promoClick" === b.translateIfKeyEquals ? aC(f, !0) : f;
            c.eb = b.promoClick.actionField;
            return c
        }
        for (var g in b)
            if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var h = b[g].products;
                c.Rb = "products" === b.translateIfKeyEquals ? aC(h, !0) : h;
                c.eb = b[g].actionField;
                break
            }
        return Object.keys(c).length ? c : null
    }, RB = function(a, b) {
        function c(v) {
            return {
                id: d(S.g.Ma),
                affiliation: d(S.g.Ti),
                revenue: d(S.g.ra),
                tax: d(S.g.Pg),
                shipping: d(S.g.Tc),
                coupon: d(S.g.Ui),
                list: e() || v
            }
        }
        for (var d = function(v) {
            return T(b, v)
        }, e = function() {
            var v;
            $B && (v = d(S.g.Ng));
            return d(S.g.Og) || v
        }, f = d(S.g.ia), g, h = 0; f && h < f.length && (g = f[h][S.g.Og],
        !g && $B && (g = f[h][S.g.Ng]),
        !g); h++)
            ;
        var l = d(S.g.Sc);
        if (Cc(l))
            for (var n = 0; f && n < f.length; ++n) {
                var p = f[n], q;
                for (q in l)
                    l.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q) && void 0 != l[q] && PB(p, q, p[l[q]])
            }
        var r = null
          , t = d(S.g.Vi);
        if (a === S.g.Ja || a === S.g.Hc)
            r = {
                action: a,
                eb: c(),
                Rb: aC(f)
            };
        else if (a === S.g.Ec)
            r = {
                action: "add",
                eb: c(),
                Rb: aC(f)
            };
        else if (a === S.g.Fc)
            r = {
                action: "remove",
                eb: c(),
                Rb: aC(f)
            };
        else if (a === S.g.Oa)
            r = {
                action: "detail",
                eb: c(g),
                Rb: aC(f)
            };
        else if (a === S.g.Fb)
            r = {
                action: "impressions",
                Zh: aC(f)
            };
        else if (a === S.g.Gb)
            r = {
                action: "promo_view",
                Gd: $B ? aC(t) || aC(f) : aC(t)
            };
        else if ("select_content" === a && t && 0 < t.length || $B && a === S.g.Zb)
            r = {
                action: "promo_click",
                Gd: $B ? aC(t) || aC(f) : aC(t)
            };
        else if ("select_content" === a || $B && a === S.g.Gc)
            r = {
                action: "click",
                eb: {
                    list: e() || g
                },
                Rb: aC(f)
            };
        else if (a === S.g.Yb || "checkout_progress" === a) {
            var u = {
                step: a === S.g.Yb ? 1 : d(S.g.Mg),
                option: d(S.g.Lg)
            };
            r = {
                action: "checkout",
                Rb: aC(f),
                eb: J(c(), u)
            }
        } else
            "set_checkout_option" === a && (r = {
                action: "checkout_option",
                eb: {
                    step: d(S.g.Mg),
                    option: d(S.g.Lg)
                }
            });
        r && (r.Mf = d(S.g.va));
        return r
    }, xC = {}, MB = function(a, b) {
        var c = xC[a];
        xC[a] = J(b);
        if (!c)
            return !1;
        for (var d in b)
            if (b.hasOwnProperty(d) && b[d] !== c[d])
                return !0;
        for (var e in c)
            if (c.hasOwnProperty(e) && c[e] !== b[e])
                return !0;
        return !1
    };
    var yC = BA;
    var zC = function(a, b, c) {
        for (var d = 0; d < b.length; d++)
            a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };
    function AC(a, b, c, d) {}
    AC.P = "internal.sendGtagEvent";
    function BC(a, b, c) {}
    BC.R = "sendPixel";
    function CC(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    CC.R = "setCookie";
    function DC(a) {
        K(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Lb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e === S.g.We || R(17) && e === S.g.Xe || M(this, "access_consent", e, "write")
        }
        var f = this.h.h
          , g = f.eventId
          , h = uy(f)
          , l = Wr("consent", "default", Ec(a));
        bs(l, g, h)
    }
    DC.R = "setDefaultConsentState";
    function EC(a, b, c) {
        K(F(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        M(this, "access_globals", "readwrite", a);
        var d = a.split(".")
          , e = ab(d, [m, G])
          , f = d.pop();
        if (e && (void 0 === e[f] || c))
            return e[f] = Ec(b, this.h, Bw()),
            !0;
        return !1
    }
    EC.R = "setInWindow";
    function FC(a, b, c) {}
    FC.P = "internal.setProductSettingsParameter";
    function GC(a, b, c) {}
    GC.P = "internal.setRemoteConfigParameter";
    function HC(a, b, c, d) {
        var e = this;
    }
    HC.R = "sha256";
    function IC(a, b, c) {}
    IC.P = "internal.sortRemoteConfigParameters";
    var JC = {}
      , KC = {};
    JC.R = "templateStorage";
    JC.getItem = function(a) {
        var b = null;
        return b
    }
    ;
    JC.setItem = function(a, b) {}
    ;
    JC.removeItem = function(a) {}
    ;
    JC.clear = function() {}
    ;
    var LC = function(a) {
        var b;
        return b
    };
    function MC(a) {
        K(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Ec(a), c;
        for (c in b)
            b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
        var d = this.h.h;
        bs(Wr("consent", "update", b), d.eventId, uy(d))
    }
    MC.R = "updateConsentState";
    var NC = function() {
        var a = new jg
          , b = function(d) {
            var e = d.P;
            if (a.B.hasOwnProperty(e))
                throw "Attempting to add a private function which already exists: " + e + ".";
            if (a.h.hasOwnProperty(e))
                throw "Attempting to add a private function with an existing API name: " + e + ".";
            a.B[e] = Ca(d) ? Kf(e, d) : Lf(e, d)
        }
          , c = function(d) {
            return a.add(d.R, d)
        };
        c(Hv);
        c(Nv);
        c(zw);
        c(Cw);
        c(Dw);
        c(Hw);
        c(Iw);
        c(Kw);
        c(Fy());
        c(Lw);
        c(fy);
        c(my);
        c(ny);
        c(oy);
        c(ry);
        c(wy);
        c(xy);
        c(Ay);
        c(Ey);
        c(Ly);
        c(My);
        c(Oy);
        c(Py);
        c(Qy);
        c(BC);
        c(CC);
        c(DC);
        c(EC);
        c(HC);
        c(JC);
        c(MC);
        a.add("Math", Qf());
        a.add("Object", hg);
        a.add("TestHelper", lg());
        a.add("assertApi", Mf);
        a.add("assertThat", Nf);
        a.add("decodeUri", Rf);
        a.add("decodeUriComponent", Sf);
        a.add("encodeUri", Tf);
        a.add("encodeUriComponent", Uf);
        a.add("fail", Vf);
        a.add("generateRandom", Wf);
        a.add("getContainerVersion", Xf);
        a.add("getTimestamp", Yf);
        a.add("getTimestampMillis", Yf);
        a.add("getType", Zf);
        a.add("makeInteger", ag);
        a.add("makeNumber", bg);
        a.add("makeString", cg);
        a.add("makeTableMap", dg);
        a.add("mock", gg);
        a.add("fromBase64", ey, !("atob"in m));
        a.add("localStorage", Hy, !Gy());
        a.add("toBase64", LC, !("btoa"in m));
        b(Kv);
        b(cw);
        b(jw);
        b(ow);
        b(xw);
        b(Aw);
        b(Fw);
        b(Jw);
        b(Ww);
        b(ax);
        b(fx);
        b(ox);
        b(sx);
        b(Dx);
        b(Qx);
        b(Rx);
        b(Xx);
        b(gy);
        b(hy);
        b(ky);
        b(ly);
        b(py);
        b(qy);
        b(Dy);
        b(Jy);
        b(Ny);
        b(Ry);
        b(Ty);
        b(Uy);
        b(AC);
        b(FC);
        b(GC);
        b(IC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d))
                e = a.get(d, this);
            else {
                var f;
                if (f = a.B.hasOwnProperty(d)) {
                    var g = !1
                      , h = this.h.h;
                    if (h) {
                        var l = h.vd();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f = g
                }
                if (f) {
                    var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                    e = n
                } else
                    throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var OC = function() {
        return !1
    }
      , PC = function() {
        var a = {};
        return function(b, c, d) {}
    };
    var QC;
    function RC() {
        var a = QC;
        return function(b, c, d) {
            var e = d && d.event;
            SC(c);
            var f = new jb;
            Ma(c, function(q, r) {
                var t = Dc(r);
                void 0 === t && void 0 !== r && N(44);
                f.set(q, t)
            });
            a.h.h.F = Ne();
            var g = {
                Dj: $e(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ze: void 0 !== e ? function(q) {
                    return e.Bb.ze(q)
                }
                : void 0,
                vd: function() {
                    return b
                },
                log: function() {},
                Nj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (OC()) {
                var h = PC()
                  , l = void 0
                  , n = void 0;
                g.Wa = {
                    ug: [],
                    jd: {},
                    fb: function(q, r, t) {
                        1 === r && (l = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    fg: eg()
                };
                g.log = function(q, r) {
                    if (l) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = Vd(a, g, [b, f]);
            a.h.h.F = void 0;
            p instanceof qa && "return" === p.h && (p = p.B);
            return Ec(p)
        }
    }
    function SC(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ca(b) && (a.gtmOnSuccess = function() {
            I(b)
        }
        );
        Ca(c) && (a.gtmOnFailure = function() {
            I(c)
        }
        )
    }
    function TC() {
        QC.h.h.I = function(a, b, c) {
            hh.SANDBOXED_JS_SEMAPHORE = hh.SANDBOXED_JS_SEMAPHORE || 0;
            hh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                hh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function UC(a) {
        void 0 !== a && Ma(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Ah[e] = Ah[e] || [];
                Ah[e].push(b)
            }
        })
    }
    ;var VC = encodeURI
      , Y = encodeURIComponent
      , WC = function(a, b, c) {
        dc(a, b, c)
    }
      , XC = function(a, b) {
        if (!a)
            return !1;
        var c = mi(oi(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , YC = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Z = {
        m: {}
    };

    Z.m.jsm = ["customScripts"],
    function() {
        (function(a) {
            Z.__jsm = a;
            Z.__jsm.o = "jsm";
            Z.__jsm.isVendorTemplate = !0;
            Z.__jsm.priorityOverride = 0;
            Z.__jsm.isInfrastructure = !1
        }
        )(function(a) {
            if (void 0 !== a.vtp_javascript) {
                var b = a.vtp_javascript;
                try {
                    var c = W("google_tag_manager");
                    var d = c && c.e && c.e(b);
                    Wu(d, "jsm", a.vtp_gtmEventId);
                    return d
                } catch (e) {}
            }
        })
    }();
    Z.m.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.o = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !1
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.m.f = ["google"],
    function() {
        (function(a) {
            Z.__f = a;
            Z.__f.o = "f";
            Z.__f.isVendorTemplate = !0;
            Z.__f.priorityOverride = 0;
            Z.__f.isInfrastructure = !1
        }
        )(function(a) {
            var b = Ou("gtm.referrer", 1) || G.referrer;
            return b ? a.vtp_component && "URL" != a.vtp_component ? mi(oi(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Nu(String(b)) : String(b)
        })
    }();
    Z.m.cl = ["google"],
    function() {
        function a(b) {
            var c = b.target;
            if (c) {
                var d = ju(c, "gtm.click");
                Pu(d)
            }
        }
        (function(b) {
            Z.__cl = b;
            Z.__cl.o = "cl";
            Z.__cl.isVendorTemplate = !0;
            Z.__cl.priorityOverride = 0;
            Z.__cl.isInfrastructure = !1
        }
        )(function(b) {
            if (!Uu("cl")) {
                var c = W("document");
                ec(c, "click", a, !0);
                Vu("cl")
            }
            I(b.vtp_gtmOnSuccess)
        })
    }();
    Z.m.j = ["google"],
    function() {
        (function(a) {
            Z.__j = a;
            Z.__j.o = "j";
            Z.__j.isVendorTemplate = !0;
            Z.__j.priorityOverride = 0;
            Z.__j.isInfrastructure = !1
        }
        )(function(a) {
            for (var b = String(a.vtp_name).split("."), c = W(b.shift()), d = 0; d < b.length; d++)
                c = c && c[b[d]];
            Wu(c, "j", a.vtp_gtmEventId);
            return c
        })
    }();
    Z.m.access_globals = ["google"],
    function() {
        function a(b, c, d) {
            var e = {
                key: d,
                read: !1,
                write: !1,
                execute: !1
            };
            switch (c) {
            case "read":
                e.read = !0;
                break;
            case "write":
                e.write = !0;
                break;
            case "readwrite":
                e.read = e.write = !0;
                break;
            case "execute":
                e.execute = !0;
                break;
            default:
                throw Error("Invalid " + b + " request " + c);
            }
            return e
        }
        (function(b) {
            Z.__access_globals = b;
            Z.__access_globals.o = "access_globals";
            Z.__access_globals.isVendorTemplate = !0;
            Z.__access_globals.priorityOverride = 0;
            Z.__access_globals.isInfrastructure = !1
        }
        )(function(b) {
            for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                var l = c[h]
                  , n = l.key;
                l.read && e.push(n);
                l.write && f.push(n);
                l.execute && g.push(n)
            }
            return {
                assert: function(p, q, r) {
                    if (!k(r))
                        throw d(p, {}, "Key must be a string.");
                    if ("read" === q) {
                        if (-1 < e.indexOf(r))
                            return
                    } else if ("write" === q) {
                        if (-1 < f.indexOf(r))
                            return
                    } else if ("readwrite" === q) {
                        if (-1 < f.indexOf(r) && -1 < e.indexOf(r))
                            return
                    } else if ("execute" === q) {
                        if (-1 < g.indexOf(r))
                            return
                    } else
                        throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                    throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                },
                ca: a
            }
        })
    }();
    Z.m.u = ["google"],
    function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        (function(b) {
            Z.__u = b;
            Z.__u.o = "u";
            Z.__u.isVendorTemplate = !0;
            Z.__u.priorityOverride = 0;
            Z.__u.isInfrastructure = !1
        }
        )(function(b) {
            var c;
            c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ou("gtm.url", 1)) || Lu();
            var d = b[a("vtp_component")];
            if (!d || "URL" == d)
                return Nu(String(c));
            var e = oi(String(c)), f;
            if ("QUERY" === d)
                a: {
                    var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "", l = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
                    g ? Ea(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = mi(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
            else
                f = mi(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
            return f
        })
    }();
    Z.m.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.o = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = Ou(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            Wu(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.m.gclidw = ["google"],
    function() {
        var a = ["aw", "dc", "gf", "ha", "gb"];
        (function(b) {
            Z.__gclidw = b;
            Z.__gclidw.o = "gclidw";
            Z.__gclidw.isVendorTemplate = !0;
            Z.__gclidw.priorityOverride = 100;
            Z.__gclidw.isInfrastructure = !1
        }
        )(function(b) {
            I(b.vtp_gtmOnSuccess);
            var c, d, e, f;
            b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix,
            c = b.vtp_path,
            d = b.vtp_domain,
            f = b.vtp_cookieFlags);
            var g = {
                prefix: e,
                path: c,
                domain: d,
                flags: f
            };
            b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain || Bn()) && Xn(a, g));
            Un(g);
            $n(["aw", "dc"], g);
            Yo(g);
            var h = e;
            if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                Zn(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
            }
            var n = Ou(S.g.na);
            ko({
                eventId: b.vtp_gtmEventId,
                priorityId: b.vtp_gtmPriorityId,
                Ce: !1,
                vc: void 0 != n && !1 !== n,
                Cb: g,
                zd: !0
            });
            b.vtp_enableUrlPassthrough && bo(["aw", "dc", "gb"])
        })
    }();
    Z.m.aev = ["google"],
    function() {
        function a(r, t, u, v, w) {
            w || (w = "element");
            var x = t + "." + u, y;
            if (n.hasOwnProperty(x))
                y = n[x];
            else {
                var A = r[w];
                if (A && (y = v(A),
                n[x] = y,
                p.push(x),
                35 < p.length)) {
                    var B = p.shift();
                    delete n[B]
                }
            }
            return y
        }
        function b(r, t, u) {
            var v = r[q[t]];
            return void 0 !== v ? v : u
        }
        function c(r, t) {
            if (!r)
                return !1;
            var u = d(Lu());
            Ea(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
            for (var v = [u], w = 0; w < t.length; w++) {
                var x = t[w];
                if (x.hasOwnProperty("is_regex"))
                    if (x.is_regex)
                        try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        }
                    else
                        x = x.domain;
                var y = d(r);
                if (x instanceof RegExp) {
                    if (x.test(y))
                        return !1
                } else {
                    var A = x;
                    if (0 != A.length) {
                        if (0 <= y.indexOf(A))
                            return !1;
                        v.push(d(A))
                    }
                }
            }
            return !XC(r, v)
        }
        function d(r) {
            l.test(r) || (r = "http://" + r);
            return mi(oi(r), "HOST", !0)
        }
        function e(r, t, u, v) {
            switch (r) {
            case "SUBMIT_TEXT":
                return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
            case "LENGTH":
                var w = a(t, u, "FORM." + r, g);
                return void 0 === w ? v : w;
            case "INTERACTED_FIELD_ID":
                return h(t, "id", v);
            case "INTERACTED_FIELD_NAME":
                return h(t, "name", v);
            case "INTERACTED_FIELD_TYPE":
                return h(t, "type", v);
            case "INTERACTED_FIELD_POSITION":
                var x = t.interactedFormFieldPosition;
                return void 0 === x ? v : x;
            case "INTERACT_SEQUENCE_NUMBER":
                var y = t.interactSequenceNumber;
                return void 0 === y ? v : y;
            default:
                return v
            }
        }
        function f(r) {
            switch (r.tagName.toLowerCase()) {
            case "input":
                return gc(r, "value");
            case "button":
                return hc(r);
            default:
                return null
            }
        }
        function g(r) {
            if ("form" === r.tagName.toLowerCase() && r.elements) {
                for (var t = 0, u = 0; u < r.elements.length; u++)
                    ru(r.elements[u]) && t++;
                return t
            }
        }
        function h(r, t, u) {
            var v = r.interactedFormField;
            return v && gc(v, t) || u
        }
        var l = /^https?:\/\//i
          , n = {}
          , p = []
          , q = {
            ATTRIBUTE: "elementAttribute",
            CLASSES: "elementClasses",
            ELEMENT: "element",
            ID: "elementId",
            HISTORY_CHANGE_SOURCE: "historyChangeSource",
            HISTORY_NEW_STATE: "newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
            HISTORY_OLD_STATE: "oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
            TARGET: "elementTarget"
        };
        (function(r) {
            Z.__aev = r;
            Z.__aev.o = "aev";
            Z.__aev.isVendorTemplate = !0;
            Z.__aev.priorityOverride = 0;
            Z.__aev.isInfrastructure = !1
        }
        )(function(r) {
            var t = r.vtp_gtmEventId
              , u = r.vtp_defaultValue
              , v = r.vtp_varType
              , w = r.vtp_gtmCachedValues.gtm;
            switch (v) {
            case "TAG_NAME":
                var x = w.element;
                return x && x.tagName || u;
            case "TEXT":
                return a(w, t, v, hc) || u;
            case "URL":
                var y;
                a: {
                    var A = String(w.elementUrl || u || "")
                      , B = oi(A)
                      , C = String(r.vtp_component || "URL");
                    switch (C) {
                    case "URL":
                        y = A;
                        break a;
                    case "IS_OUTBOUND":
                        y = c(A, r.vtp_affiliatedDomains);
                        break a;
                    default:
                        y = mi(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                    }
                }
                return y;
            case "ATTRIBUTE":
                var E;
                if (void 0 === r.vtp_attribute)
                    E = b(w, v, u);
                else {
                    var H = w.element;
                    E = H && gc(H, r.vtp_attribute) || u || ""
                }
                return E;
            case "MD":
                var D = r.vtp_mdValue
                  , L = a(w, t, "MD", Du);
                return D && L ? Gu(L, D) || u : L || u;
            case "FORM":
                return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
            default:
                var P = b(w, v, u);
                Wu(P, "aev", r.vtp_gtmEventId);
                return P
            }
        })
    }();
    Z.m.read_data_layer = ["google"],
    function() {
        function a(b, c) {
            return {
                key: c
            }
        }
        (function(b) {
            Z.__read_data_layer = b;
            Z.__read_data_layer.o = "read_data_layer";
            Z.__read_data_layer.isVendorTemplate = !0;
            Z.__read_data_layer.priorityOverride = 0;
            Z.__read_data_layer.isInfrastructure = !1
        }
        )(function(b) {
            var c = b.vtp_keyPatterns || []
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!k(f))
                        throw d(e, {}, "Keys must be strings.");
                    try {
                        if (vf(f, c))
                            return
                    } catch (g) {
                        throw d(e, {}, "Invalid key filter.");
                    }
                    throw d(e, {}, "Prohibited read from data layer variable: " + f + ".");
                },
                ca: a
            }
        })
    }();
    Z.m.hl = ["google"],
    function() {
        function a(f) {
            return f.target && f.target.location && f.target.location.href ? f.target.location.href : Lu()
        }
        function b(f, g) {
            ec(f, "hashchange", function(h) {
                var l = a(h);
                g({
                    source: "hashchange",
                    state: null,
                    url: Nu(l),
                    U: Mu(l)
                })
            })
        }
        function c(f, g) {
            ec(f, "popstate", function(h) {
                var l = a(h);
                g({
                    source: "popstate",
                    state: h.state,
                    url: Nu(l),
                    U: Mu(l)
                })
            })
        }
        function d(f, g, h) {
            var l = g.history
              , n = l[f];
            if (Ca(n))
                try {
                    l[f] = function(p, q, r) {
                        n.apply(l, [].slice.call(arguments, 0));
                        h({
                            source: f,
                            state: p,
                            url: Nu(Lu()),
                            U: Mu(Lu())
                        })
                    }
                } catch (p) {}
        }
        function e() {
            var f = {
                source: null,
                state: W("history").state || null,
                url: Nu(Lu()),
                U: Mu(Lu())
            };
            return function(g) {
                var h = f
                  , l = {};
                l[h.source] = !0;
                l[g.source] = !0;
                if (!l.popstate || !l.hashchange || h.U != g.U) {
                    var n = {
                        event: "gtm.historyChange",
                        "gtm.historyChangeSource": g.source,
                        "gtm.oldUrlFragment": f.U,
                        "gtm.newUrlFragment": g.U,
                        "gtm.oldHistoryState": f.state,
                        "gtm.newHistoryState": g.state,
                        "gtm.oldUrl": f.url,
                        "gtm.newUrl": g.url
                    };
                    f = g;
                    Pu(n)
                }
            }
        }
        (function(f) {
            Z.__hl = f;
            Z.__hl.o = "hl";
            Z.__hl.isVendorTemplate = !0;
            Z.__hl.priorityOverride = 0;
            Z.__hl.isInfrastructure = !1
        }
        )(function(f) {
            var g = W("self");
            if (!Uu("hl")) {
                var h = e();
                b(g, h);
                c(g, h);
                d("pushState", g, h);
                d("replaceState", g, h);
                Vu("hl")
            }
            I(f.vtp_gtmOnSuccess)
        })
    }();

    Z.m.lcl = [],
    function() {
        function a() {
            var c = W("document")
              , d = 0
              , e = function(f) {
                var g = f.target;
                if (g && 3 !== f.which && !(f.Xf || f.timeStamp && f.timeStamp === d)) {
                    d = f.timeStamp;
                    g = jc(g, ["a", "area"], 100);
                    if (!g)
                        return f.returnValue;
                    var h = f.defaultPrevented || !1 === f.returnValue, l = nu("lcl", h ? "nv.mwt" : "mwt", 0), n;
                    n = h ? nu("lcl", "nv.ids", []) : nu("lcl", "ids", []);
                    if (n.length) {
                        var p = ju(g, "gtm.linkClick", n);
                        if (b(f, g, c) && !h && l && g.href) {
                            var q = !!Ha(String(lc(g, "rel") || "").split(" "), function(v) {
                                return "noreferrer" === v.toLowerCase()
                            })
                              , r = W((lc(g, "target") || "_self").substring(1))
                              , t = !0
                              , u = Xt(function() {
                                var v;
                                if (v = t && r) {
                                    var w;
                                    a: if (q) {
                                        var x;
                                        try {
                                            x = new MouseEvent(f.type,{
                                                bubbles: !0
                                            })
                                        } catch (y) {
                                            if (!c.createEvent) {
                                                w = !1;
                                                break a
                                            }
                                            x = c.createEvent("MouseEvents");
                                            x.initEvent(f.type, !0, !0)
                                        }
                                        x.Xf = !0;
                                        f.target.dispatchEvent(x);
                                        w = !0
                                    } else
                                        w = !1;
                                    v = !w
                                }
                                v && (r.location.href = lc(g, "href"))
                            }, l);
                            if (Pu(p, u, l))
                                t = !1;
                            else
                                return f.preventDefault && f.preventDefault(),
                                f.returnValue = !1
                        } else
                            Pu(p, function() {}, l || 2E3);
                        return !0
                    }
                }
            };
            ec(c, "click", e, !1);
            ec(c, "auxclick", e, !1)
        }
        function b(c, d, e) {
            if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
                return !1;
            var f = lc(d, "href")
              , g = f.indexOf("#")
              , h = lc(d, "target");
            if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g)
                return !1;
            if (0 < g) {
                var l = Nu(f)
                  , n = Nu(e.location);
                return l !== n
            }
            return !0
        }
        (function(c) {
            Z.__lcl = c;
            Z.__lcl.o = "lcl";
            Z.__lcl.isVendorTemplate = !0;
            Z.__lcl.priorityOverride = 0;
            Z.__lcl.isInfrastructure = !1
        }
        )(function(c) {
            var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags
              , e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation
              , f = Number(c.vtp_waitForTagsTimeout);
            if (!f || 0 >= f)
                f = 2E3;
            var g = c.vtp_uniqueTriggerId || "0";
            if (d) {
                var h = function(n) {
                    return Math.max(f, n)
                };
                mu("lcl", "mwt", h, 0);
                e || mu("lcl", "nv.mwt", h, 0)
            }
            var l = function(n) {
                n.push(g);
                return n
            };
            mu("lcl", "ids", l, []);
            e || mu("lcl", "nv.ids", l, []);
            Uu("lcl") || (a(),
            Vu("lcl"));
            I(c.vtp_gtmOnSuccess)
        })
    }();

    Z.m.gaawc = ["google"],
    function() {
        (function(a) {
            Z.__gaawc = a;
            Z.__gaawc.o = "gaawc";
            Z.__gaawc.isVendorTemplate = !0;
            Z.__gaawc.priorityOverride = 10;
            Z.__gaawc.isInfrastructure = !1
        }
        )(function(a) {
            var b = String(a.vtp_measurementId);
            if (!k(b) || 0 >= b.indexOf("-"))
                I(a.vtp_gtmOnFailure);
            else {
                var c = YC(a.vtp_fieldsToSet, "name", "value") || {};
                if (c.hasOwnProperty(S.g.Ta) || a.vtp_userProperties) {
                    var d = c[S.g.Ta] || {};
                    J(YC(a.vtp_userProperties, "name", "value"), d);
                    c[S.g.Ta] = d
                }
                a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl && (c[S.g.wa] = a.vtp_serverContainerUrl,
                c[S.g.fe] = !0);
                var e = a.vtp_userDataVariable;
                e && (c[S.g.ka] = e);
                zC(c, Zg, function(f) {
                    return Pa(f)
                });
                zC(c, ah, function(f) {
                    return Number(f)
                });
                c.send_page_view = a.vtp_sendPageView;
                bs(Yr(b, c), a.vtp_gtmEventId, {
                    noTargetGroup: !0,
                    originatingEntity: sr(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                });
                I(a.vtp_gtmOnSuccess)
            }
        })
    }();
    Z.m.gaawe = ["google"],
    function() {
        function a(f, g, h) {
            for (var l = 0; l < g.length; l++)
                f.hasOwnProperty(g[l]) && (f[g[l]] = h(f[g[l]]))
        }
        function b(f, g, h) {
            var l = {}, n = function(u, v) {
                l[u] = l[u] || v
            }, p = function(u, v, w) {
                w = void 0 === w ? !1 : w;
                c.push(6);
                if (u) {
                    l.items = l.items || [];
                    for (var x = {}, y = 0; y < u.length; x = {
                        Ub: x.Ub
                    },
                    y++)
                        x.Ub = {},
                        Ma(u[y], function(B) {
                            return function(C, E) {
                                w && "id" === C ? B.Ub.promotion_id = E : w && "name" === C ? B.Ub.promotion_name = E : B.Ub[C] = E
                            }
                        }(x)),
                        l.items.push(x.Ub)
                }
                if (v)
                    for (var A in v)
                        d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A, v[A])
            }, q;
            "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData,
            Cc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
            if (Cc(q)) {
                var r = !1, t;
                for (t in q)
                    q.hasOwnProperty(t) && (r || (c.push(5),
                    r = !0),
                    "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === S.g.Fb ? p(q.impressions, null) : "promoClick" === t && g === S.g.Zb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === S.g.Gb ? p(q.promoView.promotions, q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : l[t] = q[t]);
                J(l, h)
            }
        }
        var c = []
          , d = {
            id: "transaction_id",
            revenue: "value",
            list: "item_list_name"
        }
          , e = {
            click: "select_item",
            detail: "view_item",
            add: "add_to_cart",
            remove: "remove_from_cart",
            checkout: "begin_checkout",
            checkout_option: "checkout_option",
            purchase: "purchase",
            refund: "refund"
        };
        (function(f) {
            Z.__gaawe = f;
            Z.__gaawe.o = "gaawe";
            Z.__gaawe.isVendorTemplate = !0;
            Z.__gaawe.priorityOverride = 0;
            Z.__gaawe.isInfrastructure = !1
        }
        )(function(f) {
            var g = String(f.vtp_measurementIdOverride || f.vtp_measurementId);
            if (k(g) && 0 === g.indexOf("G-")) {
                var h = String(f.vtp_eventName)
                  , l = {};
                c = [];
                f.vtp_sendEcommerceData && (Yg.hasOwnProperty(h) || "checkout_option" === h) && b(f, h, l);
                var n = YC(f.vtp_eventParameters, "name", "value"), p;
                for (p in n)
                    n.hasOwnProperty(p) && (l[p] = n[p]);
                var q = f.vtp_userDataVariable;
                q && (l[S.g.ka] = q);
                if (l.hasOwnProperty(S.g.Ta) || f.vtp_userProperties) {
                    var r = l[S.g.Ta] || {};
                    J(YC(f.vtp_userProperties, "name", "value"), r);
                    l[S.g.Ta] = r
                }
                var t = {
                    originatingEntity: sr(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                };
                if (0 < c.length) {
                    var u = {};
                    t.eventMetadata = (u.event_usage = c,
                    u)
                }
                a(l, Zg, function(w) {
                    return Pa(w)
                });
                a(l, ah, function(w) {
                    return Number(w)
                });
                var v = f.vtp_gtmEventId;
                t.noGtmEvent = !0;
                bs(Zr(g, h, l), v, t);
                I(f.vtp_gtmOnSuccess)
            } else
                I(f.vtp_gtmOnFailure)
        })
    }();

    Z.m.ua = ["google"],
    function() {
        function a(l, n) {
            for (var p in l)
                if (!h[p] && l.hasOwnProperty(p)) {
                    var q = g[p] ? Pa(l[p]) : l[p];
                    "anonymizeIp" != p || q || (q = void 0);
                    n[p] = q
                }
        }
        function b(l) {
            var n = {};
            l.vtp_gaSettings && J(YC(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
            J(YC(l.vtp_fieldsToSet, "fieldName", "value"), n);
            Pa(n.urlPassthrough) && (n._useUp = !0);
            l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
            return n
        }
        function c(l, n) {
            return void 0 === n ? n : l(n)
        }
        function d(l, n, p) {
            var q = function(L, P, X) {
                for (var ja in L)
                    if (r.hasOwnProperty(ja)) {
                        var O = X[P] || {};
                        O.actionField = O.actionField || {};
                        O.actionField[r[ja]] = L[ja];
                        X[P] = O
                    }
            }, r = {
                transaction_id: "id",
                affiliation: "affiliation",
                value: "revenue",
                tax: "tax",
                shipping: "shipping",
                coupon: "coupon",
                item_list_name: "list"
            }, t = {}, u = (t[S.g.Gc] = "click",
            t[S.g.Oa] = "detail",
            t[S.g.Ec] = "add",
            t[S.g.Fc] = "remove",
            t[S.g.Yb] = "checkout",
            t[S.g.Ja] = "purchase",
            t[S.g.Hc] = "refund",
            t), v;
            if (l.vtp_useEcommerceDataLayer) {
                var w = !1;
                l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_gtmCachedValues.eventModel,
                w = !!v);
                w || (v = Ou("ecommerce", 1))
            } else
                l.vtp_ecommerceMacroData && (v = l.vtp_ecommerceMacroData.ecommerce,
                !v && l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_ecommerceMacroData));
            if (!Cc(v))
                return;
            v = Object(v);
            var x = {}
              , y = v.currencyCode;
            l.vtp_useGA4SchemaForEcommerce && (y = y || v.currency);
            var A = Ua(n, "currencyCode", y);
            A && (x.currencyCode = A);
            v.impressions && (x.impressions = v.impressions);
            v.promoView && (x.promoView = v.promoView);
            if (l.vtp_useGA4SchemaForEcommerce) {
                if (p === S.g.Fb && !v.impressions)
                    v.items && (x.impressions = v.items,
                    x.translateIfKeyEquals = "impressions");
                else if (p === S.g.Gb && !v.promoView)
                    v.promoView = {},
                    v.items && (x.promoView = {},
                    x.promoView.promotions = v.items,
                    x.translateIfKeyEquals = "promoView");
                else if (p === S.g.Zb && !v.promoClick)
                    v.promoClick = {},
                    v.items && (x.promoClick = {},
                    x.promoClick.promotions = v.items,
                    x.translateIfKeyEquals = "promoClick",
                    q(v, "promoClick", x));
                else if (u.hasOwnProperty(p)) {
                    var B = u[p];
                    !v[B] && v.items && (x[B] = {},
                    x[B].products = v.items,
                    x.translateIfKeyEquals = "products",
                    q(v, B, x))
                }
                var C = x.translateIfKeyEquals;
                if ("promoClick" === C || "products" === C)
                    return x
            }
            if (v.promoClick)
                return x.promoClick = v.promoClick,
                x;
            for (var E = "detail checkout checkout_option click add remove purchase refund".split(" "), H = 0; H < E.length; H++) {
                var D = v[E[H]];
                if (D)
                    return x[E[H]] = D,
                    x
            }
            l.vtp_useGA4SchemaForEcommerce && u.hasOwnProperty(p) && q(v, u[p], x);
            return x;
        }
        function e(l, n) {
            if (!f) {
                var p = l.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                l.vtp_useInternalVersion && !l.vtp_useDebugVersion && (p = "internal/" + p);
                f = !0;
                var q = l.vtp_gtmOnFailure
                  , r = Tq(n._x_19, "/analytics.js")
                  , t = ro("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                U("analytics.js" === p && r ? r : t, function() {
                    var u = Fr();
                    u && u.loaded || q();
                }, q)
            }
        }
        var f, g = {
            allowAnchor: !0,
            allowLinker: !0,
            alwaysSendReferrer: !0,
            anonymizeIp: !0,
            cookieUpdate: !0,
            exFatal: !0,
            forceSSL: !0,
            javaEnabled: !0,
            legacyHistoryImport: !0,
            nonInteraction: !0,
            useAmpClientId: !0,
            useBeacon: !0,
            storeGac: !0,
            allowAdFeatures: !0,
            allowAdPersonalizationSignals: !0,
            _cd2l: !0
        }, h = {
            urlPassthrough: !0
        };
        (function(l) {
            Z.__ua = l;
            Z.__ua.o = "ua";
            Z.__ua.isVendorTemplate = !0;
            Z.__ua.priorityOverride = 0;
            Z.__ua.isInfrastructure = !1
        }
        )(function(l) {
            function n() {
                if (l.vtp_doubleClick || "DISPLAY_FEATURES" == l.vtp_advertisingFeaturesType)
                    v.displayfeatures = !0
            }
            var p = {}
              , q = {}
              , r = {};
            if (l.vtp_gaSettings) {
                var t = l.vtp_gaSettings;
                J(YC(t.vtp_contentGroup, "index", "group"), p);
                J(YC(t.vtp_dimension, "index", "dimension"), q);
                J(YC(t.vtp_metric, "index", "metric"), r);
                var u = J(t);
                u.vtp_fieldsToSet = void 0;
                u.vtp_contentGroup = void 0;
                u.vtp_dimension = void 0;
                u.vtp_metric = void 0;
                l = J(l, u)
            }
            J(YC(l.vtp_contentGroup, "index", "group"), p);
            J(YC(l.vtp_dimension, "index", "dimension"), q);
            J(YC(l.vtp_metric, "index", "metric"), r);
            var v = b(l)
              , w = String(l.vtp_trackingId || "")
              , x = ""
              , y = ""
              , A = "";
            l.vtp_setTrackerName && "string" == typeof l.vtp_trackerName ? "" !== l.vtp_trackerName && (A = l.vtp_trackerName,
            y = A + ".") : (A = "gtm" + Ch(),
            y = A + ".");
            var B = function(ca, V) {
                for (var Fa in V)
                    V.hasOwnProperty(Fa) && (v[ca + Fa] = V[Fa])
            };
            B("contentGroup", p);
            B("dimension", q);
            B("metric", r);
            l.vtp_enableEcommerce && (x = l.vtp_gtmCachedValues.event,
            v.gtmEcommerceData = d(l, v, x));
            if ("TRACK_EVENT" === l.vtp_trackType)
                x = "track_event",
                n(),
                v.eventCategory = String(l.vtp_eventCategory),
                v.eventAction = String(l.vtp_eventAction),
                v.eventLabel = c(String, l.vtp_eventLabel),
                v.value = c(Oa, l.vtp_eventValue);
            else if ("TRACK_PAGEVIEW" == l.vtp_trackType) {
                if (x = S.g.Ic,
                n(),
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == l.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
                l.vtp_autoLinkDomains) {
                    var C = {};
                    C[S.g.aa] = l.vtp_autoLinkDomains;
                    C.use_anchor = l.vtp_useHashAutoLink;
                    C[S.g.kc] = l.vtp_decorateFormsAutoLink;
                    v[S.g.za] = C
                }
            } else
                "TRACK_SOCIAL" === l.vtp_trackType ? (x = "track_social",
                v.socialNetwork = String(l.vtp_socialNetwork),
                v.socialAction = String(l.vtp_socialAction),
                v.socialTarget = String(l.vtp_socialActionTarget)) : "TRACK_TIMING" == l.vtp_trackType && (x = "timing_complete",
                v.eventCategory = String(l.vtp_timingCategory),
                v.timingVar = String(l.vtp_timingVar),
                v.value = Oa(l.vtp_timingValue),
                v.eventLabel = c(String, l.vtp_timingLabel));
            l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
            l.vtp_enableLinkId && (v.enableLinkId = !0);
            var E = {};
            a(v, E);
            v.name || (E.gtmTrackerName = A);
            E.gaFunctionName = l.vtp_functionName;
            void 0 !== l.vtp_nonInteraction && (E.nonInteraction = l.vtp_nonInteraction);
            var H = pp(op(np(mp(fp(new ep(l.vtp_gtmEventId,l.vtp_gtmPriorityId), E), l.vtp_gtmOnSuccess), l.vtp_gtmOnFailure)));
            YB(w, x, Date.now(), H);
            var D = Hr(l.vtp_functionName);
            if (Ca(D)) {
                var L = function(ca) {
                    var V = [].slice.call(arguments, 0);
                    V[0] = y + V[0];
                    D.apply(window, V)
                };
                if ("TRACK_TRANSACTION" == l.vtp_trackType) {} else if ("DECORATE_LINK" == l.vtp_trackType) {} else if ("DECORATE_FORM" == l.vtp_trackType) {} else if ("TRACK_DATA" == l.vtp_trackType) {}
                e(l, v)
            } else
                I(l.vtp_gtmOnFailure)
        })
    }();
    Z.m.inject_script = ["google"],
    function() {
        function a(b, c) {
            return {
                url: c
            }
        }
        (function(b) {
            Z.__inject_script = b;
            Z.__inject_script.o = "inject_script";
            Z.__inject_script.isVendorTemplate = !0;
            Z.__inject_script.priorityOverride = 0;
            Z.__inject_script.isInfrastructure = !1
        }
        )(function(b) {
            var c = b.vtp_urls || []
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e, f) {
                    if (!k(f))
                        throw d(e, {}, "Script URL must be a string.");
                    try {
                        if (Bf(oi(f), c))
                            return
                    } catch (g) {
                        throw d(e, {}, "Invalid script URL filter.");
                    }
                    throw d(e, {}, "Prohibited script URL: " + f);
                },
                ca: a
            }
        })
    }();
    Z.m.gas = ["google"],
    function() {
        (function(a) {
            Z.__gas = a;
            Z.__gas.o = "gas";
            Z.__gas.isVendorTemplate = !0;
            Z.__gas.priorityOverride = 0;
            Z.__gas.isInfrastructure = !1
        }
        )(function(a) {
            var b = J(a)
              , c = b;
            c[Wd.cb] = null;
            c[Wd.Bf] = null;
            var d = b = c;
            d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
            var e = d.vtp_cookieDomain;
            void 0 !== e && (d.vtp_fieldsToSet.push({
                fieldName: "cookieDomain",
                value: e
            }),
            delete d.vtp_cookieDomain);
            return b
        })
    }();
    Z.m.awct = ["google"],
    function() {
        function a(b, c, d) {
            return function(e, f, g) {
                c[e] = "DATA_LAYER" === d ? Ou(g) : b[f]
            }
        }
        (function(b) {
            Z.__awct = b;
            Z.__awct.o = "awct";
            Z.__awct.isVendorTemplate = !0;
            Z.__awct.priorityOverride = 0;
            Z.__awct.isInfrastructure = !1
        }
        )(function(b) {
            var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker
              , d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion
              , e = YC(b.vtp_customVariables, "varName", "value") || {}
              , f = {}
              , g = (f[S.g.ra] = b.vtp_conversionValue || 0,
            f[S.g.va] = b.vtp_currencyCode,
            f[S.g.Ma] = b.vtp_orderId,
            f[S.g.La] = b.vtp_conversionCookiePrefix,
            f[S.g.ya] = c,
            f[S.g.Jc] = d,
            f[S.g.na] = Ou(S.g.na),
            f[S.g.ja] = Ou("developer_id"),
            f);
            g[S.g.Ea] = Ou(S.g.Ea),
            g[S.g.fa] = Ou(S.g.fa),
            g[S.g.kb] = Ou(S.g.kb),
            g[S.g.Fa] = Ou(S.g.Fa);
            b.vtp_rdp && (g[S.g.zb] = !0);
            if (b.vtp_enableCustomParams)
                for (var h in e)
                    fh.hasOwnProperty(h) || (g[h] = e[h]);
            if (b.vtp_enableProductReporting) {
                var l = a(b, g, b.vtp_productReportingDataSource);
                l(S.g.Nc, "vtp_awMerchantId", "aw_merchant_id");
                l(S.g.Lc, "vtp_awFeedCountry", "aw_feed_country");
                l(S.g.Mc, "vtp_awFeedLanguage", "aw_feed_language");
                l(S.g.Kc, "vtp_discount", "discount");
                l(S.g.ia, "vtp_items", "items")
            }
            b.vtp_enableShippingData && (g[S.g.oc] = b.vtp_deliveryPostalCode,
            g[S.g.Wc] = b.vtp_estimatedDeliveryDate,
            g[S.g.cc] = b.vtp_deliveryCountry,
            g[S.g.Tc] = b.vtp_shippingFee);
            b.vtp_transportUrl && (g[S.g.wa] = b.vtp_transportUrl);
            if (b.vtp_enableNewCustomerReporting) {
                var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                n(S.g.mc, "vtp_awNewCustomer", "new_customer");
                n(S.g.Rc, "vtp_awCustomerLTV", "customer_lifetime_value")
            }
            var p;
            a: {
                if (b.vtp_enableEnhancedConversion) {
                    var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                    if (q) {
                        p = {
                            enhanced_conversions_mode: "manual",
                            enhanced_conversions_manual_var: q
                        };
                        break a
                    }
                }
                p = void 0
            }
            var r = p;
            if (r) {
                var t = {};
                g[S.g.Vc] = (t[b.vtp_conversionLabel] = r,
                t)
            }
            var u = pp(op(np(mp(fp(new ep(b.vtp_gtmEventId,b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure)))
              , v = "AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel
              , w = gB;
            w = HA,
            u.eventMetadata.hit_type_override = "conversion";
            w(v, S.g.Ja, Date.now(), u)
        })
    }();

    Z.m.logging = ["google"],
    function() {
        function a() {
            return {}
        }
        (function(b) {
            Z.__logging = b;
            Z.__logging.o = "logging";
            Z.__logging.isVendorTemplate = !0;
            Z.__logging.priorityOverride = 0;
            Z.__logging.isInfrastructure = !1
        }
        )(function(b) {
            var c = b.vtp_environments || "debug"
              , d = b.vtp_createPermissionError;
            return {
                assert: function(e) {
                    var f;
                    if (f = "all" !== c && !0) {
                        var g = !1;
                        f = !g
                    }
                    if (f)
                        throw d(e, {}, "Logging is not enabled in all environments");
                },
                ca: a
            }
        })
    }();

    var qE = {};
    qE.macro = function(a) {
        if (Be.Df.hasOwnProperty(a))
            return Be.Df[a]
    }
    ,
    qE.onHtmlSuccess = Be.Sh(!0),
    qE.onHtmlFailure = Be.Sh(!1);
    qE.dataLayer = Qh;
    qE.callback = function(a) {
        zh.hasOwnProperty(a) && Ca(zh[a]) && zh[a]();
        delete zh[a]
    }
    ;
    qE.bootstrap = 0;
    qE._spx = !1;
    function rE() {
        hh[Ve.N] = hh[Ve.N] || qE;
        Ve.Xb && (hh["ctid_" + Ve.Xb] = qE);
        hk();
        jk() || Ma(kk(), function(a, b) {
            Xq(a, b.transportUrl, b.context);
            N(92)
        });
        Wa(Ah, Z.m);
        Ce();
        De = Re
    }
    (function(a) {
        function b() {
            l = G.documentElement.getAttribute("data-tag-assistant-present");
            fu(l) && (h = g.fj)
        }
        if (!m["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (G.referrer) {
                var d = oi(G.referrer);
                c = "cct.google" === li(d, "host")
            }
            if (!c) {
                var e = Ij("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (m["__TAGGY_INSTALLED"] = !0,
            ac("https://cct.google/taggy/agent.js"))
        }
        if (uh)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                oh ? (v = "OGT",
                w = "GTAG") : uh && (w = v = "OPT");
                var x = m["google.tagmanager.debugui2.queue"];
                x || (x = [],
                m["google.tagmanager.debugui2.queue"] = x,
                ac("https://" + gh.Td + "/debug/bootstrap?id=" + Ve.N + "&src=" + w + "&cond=" + u + "&gtm=" + nk()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Vb,
                        containerProduct: v,
                        debug: !1,
                        id: Ve.N,
                        isGte: nh
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                gh.Ai && (y.data.initialPublish = !0);
                x.push(y)
            }
              , g = {
                kl: 1,
                gj: 2,
                tj: 3,
                Ci: 4,
                fj: 5
            }
              , h = void 0
              , l = void 0
              , n = mi(m.location, "query", !1, void 0, "gtm_debug");
            fu(n) && (h = g.gj);
            if (!h && G.referrer) {
                var p = oi(G.referrer);
                "tagassistant.google.com" === li(p, "host") && (h = g.tj)
            }
            if (!h) {
                var q = Ij("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Ci)
            }
            h || b();
            if (!h && R(54) && gu(l)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    h && Vb ? f(h) : a()
                }
                  , t = !1;
                ec(G, "TADebugSignal", function() {
                    r()
                }, !1);
                m.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && Vb ? f(h) : a()
        }
    }
    )(function() {
        var a = !1;
        a && Br("INIT");
        Zi().B();
        Xk();
        Dn.enable_gbraid_cookie_write = !0;
        if (Ve.Xb ? hh["ctid_" + Ve.Xb] : hh[Ve.N]) {
            var b = hh.zones;
            b && b.unregisterChild(dk());
        } else {
            (R(11) || R(13) || R(55) || R(48)) && Om();
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++)
                se.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++)
                ve.push(f[g]);
            for (var h = c.predicates || [], l = 0; l < h.length; l++)
                ue.push(h[l]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], r = {}, t = 0; t < q.length; t++)
                    r[q[t][0]] = Array.prototype.slice.call(q[t], 1);
                te.push(r)
            }
            xe = Z;
            ye = Fv;
            Ze = new Ye;
            var u = data.sandboxed_scripts
              , v = data.security_groups
              , w = data.infra
              , x = data.runtime || []
              , y = data.runtime_lines;
            QC = new Td;
            TC();
            re = RC();
            var A = QC
              , B = NC();
            mb(A.h, "require", B);
            for (var C = 0; C < x.length; C++) {
                var E = x[C];
                if (!Ea(E) || 3 > E.length) {
                    if (0 === E.length)
                        continue;
                    break
                }
                y && y[C] && y[C].length && Ke(E, y[C]);
                QC.execute(E)
            }
            if (void 0 !== u)
                for (var H = ["sandboxedScripts"], D = 0; D < u.length; D++) {
                    var L = u[D].replace(/^_*/, "");
                    Ah[L] = H
                }
            UC(v);
            if (void 0 !== w)
                for (var P = 0; P < w.length; P++)
                    Bh[w[P]] = !0;
            rE();
            eu();
            lr = !1;
            mr = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState)
                or();
            else {
                ec(G, "DOMContentLoaded", or);
                ec(G, "readystatechange", or);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var X = !0;
                    try {
                        X = !m.frameElement
                    } catch (ca) {}
                    X && pr()
                }
                ec(m, "load", or)
            }
            Ws = !1;
            "complete" === G.readyState ? Ys() : ec(m, "load", Ys);
            Cm();
            R(46) && (N(111),
            vb("HEALTH", 1));
            R(47) && (N(112),
            vb("HEALTH", 2));
            yh = Ta();
            qE.bootstrap = yh;
            if (a) {
                var la = Cr("INIT");
            }
        }
    });

}
)()
