# Slack Team Locations

I parse the slack access logs to make a map of your team member's locations so you can show them on a map!

## Setups
```bash
yarn install
brew install heroku
cp .env-example .env
heroku local
```

## Configuration
* Your slack team needs to be paid so that you can acess the `team.accessLogs` methods (https://api.slack.com/methods/team.accessLogs).  This is what we use to get folk's locations
* Make a new integration and get your API key here https://api.slack.com/methods/team.accessLogs/test This is the test method for the team API, so you can be sure that your API key works.  This key is set in your .env file or environment variables
* You need a google maps API key.  Get one here https://developers.google.com/maps/documentation/javascript/get-api-key. This key is set in your .env file or environment variables 

## Notes
* This project uses (and will download) the free maxmind geoip "geolite-2" database.