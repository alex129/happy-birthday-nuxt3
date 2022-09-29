export const getRandomPosition = (min = 20, max = 80) => {
  const randomNumber = (Math.random() * (max - min) + min).toFixed(0)
  return parseInt(randomNumber)
}
