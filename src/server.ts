import express from 'express';
import swaggerUi from 'swagger-ui-express'
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
app.use(express.json())
app.use(router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3001, () => console.log('ServerON!'))