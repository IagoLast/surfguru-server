# METEOSAPI SERVER

SurfGuru rest server


## Getting started

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Install dependences

    yarn install

## Usage


### GET /api/v1/simple/:id

Ask for the simplified weather forecast in a given province for the next 3 days. The province code can be obtained from [here](http://www.ine.es/jaxi/menu.do?type=pcaxis&path=/t20/e245/codmun&file=inebase)
or from [here](https://iagolast.github.io/pselect/)

This method returns a `.json` array with `predicions`.

A prediction has the following fields:

- `name`: Name of the municipe of the predicion
- `province`: Names of the required province.
- `today`: Simplified forecast for the current day
- `tomorrow`: Simplified forecast for the next today
- `next2`: Simplified forecast for the day after tomorrow

### License

MIT