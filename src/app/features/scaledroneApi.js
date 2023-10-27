const scaledrone = window.Scaledrone;
const channelId = import.meta.env.VITE_CHANNEL_ID;
let clientInfo = {};
const roomName = "observable-room";
let drone;

export const setUserInfo = (name, color) => {
	clientInfo = { data: { name: name, color: color } };
};

export const connect = () => {
	drone = new scaledrone(channelId, clientInfo);
	drone.on("open", (error) => {
		return error;
	});
};

export const subscribeToMessages = (callback) => {
	const room = drone.subscribe(roomName);
	room.on("message", callback);
};

export const publishMessage = (message) => {
	drone.publish({
		room: roomName,
		message: message,
	});
};

export const disconnect = () => {
	drone.close();
};
