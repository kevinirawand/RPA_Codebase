*** Settings ***
Documentation	Robot Framework Template.
...
...					Keywords are imported from the resource file
Resource			keywords.resource
Default Tags			positive

*** Test Cases ***
Start Case
	Buka Browser	https://citylab.itb.ac.id	Chrome