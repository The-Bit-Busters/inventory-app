const { Item } = require("../models/index");
const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../db");

describe("Item model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterEach(async () => {
    await Item.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test("should return all items", async () => {
    await Item.create({
      title: "Test item 1",
      price: 10,
      description: "This is test item 1",
      category: "Test category",
      image: "test1.jpg",
    });

    await Item.create({
      title: "Test item 2",
      price: 20,
      description: "This is test item 2",
      category: "Test category",
      image: "test2.jpg",
    });

    const allUsers = await Item.findAll();

    expect(allUsers.length).toBe(2);
    expect(allUsers[0].title).toBe("Test item 1");
    expect(allUsers[1].title).toBe("Test item 2");
  });

  test("should return an empty array if there are no items", async () => {
    const allUsers = await Item.findAll();

    expect(allUsers.length).toBe(0);
  });

  test("should return the specific item", async () => {
    const item = await Item.create({
      title: "Test item",
      price: 35,
      description: "This is a test item",
      category: "Test category",
      image: "test.jpg",
    });

    const theItem = await Item.findByPk(item.id);
    expect(theItem.title).toBe("Test item");
    expect(theItem.price).toBe(35);
  });

  test("should return a 404 error if the item does not exist", async () => {
    const res = await request(app).get("/999");

    expect(res.statusCode).toBe(404);
  });

  test("should create an item with all fields", async () => {
    const item = await Item.create({
      title: "Test item",
      price: 10,
      description: "This is a test item",
      category: "Test category",
      image: "test.jpg",
    });

    expect(item.title).toBe("Test item");
    expect(item.price).toBe(10);
    expect(item.description).toBe("This is a test item");
    expect(item.category).toBe("Test category");
    expect(item.image).toBe("test.jpg");
  });

  test("should update an item", async () => {
    const item = await Item.create({
      title: "Test item",
      price: 10,
      description: "This is a test item",
      category: "Test category",
      image: "test.jpg",
    });

    await item.update({ price: 20 });

    expect(item.price).toBe(20);
  });

  test("should delete an item", async () => {
    const item = await Item.create({
      title: "Test item",
      price: 10,
      description: "This is a test item",
      category: "Test category",
      image: "test.jpg",
    });

    await item.destroy();

    const foundItem = await Item.findByPk(item.id);

    expect(foundItem).toBeNull();
  });
});
