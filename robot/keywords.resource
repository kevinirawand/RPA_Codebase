*** Settings ***
Documentation     This is a resource file, that can contain variables and keywords.
...               Keywords defined here can be used where this Keywords.resource in loaded.
Library           SeleniumLibrary


*** Keywords ***
Buka Browser
    [Arguments]    ${LOGIN URL}    ${BROWSER}
    Open Browser    ${LOGIN URL}    ${BROWSER}
    
