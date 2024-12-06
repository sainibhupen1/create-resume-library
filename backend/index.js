const express = require("express");
const con = require("./mongo");
const app = express();
const User = require('./users');
require('dotenv').config();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const products = require("./products");
const Resume = require("./resumeadd");
const path = require('path');

app.use(express.json());
app.use(cors())

const _dirname = path.resolve();

const PORT = process.env.PORT || 3000;







app.post("/register", async (req, res) => {
    try {
        if (req.body.name && req.body.email && req.body.password) {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(401).json({
                    message: "Try different email",
                    success: false,
                });
            }


            let users = new User(req.body);
            let result = await users.save();
            result = result.toObject();
            delete result.password;

            return res.status(200).send({
                message: "Account created successfully",
                success: true,
            });
        } else {
            res.status(401).send({
                message: "Something is missing, please check!",
                success: false,
            });
        }
    } catch (err) {
        // console.error(err);
        res.status(500).json({
            message: "Server error",
            success: false,
        });
    }
});



app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) {
        let users = await User.findOne(req.body).select("-password");

        if (users) {
            res.status(200).send({
                message: "successfully login",
                success: true,
                users,
            });
        } else {
            res.status(401).send({
                message: "Something is Wrong, please check!",
                success: false,
            });
        }
    } else {
        res.status(401).send({
            message: "Something is missing, please check!",
            success: false,
        });
    }

})


app.get("/users", async (req, res) => {
    let users = await User.find();
    if (users.length > 0) {
        res.send(users)
    } else {
        res.send("No user found")
    }
})



app.delete("/profile/:id", async (req, res) => {
    let user = await User.deleteOne({ _id: req.params.id });
    res.send(user);

})




// products api start 



app.post("/products", async (req, res) => {


    if (req.body.book && req.body.price) {

        const result = new products(req.body);
        await result.save();

        res.status(200).send({
            message: "book added successfully",
            success: true
        })
    } else {
        res.status(401).send({
            message: "something is missing",
            success: false
        })
    }

})


app.get("/product", async (req, res) => {
    const result = await products.find();
    res.send(result);

})

app.delete("/product/:id", async (req, res) => {
    let product = await products.deleteOne({ _id: req.params.id });
    if (product) {
        res.status(200).send({
            message: "successfully deleted",
            success: true
        })
    }
})

app.get("/update/:id", async (req, res) => {
    let product = await products.findOne({ _id: req.params.id });
    res.send(product);
})

app.put("/update/:id", async (req, res) => {
    const result = await products.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    if (result) {
        res.status(200).send({
            message: "updated successfully",
            success: true
        })
    }

})


app.get("/search/:key", async (req, res) => {
    const result = await products.find({
        "$or": [
            { book: { $regex: req.params.key } }
        ]
    });

    if (result) {
        res.send(result);
    } else {
        res.send('result not found')
    }

})





// resume ke liye  api   









app.post("/createresume", async (req, res) => {
    const requiredFields = [
        "username", "mobilenumber", "email", "city", "state", "aboutme",
        "collegename", "colcity", "colstate", "colcgpa", "colfield", "colfieldbranch",
        "colyear", "schoolname12", "city12", "state12", "boardname12", "percentage12",
        "schoolname10", "city10", "state10", "boardname10", "percentage10",
        "projectname1", "p1gitlink", "p1skills", "p1about",
        "projectname2", "p2gitlink", "p2skills", "p2about",
        "frontend", "backend", "database", "others",
        "companynamecet", "fieldcet", "language"
    ];

    // Check for missing fields
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).send({
            message: `Missing required fields: ${missingFields.join(", ")}`,
            success: false
        });
    }

    try {
        // Validate Array Fields
        const arrayFields = [
            "p1skills", "p2skills", "frontend", "backend", "database", "others",
            "companynamecet", "fieldcet", "language"
        ];

        for (const field of arrayFields) {
            if (!Array.isArray(req.body[field])) {
                return res.status(400).send({
                    message: `Field "${field}" must be an array.`,
                    success: false
                });
            }
        }

        // Validate Numeric Fields
        const numericFields = ["mobilenumber", "colcgpa", "colyear", "percentage12", "percentage10"];
        for (const field of numericFields) {
            if (typeof req.body[field] !== "number") {
                return res.status(400).send({
                    message: `Field "${field}" must be a number.`,
                    success: false
                });
            }
        }

        // Save Resume Data
        const resumeData = new Resume(req.body);
        await resumeData.save();

        res.status(200).send({
            message: "Resume created successfully",
            success: true,
            resumedata: resumeData
        });
    } catch (error) {
        // console.error("Error while saving resume:", error);
        res.status(500).send({
            message: "An error occurred while saving the resume.",
            success: false,
            error: error.message
        });
    }
});


app.get("/resume", async (req, res) => {
    const result = await Resume.findOne().sort({ createdAt: -1 });
    if (result) {
        res.send(result)
    } else {
        res.send('somthing is error');
    }

})

app.put("/updateresume/:id", async (req, res) => {
    const result = await Resume.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })

    if (result) {
        res.status(200).send({
            message: "Resume updated successfully",
            success: true,
            result,
        })
    } else {
        res.status(401).send({
            message: "something is wrong",
            success: false
        })
    }
})


app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})


app.listen(PORT, () => {
    con();
    console.log(`server runing at port ${PORT}`)
})