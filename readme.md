# Biggest strictly increasing sequence

_Write a program that takes two integers N (N between 2 and 20, both inclusive) and M (M
between 2 and 20, both inclusive). And then takes **a matrix A with N rows and M columns**. You
start at the upper-left position and you need to output the **size of the biggest strictly increasing
sequence of elements going only down or to the right**._

---
## Installation

* [NodeJS](https://nodejs.org/en/download/) - Run-time environment which includes everything you need to execute a program written in JavaScript.
* NPM (Node Package Manager), which is an application and repository for developing and sharing JavaScript code.

## Usage

1. Input value in input.txt file 

_Example:_

```
        3 3
        1 2 3
        2 4 1
        1 5 6
```

2. Open new terminal 

3. Execute code

```
    node index
```
4. See the result in the terminal

_Example:_

|(index)|0|1|2|      
|--------------|-------|-------|-------|      
|0|1|2|3|   
|1|2|4|1|
|2|1|5|6|

>The biggest path has total size of **5**
---