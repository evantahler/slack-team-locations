# Slack Team Locations

I parse the slack access logs to make a map of your team member's locations so you can show them on a map!

![screenshot](https://raw.githubusercontent.com/evantahler/slack-team-locations/master/screenshot.png)

## Setups
```bash
yarn install
brew install heroku # or use Foreman, or just start both processes directly (see Procile)
cp .env-example .env # and then fill out .env
heroku local
```

## Configuration
* Your slack team needs to be paid so that you can acess the `team.accessLogs` methods (https://api.slack.com/methods/team.accessLogs).  This is what we use to get folk's IP addreses, and then determine locations.
* Make a new Slack integration and get your API key here https://api.slack.com/methods/team.accessLogs/test This is the test method for the team API, so you can be sure that your API key works.  This key is set in your .env file or environment variables
* You need a google maps API key.  Get one here https://developers.google.com/maps/documentation/javascript/get-api-key. This key is set in your .env file or environment variables 
* create the mysql or postgres database defined in your .env file (ie: `mysql -e "CREATE DATABASE slack_locations_development"`)

## Notes
* This project uses (and will download) the free maxmind geoip "geolite-2" database automatically.