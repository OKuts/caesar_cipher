const fs = require('fs');

const transform = ({input, output}) => {
  console.log(input, output)
  fs.readFile(input, "utf8", (err, data) => {
    if (err) {
      console.log('File not found')
      return ;
    }
    fs.writeFile(output, data, err => {
      if (err) {
        console.log('write error')
        return;
      }
      console.log('Success');
    });
  });
}

module.exports = transform;
