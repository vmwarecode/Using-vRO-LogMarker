// For Scriptable Tasks

System.setLogMarker("SCRIPT: "+System.currentWorkflowItem().getDisplayName());
System.log("Performing tasks...");
System.log("Task 1 completed");
System.debug("Subtask 1a completed");
System.warn("Task 1 completed with some errors");

// for actions

if(arguments.callee.name.substr(6))  System.setLogMarker("ACTION: "+arguments.callee.name.substr(6));
System.log("Performing tasks in action...");
System.log("Task 2 completed");
System.debug("Subtask 2a completed");
System.warn("Task 3 completed with some errors");
System.error("Task 4 failed");