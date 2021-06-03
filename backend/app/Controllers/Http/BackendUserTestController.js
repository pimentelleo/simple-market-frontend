"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class BackendUserTestController {
  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { user, email, password } = request.body;
      const newUser = new User();
      newUser.email = email;
      newUser.name = name;
      await newUser.save();
      const token = await auth.generate(newUser);
      const user = await User.query()
        .select("name", "email")
        .where("id", newUser.id)
        .first();
      return response.json({ user, token: token.token });
    } catch (error) {}
  }
}

module.exports = BackendUserTestController;
