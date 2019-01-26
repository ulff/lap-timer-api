const { Lap } = require('../model/lap');

const retrieveSessions = async () => {
  const collection = {};
  const allResults = await Lap.find();

  if (allResults.length === 0) {
    return [];
  }

  allResults.map((result) => {
    if (collection[result.session] === undefined) {
      collection[result.session] = {
        session: result.session,
        participants: {},
        laps: 0,
        date: result.date,
      }
    }
    collection[result.session].participants[result.identifier] = 1;
    collection[result.session].laps += 1;
  });

  const sessions = Object.values(collection);
  sessions.map((s) => {
    s.participants = Object.keys(s.participants).length;
  });

  return sessions;
};

module.exports = {
  retrieveSessions,
};
