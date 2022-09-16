const shorts = ['very nice car', 'poor car', 'my fav car', 'some filler car']

const genCar = (id) => {
  return {
    id,
    name: `Car-${id}`,
    short: shorts[Math.floor(Math.random() * shorts.length)],
    topSpeed: Math.floor(Math.random() * 200 + 100),
    price: Math.floor(Math.random() * 200_000 + 5000),
    url: `https://via.placeholder.com/728x240?text=this+is+Car-${id}`,
  }
}

export const GenerateElements = () => {
  const list = []
  for (let i = 0; i < 20; i++) list.push(genCar(i + 1))
  return list
}
