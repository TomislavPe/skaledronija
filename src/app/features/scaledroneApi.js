const scaledrone = window.Scaledrone;
const channelId = import.meta.env.VITE_CHANNEL_ID;
let drone;

export const connect = () => {
	drone = new scaledrone(channelId);
};

export const subscribe = (callback) => {
	drone.on("open", (error) => {
		const room = drone.subscribe("observable-room");
		room.on("data", callback);
	});
};
