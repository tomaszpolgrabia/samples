# Explanations

## Original error

Table Task already exists...

## Reproduced error

***************************
APPLICATION FAILED TO START
***************************

Description:

Parameter 0 of constructor in ch.polgrabia.demos.springdemo1.controllers.TaskController required a bean of type 'ch.polgrabia.demos.springdemo1.daos.TaskDao' that could not be found.


Action:

Consider defining a bean of type 'ch.polgrabia.demos.springdemo1.daos.TaskDao' in your configuration.

# Conclusions

Spring had nothing to do with table 'task' already exists error.
