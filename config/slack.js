exports.default = {
  slack: () => {
    return {
      token: process.env.SLACK_TOKEN
    }
  }
}
