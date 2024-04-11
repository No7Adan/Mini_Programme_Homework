Page({
  data: {
    multiplicationTable: [],
  },

  onLoad: function () {
    const startNum = 9;
    const endNum = 1; 
    const table = [];
    for (let i = startNum; i >= endNum; i--) {
      let row = [];
      for (let j = 1; j <= i; j++) {
        row.push(j * i);
      }
      table.push(row);
    }
    this.setData({
      multiplicationTable: table,
    });
  },
});
