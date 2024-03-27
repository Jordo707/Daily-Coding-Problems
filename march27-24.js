// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

class OrderLog {
    constructor(size) {
      this.size = size;
      this.log = new Array(size);
      this.currentIndex = 0;
      this.count = 0;
    }

    record(order_id) {
      this.log[this.currentIndex] = order_id;
      this.currentIndex = (this.currentIndex + 1) % this.size;
      if (this.count < this.size) {
        this.count++;
      }
    }

    get_last(i) {
      if (i <= 0 || i > this.count) {
        throw new Error('Invalid argument: i must be between 1 and the number of orders recorded');
      }
      // Calculate the index of the ith last element
      var index = (this.currentIndex - i + this.size) % this.size;
      return this.log[index];
    }
  }

  // Test Case:
  var log = new OrderLog(5);
  log.record(1);
  log.record(2);
  log.record(3);

  console.log(log.get_last(1)); // Expect 3
  console.log(log.get_last(2)); // Expect 2
  console.log(log.get_last(3)); // Expect 1
