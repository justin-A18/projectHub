export const colorRandom = () => {
	const colorCards = ['#6345FF', '#FFBF27', '#EC9BB5', '#B1EA0E'];
	const index = Math.floor(Math.random() * colorCards.length);
	const color = colorCards[index];

	return color;
};
