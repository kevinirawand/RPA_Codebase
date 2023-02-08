*** Settings ***
Documentation	A test suite for valid login.
...
...					Keywords are imported from the resource file
Resource			keywords.resource
Default Tags			positive

*** Test Cases ***
Start Case
	Buka Browser	https://google.com	Chrome