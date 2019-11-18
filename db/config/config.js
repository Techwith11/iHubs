module.exports = {
	development: {
		storage: "db/db.sqlite",
		dialect: "sqlite"
	},
	test: {
		storage: "db/db_test.sqlite",
		dialect: "sqlite"
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql"
	}
};
