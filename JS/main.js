const fs = require('fs');
const readline = require('readline');

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file input : ', inputFileName => {
  rl.question('Enter file output : ', outputFileName => {
    fs.readFile(inputFileName, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        return;
      }

      const emailAddresses = data.match(emailRegex);

      fs.writeFile(outputFileName, emailAddresses.join('\n'), err => {
        if (err) {
          console.error(`Error writing to file: ${err}`);
          return;
        }

        console.log('Email extracted and saved successfuly.');

        rl.question('Press any key to exit...', () => {
          rl.close();
        });
      });
    });
  });
});