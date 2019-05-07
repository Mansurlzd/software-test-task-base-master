const ClientModel = require('../models/ClientModel');
const validator = require('../helpers/validator');

class ClientsController {
	// GET - Returns a list of clients
	static async get() {
		return ClientModel.getList();
	}

	// GET - Returns one client by ID
	static async getOne(req) {
		const { clientId } = req.params;

		return ClientModel.getOne(clientId);
	}

	// POST - Create a client
	static async createOne(req) {
		await validator.validate('ClientModel', req.body);

		return ClientModel.createOne(req.body);
	}

	// DELETE - Delete a client
	static async deleteOne(req) {
		const { clientId } = req.params;

		await ClientModel.deleteById(clientId);

		return { message: 'success' };
	}

	// UPDATE - Update a client
	static async updateOne(req) {
		const clientData = {
			clientId: req.params.clientId,
			firstname: req.body.firstname,
			surname: req.body.surname,
		};
		const forValidation = {
			firstname: req.body.firstname,
			surname: req.body.surname,
			phoneNumber: '+44076546546545', 
		}
		await validator.validate('ClientModel', forValidation);
		await ClientModel.updateOne(clientData);
		return { message: 'success' };
	}
}


module.exports = ClientsController;