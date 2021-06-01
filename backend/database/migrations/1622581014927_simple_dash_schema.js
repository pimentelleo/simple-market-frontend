'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SimpleDashSchema extends Schema {
  up () {
    this.create('simple_dashes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('simple_dashes')
  }
}

module.exports = SimpleDashSchema
