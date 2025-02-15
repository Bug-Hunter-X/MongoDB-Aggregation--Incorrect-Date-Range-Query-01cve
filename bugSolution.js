```javascript
const pipeline = [
  {
    $match: {
      date: {
        $gte: new Date(Date.UTC(2023, 9, 26)),
        $lt: new Date(Date.UTC(2023, 9, 27))
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