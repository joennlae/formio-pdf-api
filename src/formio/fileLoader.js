const BACKEND_FORMIO_URL = "https://vm-031.s3it.uzh.ch/formio";
function handleErrors(response) {
    if (response.ok) {
        return response;
    }
    else {
        console.log('error', response);
        throw Error(response.statusText);
    }
}
async function requestAuthWithoutBodyExtern(url) {
    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        })
        await handleErrors(response);
        let json = await response.json();
        return json;
    }
    catch (e) {
        throw e;
    }
}
async function loadCMSFormsNew(id) {
    let result = await requestAuthWithoutBodyExtern(BACKEND_FORMIO_URL + "/form?_id=" + id);
    console.log('components', result);
    return result;
}


let submission = {
    "id": "5e590067ec71bc15238c1707",
    "ongoing": false,
    "survey": {
        "FU36-A": {
            "A6-eq5dVas-n": "83",
            "eq5dActivities-s": "3",
            "eq5dAnxdep-s": "5",
            "eq5dSelfcare-s": "1",
            "eq5dWalking-s": "2"
        },
        "FU36-B": {
            "B1-noworkreason-s": "Unemployed",
            "B1-workcurr-s": "0",
            "B3-disabinsur-s": "No"
        },
        "FU36-C": {
            "C1-caremedcurr-s": "0",
            "C2-visitregPsycho-s": "0"
        },
        "FU36-D": {
            "D1-mstype-s": "SPMS"
        },
        "FU36-E": {},
        "FU36-End": {
            "fu36EndWellFieldset2Fragebogenabsenden": true
        },
        "FU36-F": {
            "F1-dmt6mt-n": "1",
            "F2-dmtArzerra": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtAubagio": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtAvonex": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtBetaferon": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtCopaxone": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtEndoxan": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtExtavia": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtGilenya": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtImurek": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtLemtrada": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtMabthera": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtMavenclad": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtMayzent": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtNerventra": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtNovantron": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtOcrevus": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtOther": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtPlegridy": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtRebif": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtSandimmun": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtSynacthen": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtTecfidera": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            },
            "F2-dmtTysabri": {
                "Pause6mt_m3": false,
                "Start6mt_m1": false,
                "Startbefore_m2": false,
                "Stop6mt_m4": false
            }
        },
        "FU36-H": {},
        "FU36-I": {},
        "FU36-Intro": {},
        "FU36-J": {},
        "FU36-K": {},
        "FU36-L": {},
        "FU36-M-10Fruit": {},
        "FU36-M-11SaucesSoups": {},
        "FU36-M-12Fastfood": {},
        "FU36-M-13CakePastries": {},
        "FU36-M-14Drinks": {},
        "FU36-M-14Snacks": {},
        "FU36-M-16Preparation": {},
        "FU36-M-17Additionalquestions": {},
        "FU36-M-1Milk": {},
        "FU36-M-2Meat": {},
        "FU36-M-3FishEggMeatsub": {},
        "FU36-M-4Bread": {},
        "FU36-M-5Spread": {},
        "FU36-M-6Potato": {},
        "FU36-M-7Cerealproducts": {},
        "FU36-M-8Legumes": {},
        "FU36-M-9Vegetables": {},
        "FU36-N": {},
        "FU36-O": {},
        "FU36-P": {},
        "FU36-Q": {},
        "FU36-R-Extra": {},
        "FU36-R-WD": {
            "R1-Eatsleepwd1": {
                "R1-Eatsleepwd1Dinner-s": "09.00 - 09.30"
            },
            "R1-Eatsleepwd5": {
                "R1-Eatsleepwd5Snackaft-s": "04.00 - 04.30"
            }
        },
        "FU36-R-WE": {}
    },
    "tags": [
        "jahrlicheverlaufsbefragungmitfokusthemaernahrung",
        "100",
        "36",
        "{\"paperId\":\"14420\",\"author\":\"Jannis\",\"updated_at\":\"2020-02-28T12:00:30.496Z\",\"formId\":\"5dc2e1cda3b9b916ce42c5b114420\",\"post_date\":\"Sat Nov 11 1111 00:34:08 GMT+0034 (Central European Standard Time)\"}"
    ],
    "timestamp": "2020-02-28T12:00:30.541000"
}