// src/utils/generateMockTrips.js
export const generateMockTrips = () => {
  const modes = ['car', 'bus', 'metro', 'bike', 'walk'];
  const trips = [];

  for (let i = 0; i < 50; i++) {
    const startTime = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);
    trips.push({
      _id: `trip_${i}`,
      userId: `user_${Math.floor(Math.random() * 10)}`,
      mode: modes[Math.floor(Math.random() * modes.length)],
      start: startTime,
      end: new Date(startTime.getTime() + Math.random() * 2 * 60 * 60 * 1000),
      points: Array.from({ length: 20 }, () => ({
        lat: 28.6667 + (Math.random() - 0.5) * 0.2,
        lon: 77.2167 + (Math.random() - 0.5) * 0.2,
        ts: startTime
      }))
    });
  }

  return trips;
};
