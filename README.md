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
Your slack team needs to be paid so that you can acess the `team.accessLogs` methods (https://api.slack.com/methods/team.accessLogs).  This is what we use to get folk's locations
* Make a new integration and get your API key here my.slack.com/apps/manage/custom-integrations