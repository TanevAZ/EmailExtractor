import re

pattern = re.compile(r'[\w\.-]+@[\w\.-]+')

inputcheck = input('Enter input file name : ')

outputcheck = input('Enter output file name : ')

with open(inputcheck, 'r') as input_file:

  with open(outputcheck, 'w') as output_file:
    for line in input_file:
      emails = pattern.findall(line)
      
      for email in emails:
        output_file.write(email + '\n')

        print(f'[+] {email}') # You can delete this line to make faster.

print('Emails successfuly extracted.')

input('Press any key to exit...')