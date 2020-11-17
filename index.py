import json
from faker import Faker

fake = Faker()
data_binary = fake.binary(length=1024)

# # dictionary = data_binary.decode('utf8').replace("'", '"')
# # Serializing json
# # json_object = json.dumps(dictionary, indent=4)

# # Writing to sample.json
# f = open('my_file', 'w+b')
# f.write(data_binary)
# f.close()


# my_bytes_value = b'[{\'Date\': \'2016-05-21T21:35:40Z\', \'CreationDate\': \'2012-05-05\', \'LogoType\': \'png\', \'Ref\': 164611595, \'Classe\': [\'Email addresses\', \'Passwords\'],\'Link\':\'http://some_link.com\'}]'

# Decode UTF-8 bytes to Unicode, and convert single quotes
# to double quotes to make it valid JSON
my_json = data_binary.decode('utf8').replace("'", '"')
print(my_json)
print('- ' * 20)

# Load the JSON to a Python list & dump it back out as formatted JSON
data = json.loads(my_json)
s = json.dumps(data, indent=4, sort_keys=True)
print(s)
