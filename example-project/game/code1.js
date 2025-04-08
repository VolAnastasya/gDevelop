gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDCoinObjects1= [];
gdjs.gameCode.GDCoinObjects2= [];
gdjs.gameCode.GDsceneObjects1= [];
gdjs.gameCode.GDsceneObjects2= [];
gdjs.gameCode.GDscoreObjects1= [];
gdjs.gameCode.GDscoreObjects2= [];
gdjs.gameCode.GDStarDiamondObjects1= [];
gdjs.gameCode.GDStarDiamondObjects2= [];
gdjs.gameCode.GDHeartObjects1= [];
gdjs.gameCode.GDHeartObjects2= [];
gdjs.gameCode.GDBearObjects1= [];
gdjs.gameCode.GDBearObjects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.gameCode.GDCoinObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.gameCode.GDCoinObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStarDiamondObjects1Objects = Hashtable.newFrom({"StarDiamond": gdjs.gameCode.GDStarDiamondObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStarDiamondObjects1Objects = Hashtable.newFrom({"StarDiamond": gdjs.gameCode.GDStarDiamondObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDHeartObjects1Objects = Hashtable.newFrom({"Heart": gdjs.gameCode.GDHeartObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDHeartObjects1Objects = Hashtable.newFrom({"Heart": gdjs.gameCode.GDHeartObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBearObjects1Objects = Hashtable.newFrom({"Bear": gdjs.gameCode.GDBearObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBearObjects1Objects = Hashtable.newFrom({"Bear": gdjs.gameCode.GDBearObjects1});
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bear"), gdjs.gameCode.GDBearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.gameCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.gameCode.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("StarDiamond"), gdjs.gameCode.GDStarDiamondObjects1);
{for(var i = 0, len = gdjs.gameCode.GDHeartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDStarDiamondObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStarDiamondObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDBearObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBearObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setX(gdjs.gameCode.GDplayerObjects1[i].getX() + (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setX(gdjs.gameCode.GDplayerObjects1[i].getX() + (-(5)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setY(gdjs.gameCode.GDplayerObjects1[i].getY() + (-(5)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].setY(gdjs.gameCode.GDplayerObjects1[i].getY() + (5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Coin") >= 2;
if (isConditionTrue_0) {
gdjs.gameCode.GDCoinObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Coin");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCoinObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.gameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCoinObjects1[i].addPolarForce(90, 90, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCoinObjects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Coin");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.gameCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StarDiamond");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StarDiamond") >= 8;
if (isConditionTrue_0) {
gdjs.gameCode.GDStarDiamondObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StarDiamond");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStarDiamondObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.gameCode.GDStarDiamondObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStarDiamondObjects1[i].addPolarForce(90, 90, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDStarDiamondObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStarDiamondObjects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StarDiamond"), gdjs.gameCode.GDStarDiamondObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStarDiamondObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDStarDiamondObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDStarDiamondObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDStarDiamondObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(3);
}{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Heart");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Heart") >= 14;
if (isConditionTrue_0) {
gdjs.gameCode.GDHeartObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Heart");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDHeartObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.gameCode.GDHeartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDHeartObjects1[i].addPolarForce(90, 90, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDHeartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDHeartObjects1[i].getBehavior("Scale").setScale(1.3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.gameCode.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDHeartObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDHeartObjects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDHeartObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDHeartObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).mul(2);
}{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bear");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Bear") >= 21;
if (isConditionTrue_0) {
gdjs.gameCode.GDBearObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Bear");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBearObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.gameCode.GDBearObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBearObjects1[i].addPolarForce(90, 90, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDBearObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBearObjects1[i].getBehavior("Scale").setScale(1.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bear"), gdjs.gameCode.GDBearObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplayerObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDBearObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDBearObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDBearObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBearObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDCoinObjects1.length = 0;
gdjs.gameCode.GDCoinObjects2.length = 0;
gdjs.gameCode.GDsceneObjects1.length = 0;
gdjs.gameCode.GDsceneObjects2.length = 0;
gdjs.gameCode.GDscoreObjects1.length = 0;
gdjs.gameCode.GDscoreObjects2.length = 0;
gdjs.gameCode.GDStarDiamondObjects1.length = 0;
gdjs.gameCode.GDStarDiamondObjects2.length = 0;
gdjs.gameCode.GDHeartObjects1.length = 0;
gdjs.gameCode.GDHeartObjects2.length = 0;
gdjs.gameCode.GDBearObjects1.length = 0;
gdjs.gameCode.GDBearObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);
gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDCoinObjects1.length = 0;
gdjs.gameCode.GDCoinObjects2.length = 0;
gdjs.gameCode.GDsceneObjects1.length = 0;
gdjs.gameCode.GDsceneObjects2.length = 0;
gdjs.gameCode.GDscoreObjects1.length = 0;
gdjs.gameCode.GDscoreObjects2.length = 0;
gdjs.gameCode.GDStarDiamondObjects1.length = 0;
gdjs.gameCode.GDStarDiamondObjects2.length = 0;
gdjs.gameCode.GDHeartObjects1.length = 0;
gdjs.gameCode.GDHeartObjects2.length = 0;
gdjs.gameCode.GDBearObjects1.length = 0;
gdjs.gameCode.GDBearObjects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
