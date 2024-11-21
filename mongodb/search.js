const { MongoClient } = require('mongodb');

(async () => {
    const url = "mongodb://localhost:27017";
    const dbName = "412638131"; // 資料庫名稱
    const collectionName = "studentslist"; // 集合名稱

    const client = new MongoClient(url);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 聚合查詢統計各院系人數
        const results = await collection.aggregate([
            { $group: { _id: "$院系", student_count: { $sum: 1 } } },
            { $sort: { student_count: -1 } }
        ]).toArray();

        console.log("各院系人數統計：");
        results.forEach(department => {
            console.log(`${department._id}: ${department.student_count}`);
        });

    } catch (error) {
        console.error("發生錯誤：", error);
    } finally {
        // 關閉連接
        await client.close();
        console.log("已關閉 MongoDB 連接");
    }
})();
