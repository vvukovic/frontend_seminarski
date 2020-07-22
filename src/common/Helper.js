export function RandomizeUsername() {
  const username = 'ChatUser-' + (Math.floor(Math.random() * 50));
  return username;
}

export function RandomizeBgColor() {
  const color = '#' + (Math.floor(Math.random() * 0xCCCCCC).toString(16));
  return color;
}