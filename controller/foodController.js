const foodData = require("../data/foodData");

exports.foodItems = async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      data: foodData,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.getFoodItemById = async (req, res) => {
  try {
    const itemId = parseInt(req.params.id);
    const item = foodData.find((food) => food.id === itemId);

    if (!item) {
      return res.status(404).send({
        status: "error",
        message: "Food item not found",
      });
    }

    res.status(200).send({
      status: "success",
      data: item,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
