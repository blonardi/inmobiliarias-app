const express = require('express') // CommonJS
const app = express()
const logger = require('./loggerMiddleware')
const cors = require('cors')

// const image = require('../server/assets')
app.use(cors())
app.use(express.json())
app.use(logger)

let dataAssets = [
  {
    id: 1,
    // image: image,
    price: 120000,
    title: 'Hermosa Casa',
    address: 'Calle Principal 123',
    description:
      'Sumérgete en la serenidad de esta encantadora casa de campo. Con un hermoso jardín que te invita a la relajación al aire libre, esta residencia ofrece un refugio tranquilo en medio de la naturaleza. Sus detalles rústicos y ambiente acogedor te harán sentir como en casa.',
    meters: 60,
    type: 'Lote',
    localidad: 'Larroque',
    inmobiliaria: 'Perera'
  },
  {
    id: 2,
    // image: image,
    price: 250000,
    title: 'Casa Moderna',
    address: 'Avenida Central 456',
    description:
      'Una experiencia de vida moderna te espera en esta elegante residencia. Diseñada para maximizar las vistas panorámicas, cada rincón de esta casa está imbuido de estilo y funcionalidad. Desde sus interiores de diseño hasta sus comodidades de vanguardia, aquí encontrarás el equilibrio perfecto entre lujo y confort.',
    meters: 40,
    type: 'Casa',
    localidad: 'Gualeguaychu',
    inmobiliaria: 'Perera'
  },
  {
    id: 3,
    // image: image,
    price: 75000,
    title: 'Casa Clásica',
    address: 'Callejón Secreto 789',
    description:
      'Ubicada en un pintoresco vecindario tranquilo, esta acogedora casa urbana ofrece la combinación ideal de comodidad y proximidad a la ciudad. Sus espacios bien distribuidos brindan un ambiente relajante, mientras que su ubicación te conecta con todas las conveniencias urbanas.',
    meters: 30,
    type: 'Casa',
    localidad: 'Irazusta',
    inmobiliaria: 'Korell'
  },
  {
    id: 4,
    // image: image,
    price: 320000,
    title: 'Casa Elegante',
    address: 'Plaza del Sol 101',
    description:
      'Esta casa familiar es un refugio perfecto para aquellos que valoran el espacio y la funcionalidad. Con una disposición que fomenta la interacción y el entretenimiento, sus amplias habitaciones y características modernas crean un ambiente acogedor donde la vida en familia florece.',
    meters: 120,
    type: 'Lote',
    localidad: 'Irazusta',
    inmobiliaria: 'Zapata'
  },
  {
    id: 5,
    // image: image,
    price: 95000,
    title: 'Casa Acogedora',
    address: 'Boulevard Hermoso 555',
    description:
      'Sumérgete en la historia y la elegancia de esta casa clásica. Sus detalles arquitectónicos únicos y su encanto intemporal te transportarán a una época pasada. Cada rincón está imbuido de carácter y personalidad, ofreciendo un hogar que es verdaderamente uno de una clase.',
    meters: 40,
    type: 'Casa',
    localidad: 'Larroque',
    inmobiliaria: 'Perera'
  },
  {
    id: 6,
    // image: image,
    price: 180000,
    title: 'Casa Familiar',
    address: 'Camino Tranquilo 777',
    description:
      'Inspirada en líneas contemporáneas y luminosas, esta casa es un testimonio del diseño moderno en su máxima expresión. Sus espacios abiertos y llenos de luz crean un ambiente de amplitud y confort. Con una conexión fluida entre interiores y exteriores, esta casa redefine la vida contemporánea.',
    meters: 60,
    type: 'Lote',
    localidad: 'Gualeguaychu',
    inmobiliaria: 'Perera'
  },
  {
    id: 7,
    // image: image,
    price: 180000,
    title: 'Casa Familiar',
    address: 'Camino Tranquilo 777',
    description:
      'Inspirada en líneas contemporáneas y luminosas, esta casa es un testimonio del diseño moderno en su máxima expresión. Sus espacios abiertos y llenos de luz crean un ambiente de amplitud y confort. Con una conexión fluida entre interiores y exteriores, esta casa redefine la vida contemporánea.',
    meters: 60,
    type: 'Lote',
    localidad: 'Gualeguaychu',
    inmobiliaria: 'Perera'
  },
  {
    id: 8,
    // image: image,
    price: 180000,
    title: 'Casa Familiar',
    address: 'Camino Tranquilo 777',
    description:
      'Inspirada en líneas contemporáneas y luminosas, esta casa es un testimonio del diseño moderno en su máxima expresión. Sus espacios abiertos y llenos de luz crean un ambiente de amplitud y confort. Con una conexión fluida entre interiores y exteriores, esta casa redefine la vida contemporánea.',
    meters: 60,
    type: 'Lote',
    localidad: 'Gualeguaychu',
    inmobiliaria: 'Perera'
  },
  {
    id: 9,
    // image: image,
    price: 180000,
    title: 'Casa Familiar',
    address: 'Camino Tranquilo 777',
    description:
      'Inspirada en líneas contemporáneas y luminosas, esta casa es un testimonio del diseño moderno en su máxima expresión. Sus espacios abiertos y llenos de luz crean un ambiente de amplitud y confort. Con una conexión fluida entre interiores y exteriores, esta casa redefine la vida contemporánea.',
    meters: 60,
    type: 'Lote',
    localidad: 'Gualeguaychu',
    inmobiliaria: 'Perera'
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Inmobiliarias API</h1>')
})

app.get('/api/houses', (req, res) => {
  res.json(dataAssets)
})

app.get('/api/houses/:id', (req, res) => {
  const houseId = Number(req.params.id)
  const note = dataAssets.find((note) => note.id === houseId)
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/houses/:id', (req, res) => {
  const houseId = Number(req.params.id)
  const houses = dataAssets.filter((house) => house.id !== houseId)
  res.json(houses)
  res.status(204).end()
})

app.post('/api/houses', (req, res) => {
  const newHouse = req.body

  if (!newHouse || !newHouse.title) {
    return res.status(400).json({ error: 'title is missing' })
  }

  const ids = dataAssets.map((house) => house.id)
  const maxId = Math.max(...ids)
  const newHouseToPost = {
    id: maxId + 1,
    price: newHouse.price,
    title: newHouse.title,
    address: newHouse.address,
    description: newHouse.description,
    meters: newHouse.meters,
    type: newHouse.type,
    location: newHouse.location,
    realEstate: newHouse.realEstate,
    date: new Date().toISOString()
  }

  dataAssets = [...dataAssets, newHouseToPost]
  // devolvemos el objeto creado
  // console.log({ newHouseToPost })
  res.json(newHouseToPost)
})

app.use((req, res, next) => {
  console.log(req.path)
  res.status(404).json({
    error: 'Recurso no encontrado',
    message: 'El recurso solicitado no existe.'
  })
  next()
})

app.get('/sum/:num1/:num2', (req, res) => {
  res.send(`la suma es ${Number(req.params.num1) + Number(req.params.num2)}`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
