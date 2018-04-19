'use strict'

/*
  SIRVE PARA RETORNAR LA CONFIGURACION
*/

const debug = require('debug')('metricfy:db')
const { extend } = require('metricfy-utils')

function dbConfig (configExtra) {
  // objeto de configuracion
  const configDatabase = {
    database: process.env.DB_NAME || 'metricfydb',
    username: process.env.DB_USER || 'metricfy',
    password: process.env.DB_PASS || 'pass123',
    hostname: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    loggin: s => debug(s),
    setup: false
  }

  if (configExtra) { return extend(configDatabase, configExtra) }

  return configDatabase
}

const authConfig = {
  secret: process.env.SECRET || 'metricfy'
}

module.exports = {
  dbConfig,
  authConfig
}
