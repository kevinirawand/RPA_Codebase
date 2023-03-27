*** Settings ***
Documentation     This is a resource file, that can contain variables and keywords.
...               Keywords defined here can be used where this Keywords.resource in loaded.
Library           SeleniumLibrary


*** Keywords ***
Buka Browser
    [Arguments]    ${LOGIN URL}    ${BROWSER}
    Open Browser    ${LOGIN URL}    ${BROWSER}
    
Data BPBD
    [Arguments]     ${URL}      ${browser}
    Open Browser    ${URL}      chrome
    ${elements} =   Get WebElements   partial link:ownload
    ${len}=     Get Length      ${elements}
    ${idx}=     evaluate    ${len}-1
    ${link}=    Set Variable    ${elements}[${idx}]
    Click Element   ${link}
    Sleep   10s
    Close Browser
    RETURN  SUCCESS