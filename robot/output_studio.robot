*** Settings ***
Documentation	Robot Framework Template.
...
...					Keywords are imported from the resource file
Resource			keywords.resource
Default Tags			positive

*** Test Cases ***
Start Case
	Data BPBD	http://bpbd.semarangkota.go.id/pages/data-bencana	Chrome