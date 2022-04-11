$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Sample.feature");
formatter.feature({
  "name": "feature to test opening the browser functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of the URL",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Sample.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"https://www.google.com//\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Sample.enter_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Sample.page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/Sample1.feature");
formatter.feature({
  "name": "feature to test search functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check search is successful or not",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the search page \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u0027\u003csearch\u003e\u0027 data",
  "keyword": "When "
});
formatter.step({
  "name": "click on search",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the search page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "search"
      ]
    },
    {
      "cells": [
        "java"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check search is successful or not",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the search page \"https://www.google.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Sample1.user_is_on_the_search_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \u0027java\u0027 data",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Sample1.user_enters_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Sample1.click_on_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Sample1.user_is_navigated_to_the_search_page()"
});
formatter.result({
  "status": "passed"
});
});