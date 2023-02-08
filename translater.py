import json

def generate_params(properties):
    keys = properties.keys()
    list_param = []
    for k in keys:
        if(k != 'a'):
            param = '\t' + properties[k]
            list_param.append(param)

    return list_param

def generate_statement(node):
    statement = []
    keyword = '\t' + node['title']
    statement.append(keyword)
            
    for param in generate_params(node['properties']):
        statement.append(param)
    return statement


def init_robot_file():
    init_text = [
        "*** Settings ***\n",
        "Documentation\tA test suite for valid login.\n",
        "...\n",
        "...\t\t\t\t\tKeywords are imported from the resource file\n",
        "Resource\t\t\tkeywords.resource\n",
        "Default Tags\t\t\tpositive\n",
        "\n",
        "*** Test Cases ***\n",
        "Start Case\n"
    ]

    return init_text

def generate_robot_file(filename, statements):
    path = 'robot/' + filename
    file1 = open(path, 'w')
    file1.writelines(init_robot_file())
    file1.writelines(statements)
    file1.close()
    
# Opening JSON file
file_location = 'case2.json'
filename = file_location.split(".")[0] + '.robot'
path = 'datasaved/' + file_location

with open(path, 'r') as fcc_file:
    data = json.load(fcc_file)
  
# Iterating through the json
# list
for node in data['nodes']:
    if (node['title'] != 'start' and node['title'] != 'end'):
        statements = generate_statement(node)
        # print()
        generate_robot_file(filename, statements)
  
# Closing file
fcc_file.close()