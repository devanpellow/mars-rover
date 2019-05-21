// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0, 0],
  travelLog: [],
}

// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "W":
        rover.direction = "S";
        break;
    };
  
    console.log("Rover Direction " + rover.direction);
  }

function turnRight(rover){
  console.log("turnRight was called!");
  
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "W":
        rover.direction = "N";
        break;
    };
  
    console.log("Rover Direction " + rover.direction);
}


function moveForward(rover){
  console.log("moveForward was called")

     switch (rover.direction) {
      case "N":
        rover.position[1] = rover.position[1] - 1;
        break;
      case "S":
        rover.position[1] = rover.position[1] + 1;
        break;
      case "E":
        rover.position[0] = rover.position[0] + 1;
        break;
      case "W":
        rover.position[0] = rover.position[0] - 1;
        break;
    };
    
    console.log("Rover Position " + rover.position);
    
  }

function roverCommands(command) {
  console.log("roverCommands were received from Houston!")

    for (var i = 0; i < command.length; i++) {
      switch (command[i]) {
        case "f":
          moveForward(rover);
          travelLogRecord();
          break;
        case "r":
          turnRight(rover);
          travelLogTurn();
          break;
        case "l":
          turnLeft(rover);
          travelLogTurn();
          break;
      }
    }

}

function travelLogTurn() {
  rover.travelLog.push("The rover has turned: " + rover.direction)
}


function travelLogRecord() {
  rover.travelLog.push("The rover has moved to position: " + rover.position)
}


roverCommands('rffrfflfrff')

console.log(rover.travelLog)