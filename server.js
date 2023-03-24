import 'dotenv/config';
import express from 'express';
const app = new express();
app.use(express.json());
app.listen(3061);
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { router as personRouter } from './routers/person-router.js';
import { router as searchRouter } from './routers/search-router.js';
import { router as locationRouter } from './routers/location-router.js';
/*****************************************************************************/
const swaggerDocument = YAML.load('api.yaml');
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
/*****************************************************************************/
app.use('/person', personRouter, locationRouter);
app.use('/search', searchRouter);
/*****************************************************************************/