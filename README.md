## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## documentation


## memory usage

report with

```js
  const used = process.memoryUsage();
  for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
```
reported usage
```bash
rss 44.53 MB
heapTotal 22.75 MB
heapUsed 16.69 MB
external 1.34 MB
```

## deploy


server is run with npm forever package
* https://www.dev2qa.com/how-to-run-node-js-server-in-background/

```bash
nvm use 10 
forever start dist/main.js
#or 
yarn forever list
yarn forever start
#use to kill
forever list
forever stop ....

```


### POST request to endpoint /pdf

```
{
  "formId": "5dc2e1cda3b9b916ce42c5b1",
  "submission": {
  "id": "5e5915a0ec71bc15258c17ea",
  "ongoing": true,
  "survey": {
    "FU36-A": {
      "A6-eq5dVas-c": "asdf",
      "A6-eq5dVas-n": 72,
      "eq5dActivities-c": "asdf",
      "eq5dActivities-s": "3",
      "eq5dAnxdep-s": "2",
      "eq5dPain-s": "3",
      "eq5dWalking-s": "1"
    },
    "FU36-B": {
      "B1-workcurr-s": "1",
      "B3-disabinsur-s": "No",
      "workcurrperc-n": "78"
    },
    "FU36-C": {
      "C1-caremedcurr-s": "0",
      "C2-visitregNeurohosp-s": "0",
      "C2-visitregNeuroprac-s": "0",
      "C2-visitregPhysiogen-s": "1",
      "C3-aidsmedcurr": {
        "Armrest_m6": false,
        "Bathhelp_m2": false,
        "Cane_m1": false,
        "Catheter_m9": true,
        "Handle_m7": false,
        "Hingesupp_m5": false,
        "Nappies_m8": false,
        "Other_m10": false,
        "Rollator_m4": true,
        "Wheelchair_m3": false
      },
      "C3-aidsmedcurr-s": "1"
    },
    "FU36-D": {
      "D1-mstype-c": "acfasfd",
      "D1-mstype-s": "PPMS",
      "D2-symp6mt-s": "0"
    },
    "FU36-E": {
      "E1-walking-s": "500-1000 m",
      "E10-movechange-s": "Yes, less",
      "E2-stairs-s": "1-20 (approx. 1 floor)",
      "E3-driving-s": "No",
      "E4-publictransport-s": "0",
      "E5-physactivedays-n": "8",
      "E6-move-s": "0"
    },
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
        "Start6mt_m1": true,
        "Startbefore_m2": false,
        "Stop6mt_m4": false
      },
      "F2-dmtCopaxone": {
        "Pause6mt_m3": false,
        "Start6mt_m1": false,
        "Startbefore_m2": true,
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
        "Pause6mt_m3": true,
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
        "Pause6mt_m3": true,
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
        "Start6mt_m1": true,
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
        "Startbefore_m2": true,
        "Stop6mt_m4": false
      },
      "F2-dmtRebif": {
        "Pause6mt_m3": true,
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
        "Pause6mt_m3": true,
        "Start6mt_m1": false,
        "Startbefore_m2": false,
        "Stop6mt_m4": false
      },
      "F2-dmtTysabri": {
        "Pause6mt_m3": false,
        "Start6mt_m1": false,
        "Startbefore_m2": false,
        "Stop6mt_m4": false
      },
      "F5-dmtpausestart-d": "06/7869"
    },
    "FU36-G": {
      "G1-dmtstopreas": {
        "Allergy_m1": false,
        "Handling_m3": true,
        "Inflammmri_m8": false,
        "Other_m11": false,
        "Otherse_m2": false,
        "Planpreg_m9": false,
        "Pregnancy_m10": false,
        "Progrworelapse_m7": false,
        "Relapse_m4": false,
        "Relapseprogr_m6": false,
        "Relapseremiss_m5": false
      },
      "bittewhlenSienureinederfolgendenAntwortenaus2": "0"
    },
    "FU36-H": {
      "H1-sewodmtstop-s": "1",
      "H2-sewodmtstop": {
        "Allergy_m9": false,
        "Depression_m14": false,
        "Dizziness_m6": false,
        "Euphoria_m12": false,
        "Fatigue_m1": false,
        "Flulike_m3": false,
        "Gitract_m5": false,
        "Hairloss_m10": false,
        "Headache_m8": false,
        "Hotflush_m7": false,
        "Mania_m13": false,
        "Opportinf_m17": false,
        "Other_m18": false,
        "Pain_m2": true,
        "Pmldiag_m16": false,
        "Pmlprev_m15": false,
        "Skin_m11": false,
        "Sleep_m4": false
      }
    },
    "FU36-I": {
      "I1-medalt": {
        "Acupuncture_m6": false,
        "Aroma_m8": false,
        "Cranberries_m11": false,
        "Homeo_m5": false,
        "Naturo_m1": false,
        "Osteo_m2": false,
        "Other_m12": false,
        "Relax_m4": false,
        "Tcm_m3": true,
        "Trigger_m7": false,
        "Vitb_m9": false,
        "Vitother_m10": true
      },
      "I1-medalt-s": "1",
      "I2-medaltreas": {
        "Other_m5": false,
        "Progression_m1": false,
        "Sideeffects_m3": true,
        "Symptoms_m2": false,
        "Wellbeing_m4": false
      },
      "I3-medalt6mtDrug1-c": "jkl",
      "I4-cannabis-s": "Yes, medical advice",
      "I5-cannabis": {
        "Cbd_m7": false,
        "Homegrown_m6": false,
        "Oil_m2": true,
        "Oilmix_m4": false,
        "Other_m8": false,
        "Road_m5": false,
        "Sativex_m1": false,
        "Tincture_m3": false
      },
      "I6-cannabispresc-s": "0"
    },
    "FU36-Intro": {},
    "FU36-J": {
      "J1-dxother12mt-s": "0"
    },
    "FU36-K": {
      "K1-mfis21Bodyunwell14-s": "4",
      "K1-mfis21Diffconcenlong2-s": "3",
      "K1-mfis21Diffmoveexertionlong10-s": "2",
      "K1-mfis21Lessattentive1-s": "2",
      "K1-mfis21Lessmotmove7-s": "4",
      "K1-mfis21Needlongbreaks21-s": "4",
      "K3-helpsurvey-s": "0"
    },
    "FU36-L": {
      "L10-eatingwellbeing-s": "3",
      "L8-weightchange-s": "1",
      "L9-weightchangewhat-s": "Gained weight"
    },
    "FU36-M-10Fruit": {
      "M27-Fruitsfreshfreq-s": "1-2 a week",
      "M27-Fruitsfreshnumber-s": "2",
      "M30-Fruitjuicefreq-s": "3-4 a week",
      "M30-Fruitjuicenumber-s": "1"
    },
    "FU36-M-11SaucesSoups": {
      "M31-Soupfreq-s": "5-6 a week",
      "M31-Soupnumber-s": "1",
      "M32-Saucewarmfreq-s": "1-2 a week",
      "M32-Saucewarmnumber-s": "3",
      "M33-Saucecoldfreq-s": "1-2 a week",
      "M33-Saucecoldnumber-s": "1"
    },
    "FU36-M-12Fastfood": {
      "M34-Fastfoodfreq-s": "3-4 a week",
      "M34-Fastfoodnumber-s": "2"
    },
    "FU36-M-13CakePastries": {
      "M35-Cakepastiesfreq-s": "3-4 a week",
      "M35-Cakepastiesnumber-s": "3",
      "M36-Icecreamfreq-s": "3-4 a week",
      "M36-Icecreamnumber-s": "0.5",
      "M37-Chocolatefreq-s": "1-2 a week",
      "M37-Chocolatenumber-s": "2"
    },
    "FU36-M-14Drinks": {
      "M40-Waterteacoffeefreq-s": "1-2 a week",
      "M40-Waterteacoffeenumber-s": "1",
      "M41-Softdrinkssugarfreq-s": "Thrice a day",
      "M41-Softdrinkssugarnumber-s": "1",
      "M42-Softdrinkswosugarnumber-s": "0.75"
    },
    "FU36-M-14Snacks": {
      "M38-Nutsfreq-s": "5-6 a week",
      "M38-Nutsnumber-s": "2",
      "M39-Chipsfreq-s": "Twice a day",
      "M39-Chipsnumber-s": "2"
    },
    "FU36-M-16Preparation": {},
    "FU36-M-17Additionalquestions": {
      "M47-EatoutLunch-n": "3",
      "M48-Conveniencefood": {
        "M48-ConveniencefoodBreakfast-s": "Rather seldom",
        "M48-ConveniencefoodDinner-s": "Rather frequently",
        "M48-ConveniencefoodLunch-s": "Rather seldom",
        "M48-ConveniencefoodSnack-s": "Frequently"
      },
      "M49-Oilcold-s": "Sunflower oil",
      "M51-Oilwarm-s": "Olive oil"
    },
    "FU36-M-1Milk": {
      "M1-Milkfreq-s": "5-6 a week",
      "M1-Milknumber-s": "2",
      "M1-Milksize-s": {
        "portion": "Middle"
      },
      "M2-Cheesefreq-s": "3-4 a week",
      "M2-Cheesenumber-s": "2",
      "M2-Cheesesize-s": {
        "portion": "Middle"
      },
      "M3-Yoghurtfreq-s": "3-4 a week",
      "M3-Yoghurtnumber-s": "2",
      "M3-Yoghurtsize-s": {
        "portion": "Middle"
      }
    },
    "FU36-M-2Meat": {
      "M4-Meatredfreq-s": "3-4 a week",
      "M4-Meatrednumber-s": "2",
      "M4-Meatredsize-s": {
        "portion": "Middle"
      },
      "M5-Meatwhitefreq-s": "1-2 a week",
      "M5-Meatwhitenumber-s": "2",
      "M5-Meatwhitesize-s": {
        "portion": "Middle"
      },
      "M6-Meatprodfreq-s": "3-4 a week",
      "M6-Meatprodnumber-s": "1",
      "M6-Meatprodsize-s": {
        "portion": "Middle"
      },
      "M7-Sausagesfreq-s": "3-4 a week",
      "M7-Sausagesnumber-s": "1",
      "M7-Sausagessize-s": {
        "portion": "Middle"
      }
    },
    "FU36-M-3FishEggMeatsub": {
      "M10-Eggsize-s": {
        "portion": "Middle"
      },
      "M11-Meatsubsize-s": {
        "portion": "Big"
      },
      "M8-Fishleanfreq-s": "5-6 a week",
      "M8-Fishleannumber-s": "3",
      "M8-Fishleansize-s": {
        "portion": "Middle"
      },
      "M9-Fishfatfreq-s": "1-2 a week",
      "M9-Fishfatnumber-s": "1",
      "M9-Fishfatsize-s": {
        "portion": "Big"
      }
    },
    "FU36-M-4Bread": {},
    "FU36-M-5Spread": {
      "M16-Spreadsweetfreq-s": "1-2 a week"
    },
    "FU36-M-6Potato": {
      "M17-Potatofreq-s": "3-4 a week",
      "M17-Potatonumber-s": "0.75"
    },
    "FU36-M-7Cerealproducts": {
      "M18-Pastafreq-s": "Thrice a day",
      "M18-Pastanumber-s": "1",
      "M19-Ricefreq-s": "5-6 a week",
      "M19-Ricenumber-s": "2",
      "M20-Polentafreq-s": "3-4 a week",
      "M20-Polentanumber-s": "0.5",
      "M21-Cerealsfreq-s": "Twice a day",
      "M21-Cerealsnumber-s": "3"
    },
    "FU36-M-8Legumes": {
      "M22-Legumesfreq-s": "5-6 a week",
      "M22-Legumesnumber-s": "2"
    },
    "FU36-M-9Vegetables": {
      "M23-Vegetablesfreshfreq-s": "5-6 a week",
      "M23-Vegetablesfreshnumber-s": "0.75",
      "M24-Saladfreq-s": "1-2 a week",
      "M24-Saladnumber-s": "1",
      "M25-Vegetablescannedfreq-s": "3-4 a week",
      "M25-Vegetablescannednumber-s": "4",
      "M26-Vegetablesjuicefreq-s": "1-2 a week",
      "M26-Vegetablesjuicenumber-s": "3"
    },
    "FU36-N": {
      "N1-Breakfastfreq-s": "4"
    },
    "FU36-O": {
      "O1-Lunchfreq-s": "3",
      "O2-Lunchdiff-s": "0",
      "O3-Lunchregular-s": "0",
      "O4-Lunchirregularreason": {
        "Diffactivities_m3": false,
        "Diffweekdayweekend_m1": false,
        "Irregulartime_m2": true,
        "Other_m4": false
      }
    },
    "FU36-P": {
      "P1-Dinnerfreq-s": "5",
      "P2-Dinnerdiff-s": "0"
    },
    "FU36-Q": {
      "Q1-Snackfreq-s": "4"
    },
    "FU36-R-Extra": {},
    "FU36-R-WD": {
      "R1-Eatsleepwd1": {
        "R1-Eatsleepwd1Dinner-s": "08.30 - 09.00",
        "R1-Eatsleepwd1Lunch-s": "08.00 - 08.30",
        "R1-Eatsleepwd1Nap-s": "09.00 - 09.30",
        "R1-Eatsleepwd1Snackaft-s": "09.00 - 09.30",
        "R1-Eatsleepwd1Snackeve-s": "09.30 - 10.00"
      },
      "R1-Eatsleepwd2": {
        "R1-Eatsleepwd2Dinner-s": "13.30 - 14.00",
        "R1-Eatsleepwd2Lunch-s": "12.30 - 13.00",
        "R1-Eatsleepwd2Snackaft-s": "13.00 - 13.30",
        "R1-Eatsleepwd2Snackeve-s": "14.00 - 14.30"
      },
      "R1-Eatsleepwd3": {
        "R1-Eatsleepwd3Dinner-s": "19.00 - 19.30",
        "R1-Eatsleepwd3Lunch-s": "18.00 - 18.30",
        "R1-Eatsleepwd3Snackaft-s": "18.30 - 19.00",
        "R1-Eatsleepwd3Snackmorn-s": "17.30 - 18.00"
      },
      "R1-Eatsleepwd4": {
        "R1-Eatsleepwd4Dinner-s": "23.30 - 00.00",
        "R1-Eatsleepwd4Lunch-s": "22.30 - 23.00",
        "R1-Eatsleepwd4Snackaft-s": "23.00 - 23.30",
        "R1-Eatsleepwd4Snackeve-s": "00.00 - 00.30"
      },
      "R1-Eatsleepwd5": {
        "R1-Eatsleepwd5Dinner-s": "03.30 - 04.00",
        "R1-Eatsleepwd5Nap-s": "04.30 - 05.00",
        "R1-Eatsleepwd5Snackaft-s": "03.00 - 03.30",
        "R1-Eatsleepwd5Snackeve-s": "04.00 - 04.30"
      }
    },
    "FU36-R-WE": {
      "R2-Eatsleepwe1": {
        "R2-Eatsleepwe1Lunch-s": "07.00 - 07.30",
        "R2-Eatsleepwe1Snackeve-s": "09.30 - 10.00"
      },
      "R2-Eatsleepwe2": {
        "R2-Eatsleepwe2Breakfast-s": "11.30 - 12.00",
        "R2-Eatsleepwe2Lunch-s": "13.30 - 14.00",
        "R2-Eatsleepwe2Snackmorn-s": "12.30 - 13.00"
      },
      "R2-Eatsleepwe3": {
        "R2-Eatsleepwe3Snackeve-s": "19.00 - 19.30"
      },
      "R2-Eatsleepwe4": {
        "R2-Eatsleepwe4Snackmorn-s": "22.30 - 23.00"
      },
      "R2-Eatsleepwe5": {
        "R2-Eatsleepwe5Dinner-s": "04.30 - 05.00",
        "R2-Eatsleepwe5Snackaft-s": "03.00 - 03.30",
        "R2-Eatsleepwe5Snackmorn-s": "04.00 - 04.30"
      }
    }
  },
  "tags": [
    "jahrlicheverlaufsbefragungmitfokusthemaernahrung",
    "99",
    "16"
  ],
  "timestamp": "2020-03-06T10:47:32.507000"
}
}
```