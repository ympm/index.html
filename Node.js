var express = require("express");
var app = express();

//calculate body mass index
app.get("/bmi/:weight/:height", function(req, res) {
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height);
    
    if(isNaN(weight) || isNaN(height))
    {
        res.status(400);
        return;
    }
    else 
    {
        res.status(200);
        const bmi = (weight * 0.45359237) / (Math.pow((height * 0.0254),2));
        res.json({bmi: bmi});
    
    }
});

//calculate body fat
app.get("/bodyfat/:age/:bmi", function(req, res) {
    const bmi = parseInt(req.params.bmi);
    const age = parseInt(req.params.age);
    
    if(isNaN(age) || isNaN(bmi))
    {
        res.status(400);
        return;
    }
    else 
    {
        res.status(200);
        const bodyfat = (1.20 * bmi) + (0.23 * age) - 16.2;
        res.json({bodyfat: bodyfat});    
    }
});

//calculate ideal weight
app.get("/idealweight/:height", function(req, res) {
    const height = parseInt(req.params.height);
    if(isNaN(height))
    {
        res.status(400);
        return;
    }
    else
    {
        res.status(200);
        const idealBodyWeight = 50 + (0.91 * ((height * 2.54) - 152.4))
        res.json({idealBodyWeight: idealBodyWeight});    
    }
});

//calculate calories burned
app.get("/calories/:age/:weight/:height", function(req, res) {
    const age = parseInt(req.params.age);
    const weight = parseInt(req.params.weight);
    const height = parseInt(req.params.height)/100;
    if(isNaN(age) || isNaN(weight) || isNaN(height))
    {
        res.status(400);
        return;
    }
    else
    {
        res.status(200);
        const dailycal = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        res.json({dailyCal: dailycal});    
    }
});