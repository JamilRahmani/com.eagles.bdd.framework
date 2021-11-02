$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "DataBase SQL query Feature Scenarios",
  "description": "",
  "id": "database-sql-query-feature-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6195373600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature-scenarios;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@testDB"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User connects to PostgreSql Database",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sends querry \u0027select * from public.city where country_id \u003d 44 order by city\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "DataBaseStepDefination.user_connects_to_postgreSQL_database()"
});
formatter.result({
  "duration": 2404036600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.city where country_id \u003d 44 order by city",
      "offset": 19
    }
  ],
  "location": "DataBaseStepDefination.user_sends_query(String)"
});
formatter.result({
  "duration": 11160600,
  "error_message": "java.lang.NullPointerException\r\n\tat utilities.DataBaseUtility.runQuery(DataBaseUtility.java:66)\r\n\tat stepDefinitions.DataBaseStepDefination.user_sends_query(DataBaseStepDefination.java:22)\r\n\tat ✽.When User sends querry \u0027select * from public.city where country_id \u003d 44 order by city\u0027(Features/DataBaseFeature.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2333754500,
  "status": "passed"
});
});