const { testDatabaseConnection } = require("../config/testDatabase");
const sequelize = require("../config/database");

describe.skip("Test Suite", () => {
  test("Test Database Connection", async () => {
    await expect(testDatabaseConnection()).resolves.toBeUndefined();
  });

  test("Handle Connection Error", async () => {
    // Mocken der Datenbankverbindung
    jest
      .spyOn(sequelize, "authenticate")
      .mockRejectedValue(new Error("Connection failed"));

    await expect(testDatabaseConnection()).rejects.toThrow("Connection failed");
  });
});
