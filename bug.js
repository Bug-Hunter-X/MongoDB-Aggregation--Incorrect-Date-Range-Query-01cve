```javascript
const pipeline = [
  {
    $match: {
      "date": {
        $gte: ISODate("2023-10-26T00:00:00Z"),
        $lt: ISODate("2023-10-27T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: "$userId",
      total: { $sum: "$amount" }
    }
  }
];

db.collection.aggregate(pipeline).toArray((err, result) => {
  if (err) {
    console.error("Aggregation error:", err);
  } else {
    console.log(result);
  }
});
```