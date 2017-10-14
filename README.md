# SURFGURU SERVER

SurfGuru rest server


## Getting started

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Install dependences

    yarn install

## Usage


### GET /api/v1/simple/:id

Return the beach forecast for a short time period.

This endpoint returns a `.json` array with `predictions`.

A `prediction` has the following fields:

- `date` : The date of the prediction
- `wah` : The predicted wave height in meters.
- `wad` : The wave direction in degrees. (S 0º) (W 90º) (N 180º) (E 270º)
- `wis` : The wind speed in knots.
- `wid` : The wind direction. (S 0º) (W 90º) (N 180º) (E 270º)


#### Example response 


```json
[
  {
    "d": "Sa14.08h",
    "wah": "1.4",
    "wad": "289",
    "wis": "3",
    "wid": "107"
  },
  {
    "d": "Sa14.11h",
    "wah": "1.6",
    "wad": "288",
    "wis": "4",
    "wid": "133"
  },
  {
    "d": "Sa14.14h",
    "wah": "1.7",
    "wad": "286",
    "wis": "5",
    "wid": "210"
  },
  {
    "d": "Sa14.17h",
    "wah": "1.8",
    "wad": "286",
    "wis": "6",
    "wid": "235"
  },
  {
    "d": "Sa14.20h",
    "wah": "1.7",
    "wad": "286",
    "wis": "3",
    "wid": "168"
  },
  {
    "d": "Su15.05h",
    "wah": "1.5",
    "wad": "286",
    "wis": "6",
    "wid": "134"
  },
  {
    "d": "Su15.08h",
    "wah": "1.4",
    "wad": "285",
    "wis": "6",
    "wid": "131"
  },
  {
    "d": "Su15.11h",
    "wah": "1.4",
    "wad": "284",
    "wis": "6",
    "wid": "142"
  },
  {
    "d": "Su15.14h",
    "wah": "1.4",
    "wad": "285",
    "wis": "13",
    "wid": "187"
  },
  {
    "d": "Su15.17h",
    "wah": "1.4",
    "wad": "284",
    "wis": "12",
    "wid": "190"
  },
  {
    "d": "Su15.20h",
    "wah": "1.5",
    "wad": "281",
    "wis": "11",
    "wid": "180"
  },
  {
    "d": "Mo16.05h",
    "wah": "3.9",
    "wad": "259",
    "wis": "14",
    "wid": "206"
  },
  {
    "d": "Mo16.08h",
    "wah": "4.7",
    "wad": "260",
    "wis": "6",
    "wid": "265"
  },
  {
    "d": "Mo16.11h",
    "wah": "4.3",
    "wad": "261",
    "wis": "0",
    "wid": "191"
  },
  {
    "d": "Mo16.14h",
    "wah": "4.3",
    "wad": "269",
    "wis": "2",
    "wid": "97"
  },
  {
    "d": "Mo16.17h",
    "wah": "4.1",
    "wad": "275",
    "wis": "3",
    "wid": "90"
  },
  {
    "d": "Mo16.20h",
    "wah": "3.6",
    "wad": "282",
    "wis": "4",
    "wid": "47"
  },
  {
    "d": "Tu17.05h",
    "wah": "2.5",
    "wad": "294",
    "wis": "1",
    "wid": "68"
  },
  {
    "d": "Tu17.08h",
    "wah": "2.2",
    "wad": "295",
    "wis": "2",
    "wid": "266"
  },
  {
    "d": "Tu17.11h",
    "wah": "2",
    "wad": "298",
    "wis": "4",
    "wid": "162"
  },
  {
    "d": "Tu17.14h",
    "wah": "1.7",
    "wad": "299",
    "wis": "9",
    "wid": "205"
  },
  {
    "d": "Tu17.17h",
    "wah": "1.6",
    "wad": "298",
    "wis": "11",
    "wid": "207"
  },
  {
    "d": "Tu17.20h",
    "wah": "1.5",
    "wad": "302",
    "wis": "10",
    "wid": "184"
  },
  {
    "d": "We18.05h",
    "wah": "1.7",
    "wad": "276",
    "wis": "7",
    "wid": "177"
  },
  {
    "d": "We18.08h",
    "wah": "1.9",
    "wad": "279",
    "wis": "7",
    "wid": "156"
  },
  {
    "d": "We18.11h",
    "wah": "2.1",
    "wad": "280",
    "wis": "8",
    "wid": "162"
  },
  {
    "d": "We18.14h",
    "wah": "2.1",
    "wad": "282",
    "wis": "9",
    "wid": "188"
  },
  {
    "d": "We18.17h",
    "wah": "2",
    "wad": "282",
    "wis": "8",
    "wid": "210"
  },
  {
    "d": "We18.20h",
    "wah": "1.9",
    "wad": "284",
    "wis": "5",
    "wid": "185"
  },
  {
    "d": "Th19.05h",
    "wah": "1.5",
    "wad": "284",
    "wis": "8",
    "wid": "165"
  },
  {
    "d": "Th19.08h",
    "wah": "1.5",
    "wad": "286",
    "wis": "9",
    "wid": "166"
  },
  {
    "d": "Th19.11h",
    "wah": "1.6",
    "wad": "285",
    "wis": "11",
    "wid": "167"
  },
  {
    "d": "Th19.14h",
    "wah": "1.7",
    "wad": "284",
    "wis": "12",
    "wid": "184"
  },
  {
    "d": "Th19.17h",
    "wah": "1.8",
    "wad": "283",
    "wis": "13",
    "wid": "178"
  },
  {
    "d": "Th19.20h",
    "wah": "2.1",
    "wad": "283",
    "wis": "11",
    "wid": "170"
  },
  {
    "d": "Fr20.05h",
    "wah": "2.4",
    "wad": "285",
    "wis": "11",
    "wid": "168"
  },
  {
    "d": "Fr20.08h",
    "wah": "2.4",
    "wad": "284",
    "wis": "12",
    "wid": "169"
  },
  {
    "d": "Fr20.11h",
    "wah": "2.3",
    "wad": "283",
    "wis": "14",
    "wid": "173"
  },
  {
    "d": "Fr20.14h",
    "wah": "2.4",
    "wad": "282",
    "wis": "16",
    "wid": "180"
  },
  {
    "d": "Fr20.17h",
    "wah": "2.4",
    "wad": "282",
    "wis": "16",
    "wid": "182"
  },
  {
    "d": "Fr20.20h",
    "wah": "2.4",
    "wad": "281",
    "wis": "17",
    "wid": "186"
  },
  {
    "d": "Sa21.05h",
    "wah": "2.9",
    "wad": "274",
    "wis": "11",
    "wid": "234"
  },
  {
    "d": "Sa21.08h",
    "wah": "3",
    "wad": "277",
    "wis": "9",
    "wid": "349"
  },
  {
    "d": "Sa21.11h",
    "wah": "3.2",
    "wad": "281",
    "wis": "8",
    "wid": "356"
  },
  {
    "d": "Sa21.14h",
    "wah": "3.2",
    "wad": "280",
    "wis": "8",
    "wid": "337"
  },
  {
    "d": "Sa21.17h",
    "wah": "3.3",
    "wad": "279",
    "wis": "9",
    "wid": "323"
  },
  {
    "d": "Sa21.20h",
    "wah": "3.4",
    "wad": "279",
    "wis": "9",
    "wid": "337"
  },
  {
    "d": "Su22.05h",
    "wah": "-",
    "wad": null,
    "wis": "5",
    "wid": "64"
  },
  {
    "d": "Su22.08h",
    "wah": "-",
    "wad": null,
    "wis": "5",
    "wid": "77"
  },
  {
    "d": "Su22.11h",
    "wah": "-",
    "wad": null,
    "wis": "3",
    "wid": "83"
  },
  {
    "d": "Su22.14h",
    "wah": "-",
    "wad": null,
    "wis": "3",
    "wid": "220"
  },
  {
    "d": "Su22.17h",
    "wah": "-",
    "wad": null,
    "wis": "4",
    "wid": "244"
  },
  {
    "d": "Su22.20h",
    "wah": "-",
    "wad": null,
    "wis": "4",
    "wid": "210"
  },
  {
    "d": "Mo23.05h",
    "wah": "-",
    "wad": null,
    "wis": "18",
    "wid": "189"
  },
  {
    "d": "Mo23.08h",
    "wah": "-",
    "wad": null,
    "wis": "21",
    "wid": "183"
  },
  {
    "d": "Mo23.11h",
    "wah": "-",
    "wad": null,
    "wis": "24",
    "wid": "175"
  },
  {
    "d": "Mo23.14h",
    "wah": "-",
    "wad": null,
    "wis": "26",
    "wid": "173"
  },
  {
    "d": "Mo23.17h",
    "wah": "-",
    "wad": null,
    "wis": "15",
    "wid": "208"
  },
  {
    "d": "Mo23.20h",
    "wah": "-",
    "wad": null,
    "wis": "7",
    "wid": "236"
  },
  {
    "d": "Tu24.05h",
    "wah": "-",
    "wad": null,
    "wis": "7",
    "wid": "228"
  },
  {
    "d": "Tu24.08h",
    "wah": "-",
    "wad": null,
    "wis": "4",
    "wid": "224"
  }
]
```

### License

MIT